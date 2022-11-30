import Image from 'next/image'
import styles from './Images.module.css'
const imagesSrc = ['/../public/photoPage.jpg', '/../public/photoPage2.jpg', '/../public/photoPage3.jpg']

export function Images () {
    return (
        <div className={styles.carousel}>
            
            <div className="carousel-item ">
                <Image src={imagesSrc[0]} className={styles.image} width="400" height="400"/>
            </div>
           <div className='carousel-item'>
                <Image src={imagesSrc[1]} className={styles.image} width="400" height="400"/>
            </div>
            <div className='carousel-item'>
                <Image src={imagesSrc[2]} className={styles.image} width="400" height="400"/>
            </div>
        </div>
    )
}