'use client'
import styles from './dashboard.module.css'
import axios from 'axios'
import cookie from 'cookie-cutter'
import { useEffect, useState } from 'react' 
import { FaRegFolder, FaRegFile, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const ContentComponent =  (path) => {
    const reqPath = path.path.path
    console.log(reqPath)
    const [previusUrl, setPreviousUrl] = useState('')
    const [loading, setLoading] = useState(true)
    const [directories, setDirectories] = useState([])
    const [files, setFiles] = useState([])
    const [pathState, setPathState] = useState('')
    const [userState, setUserState] = useState('')
    const router = useRouter()
    useEffect(() => {
        return async () => {
            const jwt = cookie.get('sessionJWT')
            const req = await axios.post(process.env.baseURL + `/api/files/${reqPath}`, {}, {
                headers: {
                    authorization: `token ${jwt}`
                }
            }).catch((error) => {
                router.push('/404')
            })
            console.log(req.data)
            setDirectories(req.data.directories)
            setFiles(req.data.files)
        
            setPathState(req.data.path.replace(`${req.data.user}`, '').replaceAll('/', '-').replaceAll('--', '-'))
            setUserState(req.data.user)
            console.log(userState)
            setLoading(false)
        }
    }, [])

   const manipulateString = (string) => {
        const breakString = string.replace('--', '-').split('-')
        const stringFiltered = breakString.filter(el => el !== '')
        const newString = string.replace(stringFiltered.pop(), '').replace('-', '')
        console.log(breakString, stringFiltered,stringFiltered.pop())
        console.log(newString)
        return newString
   }

    return (
        <div>
            {
                loading ? <h1>Loading...</h1>
                : (
                    <>
                        <h1 className={styles.title} >Welcome 👋 {userState}! </h1>
                        <h3 className={styles.path} >Path: {pathState.replaceAll('-', '/').replaceAll('//', '/').replaceAll('///', '/') === '' ? '/' : pathState.replaceAll('-', '/').replaceAll('//', '/')} </h3>
                        <div className={styles.content} >
                            {pathState === '' ? <div></div> : <Link href={'/dashboard/' + manipulateString(pathState)}><h1 className={styles.directories}><FaArrowLeft /></h1></Link>}
                            {directories.map(directory => (<Link href={`/dashboard/${pathState + '-' + directory}`}><h1 key={directory} className={styles.directories} > <FaRegFolder /> {directory} </h1></Link>))}
                            {files.map(file => (<h1 key={file} className={styles.files} ><FaRegFile />{file}</h1>))}
                        </div>
                    </>
                )
            }
        </div>
        
    )
}