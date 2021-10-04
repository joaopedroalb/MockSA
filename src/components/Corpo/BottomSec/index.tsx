import styles from './index.module.scss'
import pairPrograming from '../../../../public/pair-programing.svg'

import Image from 'next/image'

export default function BottomSec(){
    return(
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Giving Back</h1>
                <span>As tech and design enthusiasts. 
                    gamers, and creators, we benefit from 
                    creations and communities that power our world, 
                    so it is time to give back
                </span>
                <h2>DESIGN x TECHNOLOGY (DXT)</h2>
                <span>
                    In our annual DXT conference. We gather creatives in various fields. 
                    from creative coders to branding experts, to discover new trends and open new grounds
                </span>
                <h2>Supporting Open source</h2>
                <span>
                    Smart code powers ideas, So we love connecting with open Source communities
                </span>
            </div>
            <br/>
            <Image src={pairPrograming} alt="Design in work" width={300} height={300}/>
        </section>
    )
}