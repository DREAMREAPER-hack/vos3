import Head from 'next/head';
import NavBar from '../../components/navbar';
import styles from '../../styles/Home.module.css';

const Pantai = () => (
    <div className={styles.container}>
        <Head>
            <title>Pantai</title>
            <meta 
                name='description' 
                content='ini adalah pantai di banyuwangi'/>
                <link rel='icon' href='/favicon' />
        </Head>

        <NavBar />

        <main className={styles.main}>

        </main>
    </div>
    
);

export default Pantai;