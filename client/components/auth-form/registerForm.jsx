'use client'
import Link from "next/link"
import styles from './Form.module.css'
import { RegisterApi } from "../api/auth/register"
import { useState } from "react"
import { setCookie } from "../api/auth/cookies/setCookie"
import { useRouter }  from 'next/navigation'

export function RegisterForm () {
  const router = useRouter()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('')

  const submitForm = async (event) => {
    event.preventDefault()
    const user = {
      name,
      username,
      password,
      repeat_password: repeatPassword,
      email
    }
    const response = await RegisterApi(user)
    setCookie(response.token)
    router.push('/dashboard')
  }

  return (
  <div className={styles.signupFrm}>
      <form onSubmit={(target) => submitForm(target)} 
        className={styles.formulator}>
        <h1 className={styles.title}>Sign up</h1>

        <div className={styles.inputContainer}>
          <input type="text" name="username" className={styles.input} placeholder="a" value={username} 
          onChange={({target}) => setUsername(target.value)} />
          <label for="" className={styles.label}>Username</label>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" name="name"className={styles.input} placeholder="a" value={name} 
          onChange={({target}) => setName(target.value)} />
          <label for="" className={styles.label}>Name</label>
        </div>     
        <div className={styles.inputContainer}>
          <input type="password" name="password" className={styles.input} placeholder="a" value={password} 
          onChange={({target}) => setPassword(target.value)} />
          <label for="" className={styles.label}>Password</label>
        </div>

        <div className={styles.inputContainer}>
          <input type="password" name="repeat_password" className={styles.input} placeholder="a" value={repeatPassword} 
          onChange={({target}) => setRepeatPassword(target.value)} />
          <label for="" className={styles.label}>Confirm Password</label>
        </div>

        <div className={styles.inputContainer}>
          <input type="email" name="email" className={styles.input} placeholder="a" value={email} 
          onChange={({target}) => setEmail(target.value)} />
          <label for="" className={styles.label}>Email</label>
        </div>
        <div className={styles.inputContainer}>
          <label for="" className={styles.label}>Already registered? Click here: <Link className={styles.link} href="/login">Login</Link></label>
        </div>
        <input type="submit" className={styles.submitBtn} value="Sign up" />
      
          
      </form>
  </div>
      )
}