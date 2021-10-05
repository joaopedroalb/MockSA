import type { NextPage } from 'next'
import { useState } from 'react'

import styles from '../../styles/Home.module.scss'

import Navbar from '../components/Navbar'
import HeaderSec from '../components/Corpo/HeaderSec'
import MiddleSec from '../components/Corpo/MiddleSec'
import BottomSec from '../components/Corpo/BottomSec'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.container}>
      <Navbar menuActive={active} setMenuActive={setActive}/>
      <div className={active?styles.containerSecOff:styles.containerSec}>
          <HeaderSec/>
          <MiddleSec/>
          <BottomSec/>
          
      </div>
      { !active?<Footer/>:<></>}
    </div>
  )
}

export default Home
