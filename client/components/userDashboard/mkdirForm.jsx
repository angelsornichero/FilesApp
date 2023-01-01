'use client'

import { useState, useEffect } from "react"
import axios from "axios"
import styles from './dashboard.module.css'
import cookie from 'cookie-cutter'
import { FaRegFolderOpen } from 'react-icons/fa'

export const MkdirForm = (path) => {
    const reqPath = path.path.path

    const [dirname, setDirname] = useState('')
    const [jwt, setJwt] = useState('')

    useEffect(() => {
        return () => {
            setJwt(cookie.get('sessionJWT'))
        }
    })

    const mkdir = async () => {
        if (dirname === '') return
        const request = await axios.post(process.env.baseURL + `/api/mkdir/${reqPath}`,  {dirName: dirname}, {
            headers: {
                authorization: jwt
            }
        }
        )
        console.log(request)
        window.location.reload()
    }

    return (
        <div className={styles.mkdirContent} >
            
            <input className={styles.inputDir} placeholder="Write the dirname" type='text' onChange={(e) => setDirname(e.target.value)} />
            <button onClick={mkdir} className={styles.buttonDir} >Make directory <i><FaRegFolderOpen /></i> </button>
        </div>
    )

}
