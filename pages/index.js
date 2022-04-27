import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <ul className={styles.Nav}>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/profile">
            <a>
              <li>Profile</li>
            </a>
          </Link>
        </ul>
      </Head>
    </div>
    <div className={styles.main}>
      <h4>This is Home Page</h4>
    </div>
    </>
  )
}
