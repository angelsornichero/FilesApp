import styles from './homePageInfo.module.css'

export function HomePageInfo () {

    return (
    <>
        <div className={styles.container}> 
            <div>
                <div className={styles.textgradient}>
                    <h3 className={styles.title}>Welcome<i className={styles.i}>👋</i>!</h3>
                </div>
               <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, deleniti. Possimus, similique pariatur eius necessitatibus animi fuga repudiandae minima odit at, sint corrupti eos reprehenderit mollitia nulla cum suscipit sed velit quia. Nihil odit aliquam rerum reiciendis culpa, hic iusto alias fugiat error eius libero nesciunt facere explicabo itaque ad expedita! Fuga iure provident minima nam nostrum quidem quae obcaecati architecto doloremque facere maiores sunt, sequi omnis nulla, expedita quam recusandae magnam, molestias minus. Molestiae eius debitis mollitia inventore. Reprehenderit perferendis ipsum similique molestiae odio animi nam fugit placeat nulla repudiandae? Similique ducimus repellat deserunt ratione esse, obcaecati asperiores architecto maiores voluptas ipsa voluptates suscipit delectus aperiam eveniet dignissimos eos excepturi dolore. Incidunt, a? Commodi excepturi debitis et dicta dolor. In nemo facilis alias labore. Molestias, omnis ad. Odit neque, voluptatem cumque, sunt enim necessitatibus a nemo quam quasi harum porro quibusdam maxime? Recusandae deleniti vel fuga beatae voluptate debitis ut nesciunt adipisci quod non eius aperiam voluptates similique maxime et velit veniam, quaerat, assumenda necessitatibus, earum magnam hic! Quidem expedita nam quae in quam mollitia amet corporis possimus officiis, quasi corrupti eaque eveniet magnam non, ipsam architecto provident iste repudiandae a minima perferendis eos, animi placeat exercitationem? Exercitationem, nesciunt!</p>
            </div>
            
        </div>
        <div className={styles.valuesContainer}>
            <div>
                <h4 className={styles.values}>Our Values</h4>
            </div>
            <ul className={styles.ulValues}>
                <li className={styles.Security}>
                    Security.
                </li>
                <li className={styles.Fast}>
                    Fast.
                </li>
                <li className={styles.Adaptable}>
                    Adaptable.
                </li>
            </ul>
        </div>
    
    </>
    )

}