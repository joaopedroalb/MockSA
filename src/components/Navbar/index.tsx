import styles from './index.module.scss'
import { useState } from 'react'
import useWindowDimensions from '../../Context/useWindowDimensions';

export default function Navbar(){
    
    const [menuActive,setMenuActive] = useState(true);

    const {width} = useWindowDimensions();
    // function toggleMenu(){
        
    // }

    return(
        <div className={width>660? styles.container:menuActive?styles.containerMobileOff:styles.containerMobileOn}>
            <h1>Mock <strong>S</strong>A</h1>
            <button 
                className={menuActive? styles.btnMobile:styles.btnMobileActive} 
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