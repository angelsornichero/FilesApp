import Link from "next/link"
import styles from './Form.module.css'

export function RegisterForm () {
return (
<div className={styles.signupFrm}>
    <form className={styles.formulator}>
      <h1 className={styles.title}>Sign up</h1>

       <div className={styles.inputContainer}>
        <input type="text" className={styles.input} placeholder="a" />
        <label for="" className={styles.label}>Username</label>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} placeholder="a" />
        <label for="" className={styles.label}>Name</label>
      </div>     
      <div className={styles.inputContainer}>
        <input type="password" className={styles.input} placeholder="a" />
        <label for="" className={styles.label}>Password</label>
      </div>

      <div className={styles.inputContainer}>
        <input type="password" className={styles.input} placeholder="a" />
        <label for="" className={styles.label}>Confirm Password</label>
      </div>

      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} placeholder="a" />
        <label for="" className={styles.label}>Email</label>
      </div>
      <div className={styles.inputContainer}>
        <label for="" className={styles.label}>Already registered? Click here: <Link href="/login">Login</Link></label>
      </div>
      <input type="submit" className={styles.submitBtn} value="Sign up" />
    
        
    </form>
</div>
    )
}