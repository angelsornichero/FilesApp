'use client'
import styles from './Scroll.module.css'

export function ScrollDown () {
    const handleclick = (event) => {
        window.scrollTo(0, document.querySelector('.homePageInfo_container__TDdQC').scrollHeight, 'smooth')
        
    }
    return (
        <div onClick={handleclick} className={styles.scrollDown}></div>
        
       
    )
}