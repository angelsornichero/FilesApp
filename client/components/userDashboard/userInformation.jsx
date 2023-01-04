'use client'
import styles from './dashboard.module.css'
import axios from 'axios'
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react' 


export const PersonalInfo = (path) => {
    const reqPath = path.path.path
    console.log(process.env.baseURL, 'undefined')
    const [pathState, setPathState] = useState('')
    const [userState, setUserState] = useState('')
    useEffect(() => {
        return async () => {
            const jwt = getCookie('sessionJWT')
            
            const req = await axios.post(process.env.baseURL + `/api/files/${reqPath}`, {}, {
                headers: {
                    authorization: `token ${jwt}`
                }
            }).catch((error) => {
                router.push('/404')
            })
            
            setPathState(req.data.path.replace(`${req.data.user}`, '').replaceAll('/', '-').replaceAll('--', '-'))
            setUserState(req.data.user)
            
        }
    }, [])
    return (
        <>
            <h1 className={styles.title} >Welcome 👋 {userState}! </h1>
            <h3 className={styles.path} >Path: {pathState.replaceAll('-', '/').replaceAll('//', '/').replaceAll('///', '/') === '' ? '/' : pathState.replaceAll('-', '/').replaceAll('//', '/')} </h3>
        </>
    )
}