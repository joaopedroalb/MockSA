import styles from './index.module.scss'
import Image from 'next/image'

import hologram from '../../../../public/hologram-blue.svg'

export default function HeaderSec(){
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h1>BRIDGING TECHNOLOGY & DESIGN</h1>
                <span>Mock SA is build the creative engine that brings beatiful video 
                    and photo editing to your applications. From fortune 100 businesses 
                    to new startups. Our SDKs power hundreds of applications
                </span>
            </div>
            <Image src={hologram} alt="Hologram"
                    width={200} height={200}/>
        </section>
    )
}