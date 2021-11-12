import NavBar from '../components/navbar';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Airterjun = () => (
    <div className={styles.container}>
        <Head>
            <title>Airterjun</title>
            <meta 
                name='description'
                content='ini adalah halaman airterjun'/>
                <link rel='icon' href='favicon.ico'/>
        </Head>
        <NavBar />

        <main className={styles.main}>
            <h1 className={styles.title}>Airterjun</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="/VOS/vos/img/air.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">TERLUNJUK RAUNG</h5>
        <p class="card-text">Berlokasi di Dusun Krajan, Kampung Anyar, Glagah, Banyuwangi, Air Terjun Kembar atau yang biasa disebut dengan Air Terjun Jagir, kerap kali menjadi buah bibir para pelancong yang pulang ke kampung halaman. Memang, keindahan air terjun ini tidak bisa dipungkiri lagi, karena Anda bahkan bisa melihat tiga air terjun sekaligus.

</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">JANGIR</h5>
        <p class="card-text">Air terjun jagir berada di Dusun Kampung Anyar, Desa Taman Suruh, Kecamatan Glagah. Jika biasanya air terjun tidak bisa diakses dengan mudah, berbeda dengan air terjun Jagir yang terletak dekat dengan pusat kota Banyuwangi. Jaraknya yang hanya 13 kilometer dari pusat kota ini, menjadikan air terjun jagir sebagai tempat yang pas untuk sejenak melepas penat.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">SELANDANG ARUM</h5>
        <p class="card-text">Terjun Selendang Arum terletak di Dusun Sumberasih, Desa Sumberarum, Kecamatan Songgon, Banyuwangi. Air Terjun ini memiliki ketinggian mencapai 20 meter dan keistimewaan berupa dinding tebing yang dialiri air nan eksotis. Bebatuan licin ini memancarkan kilauan saat cuaca cerah. Asal usul nama Selendang Arum dikarenakan bentuk bebatuannya mirip selendang.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">LIDER</h5>
        <p class="card-text">Air Terjun Lider memiliki pesona yang masih alami, itu terbukti dari sedikitnya pengunjung yang berkunjung ke tempat ini. Lokasinya yang tersembunyi dan berada di hutan belantara membuat suasana di air terjun Lider sejuk dan masih alami.</p>
      </div>
    </div>
  </div>
</div>
           
            </main>

    </div>
    
    
);

export default Airterjun;