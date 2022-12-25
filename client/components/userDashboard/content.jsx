'use client'
import styles from './dashboard.module.css'
import axios from 'axios'
import cookie from 'cookie-cutter'
import { useEffect, useState } from 'react' 
import { FaRegFolder, FaRegFile } from 'react-icons/fa'


export const ContentComponent =  () => {
    const [loading, setLoading] = useState(true)
    const [directories, setDirectories] = useState([])
    const [files, setFiles] = useState([])
    const [path, setPath] = useState('')

    useEffect(() => {
        return async () => {
            const jwt = cookie.get('sessionJWT')
            console.log(jwt)
            
            const req = await axios.post(process.env.baseURL + '/api/files/-', {}, {
                headers: {
                    authorization: `token ${jwt}`
                }
            }) 
            console.log(req.data)

            setDirectories(req.data.directories)
            setFiles(req.data.files)
            setPath(req.data.path)
            setLoading(false)
        }
    }, [])


    return (
        <div>
            {
                loading ? <h1>Loading...</h1>
                : (
                    <>
                        <h1 className={styles.title} >Welcome 👋 {path}! </h1>
                        <div className={styles.content} >
                            {directories.map(directory => (<h1 className={styles.directories} > <FaRegFolder /> {directory} </h1>))}
                            {files.map(file => (<h1 className={styles.files} > <FaRegFile /> {file} </h1>))}
                        </div>
                    </>
                )
            }
        </div>
        
    )
}