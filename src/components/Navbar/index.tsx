import styles from './index.module.scss'

export default function Navbar(){
    return(
        <div className={styles.container}>
            <h1>Mock <strong>S</strong>A</h1>
            <ul>
                <li>SDKs</li>
                <li>Docs</li>
                <li>Pricing</li>
                <li>Company</li>
                <li>Blog</li>
                <li>Contact Sales</li>
                <li><button>Free Trial</button></li>
            </ul>
        </div>
    )
}