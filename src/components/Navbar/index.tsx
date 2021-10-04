import styles from './index.module.scss'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiX} from 'react-icons/hi'

export default function Navbar(props:{menuActive:boolean, setMenuActive:any}){

    return(
        <div className={props.menuActive?styles.containerMobileOn:styles.container}>
            <h1>Mock <strong style={{color:"#2196f3"}}>S</strong>A</h1>
            <button 
                className={props.menuActive? styles.btnMobileActive:styles.btnMobile} 
                onClick={_=>props.setMenuActive(!props.menuActive)}
            >{props.menuActive?
                <HiX color={"#fff"} size={25}/>
                :
                <GiHamburgerMenu color={"#fff"} size={25}/>
            }
            
            </button>
            <ul className={props.menuActive? styles.menuOn:styles.menuOff}>
                <li onClick={_=>props.setMenuActive(false)}>SDKs</li>
                <li onClick={_=>props.setMenuActive(false)}>Docs</li>
                <li onClick={_=>props.setMenuActive(false)}>Pricing</li>
                <li onClick={_=>props.setMenuActive(false)}>Company</li>
                <li onClick={_=>props.setMenuActive(false)}>Blog</li>
                <li onClick={_=>props.setMenuActive(false)}>Contact Sales</li>
                <li><button className={styles.btnNav} onClick={_=>props.setMenuActive(false)}>Free Trial</button></li>
            </ul>
        </div>
    )
}