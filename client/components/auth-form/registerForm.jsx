'use client'
import Link from "next/link"
import styles from './Form.module.css'
import { useRegister } from "../../hooks/useRegister"

export function RegisterForm () {

  const submitForm = (name, username, password, repeatPassword, email) => {
    useRegister({name, username, password, repeatPassword, email})
  }

  return (
  <div className={styles.signupFrm}>
      <form onSubmit={submitForm} className={styles.formulator}>
        <h1 className={styles.title}>Sign up</h1>

        <div className={styles.inputContainer}>
          <input type="text" name="username" className={styles.input} placeholder="a" />
          <label for="" className={styles.label}>Username</label>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" name="name"className={styles.input} placeholder="a" />
          <label for="" className={styles.label}>Name</label>
        </div>     
        <div className={styles.inputContainer}>
          <input type="password" name="password" className={styles.input} placeholder="a" />
          <label for="" className={styles.label}>Password</label>
        </div>

        <div className={styles.inputContainer}>
          <input type="password" name="repeatPassword" className={styles.input} placeholder="a" />
          <label for="" className={styles.label}>Confirm Password</label>
        </div>

        <div className={styles.inputContainer}>
          <input type="text" name="email" className={styles.input} placeholder="a" />
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