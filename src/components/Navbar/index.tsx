import styles from './index.module.scss'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiX} from 'react-icons/hi'

export default function Navbar(){
    
    const [menuActive,setMenuActive] = useState(false);

    return(
        <div className={menuActive?styles.containerMobileOn:styles.container}>
            <h1>Mock <strong>S</strong>A</h1>
            <button 
                className={menuActive? styles.btnMobileActive:styles.btnMobile} 
                onClick={_=>setMenuActive(!menuActive)}
            >{menuActive?
                <HiX color={"#fff"} size={25}/>
                :
                <GiHamburgerMenu color={"#fff"} size={25}/>
            }
            
            </button>
            <ul className={menuActive? styles.menuOn:styles.menuOff}>
                <li onClick={_=>setMenuActive(false)}>SDKs</li>
                <li onClick={_=>setMenuActive(false)}>Docs</li>
                <li onClick={_=>setMenuActive(false)}>Pricing</li>
                <li onClick={_=>setMenuActive(false)}>Company</li>
                <li onClick={_=>setMenuActive(false)}>Blog</li>
                <li onClick={_=>setMenuActive(false)}>Contact Sales</li>
                <li><button className={styles.btnNav} onClick={_=>setMenuActive(false)}>Free Trial</button></li>
            </ul>
        </div>
    )
}