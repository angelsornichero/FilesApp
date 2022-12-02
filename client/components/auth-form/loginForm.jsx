import styles from './Form.module.css'
import Link from 'next/link'

export function LoginForm () {
return (
    <form className={styles.formulator}>
      <h1 className={styles.title}>Log in</h1>

       <div className={styles.inputContainer}>
        <input type="text" className={styles.input} placeholder="a" />
        <label for="" className={styles.label}>Username</label>
      </div>
      
      <div className={styles.inputContainer}>
        <input type="password" className={styles.input} placeholder="a" />
        <label for="" className={styles.label}>Password</label>
      </div>
      <div className={styles.inputContainer}>
        <label for="" className={styles.label}>New User: <Link href="/register" className={styles.link}>Register here</Link></label>
      </div>
      <input type="submit" className={styles.submitBtn} value="Log in" />
    
        
    </form>
)
}