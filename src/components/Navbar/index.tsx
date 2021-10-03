import styles from './index.module.scss'
import { useState } from 'react'

export default function Navbar(){
    
    const [menuActive,setMenuActive] = useState(true);

    // function toggleMenu(){
        
    // }

    return(
        <div className={styles.container}>
            <h1>Mock <strong>S</strong>A</h1>
            <button 
                className={styles.btnMobile} 
                onClick={_=>setMenuActive(!menuActive)}
            >
                Menu</button>
            <ul className={menuActive? styles.menuOn:styles.menuOff}>
                <li>SDKs</li>
                <li>Docs</li>
                <li>Pricing</li>
                <li>Company</li>
                <li>Blog</li>
                <li>Contact Sales</li>
                <li><button className={styles.btnNav}>Free Trial</button></li>
            </ul>
        </div>
    )
}