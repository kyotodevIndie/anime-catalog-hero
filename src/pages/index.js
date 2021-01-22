import Head from 'next/head'
import styles from '../styles/Home.module.css'
import api from './api/api'

export async function getStaticProps() {
  const res = api.get('')
  .then(response => {
    console.log(response.data);
  }, error => {
    console.log(error);
  });
  return {
    props: {
      api,
    },
  };
}

export default function Home(props) {
  // const { anime } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* { anime } */}
          Ae garai
        </h1>
        

        
      </main>
    </div>
  )
}
