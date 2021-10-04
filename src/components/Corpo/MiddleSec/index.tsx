import styles from './index.module.scss'
import Image from 'next/image'

import democraticeDesign from '../../../../public/democratice-design.svg'

export default function MiddleSec(){
    return(
        <section className={styles.container}>
            <Image src={democraticeDesign} alt="Design in work" width={300} height={300}/>
            <div className={styles.textContainer}>
                <h1>DEMOCRATIZE DESIGN</h1>
                <br/>
                <span>Creating beatiful designs is a challenge for many, 
                    often consisting of repetive. time consuming task. 
                    MOCK SA. removes these barriers. helping developers 
                    build applications that bring the world never befone 
                    seen content.
                </span>
            </div>
        </section>
    )
}