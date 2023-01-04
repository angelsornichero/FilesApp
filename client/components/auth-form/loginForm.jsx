'use client'
import styles from './Form.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { LoginApi } from '../api/auth/login'
import { setCookie } from 'cookies-next';
import { useRouter }  from 'next/navigation'

export function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const submitForm = async (event) => {
    event.preventDefault()
    const user = {
      username,
      password
    }
    const response = await LoginApi(user)
    console.log(response)
    setCookie('sessionJWT', response.token) 
    router.push('/dashboard')
  }

  return (
      <form onSubmit={(event) => {submitForm(event)}} className={styles.formulator}>
        <h1 className={styles.title}>Log in</h1>

        <div className={styles.inputContainer}>
          <input type="text" className={styles.input} value={username} 
          onChange={({target}) => setUsername(target.value)} placeholder="a" />
          <label for="" className={styles.label}>Username</label>
        </div>
        
        <div className={styles.inputContainer}>
          <input type="password" className={styles.input} value={password} onChange={({target}) => setPassword(target.value)} placeholder="a" />
          <label for="" className={styles.label}>Password</label>
        </div>
        <div className={styles.inputContainer}>
          <label for="" className={styles.label}>New User: <Link href="/register" className={styles.link}>Register here</Link></label>
        </div>
        <input type="submit" className={styles.submitBtn} value="Log in" />
      
          
      </form>
)
}