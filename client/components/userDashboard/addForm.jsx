'use client'
import axios from 'axios'
import cookie from 'cookie-cutter'
import { useEffect, useState } from 'react'
import styles from './dashboard.module.css'

export const AddForm = (path) => {
    const reqPath = path.path.path
    console.log(reqPath)
    const [files, setFiles] = useState([])
    const [count, setCount] = useState(0)
    const [jwt, setJwt] = useState('')

    useEffect(() => {
        return () => {
            setJwt(cookie.get('sessionJWT'))
        }
    })


    const loadFiles = (e) => {
        setFiles(e)
        console.log(files, files.length)
        setCount(files.length)
    } 

    const sendFiles = async () => {
        const f = new FormData()
        for (let index = 0; index < files.length; index++) {
            f.append('files', files[index])
        }  
        console.log(f)

        const request = await axios.post(process.env.baseURL + `/api/upload/${reqPath}`, f, {
            headers: {
                authorization: jwt
            }
        })
        window.location.reload()
    }


    return (
        <div className={styles.form} >
            <input id="select-files" className={styles.input} type="file"  multiple onChange={(e) => loadFiles(e.target.files)} />
            <div>
                <label className={styles.label} htmlFor="select-files">
                    <span>Select files for upload</span>
                </label>
                <span className={styles.count} >Files count is: {count} </span>
            </div>
            <button className={styles.send} onClick={sendFiles}>Upload files</button>
        </div>
    )
}