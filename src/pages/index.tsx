import type { NextPage } from 'next'
import styles from '../../styles/Home.module.scss'
import HeaderSec from '../components/Corpo/HeaderSec'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Home: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.container}>
      <Navbar menuActive={active} setMenuActive={setActive}/>
      {!active ? (
        <>
          <br/>
          <HeaderSec/>
        </>
      ):<></>}
      
    </div>
  )
}

export default Home
