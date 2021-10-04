import type { NextPage } from 'next'
import { useState } from 'react'

import styles from '../../styles/Home.module.scss'

import Navbar from '../components/Navbar'
import HeaderSec from '../components/Corpo/HeaderSec'
import MiddleSec from '../components/Corpo/MiddleSec'
import BottomSec from '../components/Corpo/BottomSec'

const Home: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.container}>
      <Navbar menuActive={active} setMenuActive={setActive}/>
      {!active ? (
        <>
          <br/><br/>
          <HeaderSec/>
          <br/><br/>
          <MiddleSec/>
          <br/><br/>
          <BottomSec/>
        </>
      ):<></>}
      
    </div>
  )
}

export default Home
