'use client'
import styles from './dashboard.module.css'
import axios from 'axios'
import cookie from 'cookie-cutter'
import { useEffect, useState } from 'react' 
import { FaRegFolder, FaRegFile, FaArrowLeft, FaDownload, FaTrashAlt } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import fileDownload from 'js-file-download'


export const ContentComponent =  (path) => {
    const reqPath = path.path.path
    
    const [loading, setLoading] = useState(true)
    const [directories, setDirectories] = useState([])
    const [files, setFiles] = useState([])
    const [pathState, setPathState] = useState('')
    const [opened, setOpened] = useState(false)
    const [fileToRemove, setFileToRemove] = useState('')
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
            
            setDirectories(req.data.directories)
            setFiles(req.data.files)
            setPathState(req.data.path.replace(`${req.data.user}`, '').replaceAll('/', '-').replaceAll('--', '-'))
            setLoading(false)
        }
    }, [])

    const downloadContent = (name) => {
        console.log('click', name)
        const jwt = cookie.get('sessionJWT')
        axios.post(process.env.baseURL + `/api/download/${reqPath}`, {
            fileName: name
        }, {
            headers: {
                authorization: `token ${jwt}`
            },
            responseType: 'blob'
        }).catch((error) => {
            console.log(error)
       }).then((res) => {
        fileDownload(res.data, name)
       })
      
    }

   const manipulateString = (string) => {
        const breakString = string.replace('--', '-').split('-')
        const stringFiltered = breakString.filter(el => el !== '')
        const newString = string.replace(stringFiltered.pop(), '').replace('-', '')
        return newString
   }

  const handleModal = (fileName) => {
    const modal = document.getElementById('modal')
    setFileToRemove(fileName)
    if (opened === false) modal.style.display = 'flex'
    if (opened === true) modal.style.display = 'none'
    setOpened(!opened)

  }

  const eliminateFile = () => {
    const jwt = cookie.get('sessionJWT')
        axios.post(process.env.baseURL + `/api/remove-file/${reqPath}`, {
            fileName: fileToRemove
        }, {
            headers: {
                authorization: `token ${jwt}`
            }
            
        }).catch((error) => {
            console.log(error)
       }).then((res) => {
            window.location.reload()
       })
    }
 

  
    return (
        <div>
            {
                loading ? <h1>Loading...</h1>
                : (
                    <>
                        
                        <div className={styles.content} >
                            {pathState === '' ? <div></div> : <Link href={'/dashboard/' + manipulateString(pathState)}><h1 className={styles.directories}><FaArrowLeft /></h1></Link>}
                            {directories.map(directory => (
                                <div className={styles.directories}>
                                    <Link href={`/dashboard/${pathState + '-' + directory}`}>
                                        <h1 key={directory}>
                                        <FaRegFolder /> {directory} </h1>
                                    </Link>
                                    <button onClick={() => handleModal(directory)} className={styles.delete}><FaTrashAlt/></button>
                                </div>
                            ))}
                            {files.map(file => (
                            <div key={file} className={styles.files}>
                                <h1><FaRegFile />{file}</h1>
                                <div className={styles.functionsFiles} >
                                    <button onClick={() => downloadContent(file)} className={styles.download} ><FaDownload /></button> 
                                    <button onClick={() => {handleModal(file)} } className={styles.delete}><FaTrashAlt/></button>
                                </div>
                            </div>))}
                            <div id='modal' className={styles.modal}>
                                <h1 className={styles.eliminateTitle} >Are you sure of eliminate this file?</h1>
                                <div className={styles.eliminateFunctions} >
                                    <button className={styles.closeBtn} onClick={() => {handleModal('')}}>Close</button>
                                    <button className={styles.eliminateBtn} onClick={eliminateFile} >Eliminate</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
        
    )
}