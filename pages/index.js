import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

export default function Beranda() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WISATA BANYUWANGI</title>
        <meta name="description" content="Virtual organisasi system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>WISATA BANYUWANGI</h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <Link href='/airterjun'>
          <a className={styles.card}>
            <h2>air terjun &rarr;</h2>
            <p>kumpulan  wisata air terjun yang ada di banyuwangi</p>
          </a>
          </Link>
         

          <div className={styles.grid}>
          <Link href='/pantai'>
          <a className={styles.card}>
            <h2>pantai &rarr;</h2>
            <p>kumpulan  wisata pantai yang ada di banyuwangi</p>
          </a>
          </Link>
          </div>
        </div>
     

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </main>
    </div>
  );
}
