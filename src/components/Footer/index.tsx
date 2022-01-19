import styles from './index.module.scss'

import Link from 'next/link'

export default function Footer(){
    return(
        
        <section className={styles.container}>
            <a href={"https://github.com/joaopedroalb/MockSA"}>Feito com amor por João Pedro Albuquerque 💗</a>
        </section>
    )
}