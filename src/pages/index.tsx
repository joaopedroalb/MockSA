import type { NextPage } from 'next'
import styles from '../../styles/Home.module.scss'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
    </div>
  )
}

export default Home
