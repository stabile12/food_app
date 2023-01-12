import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../component/Featured'
import PizzaList from './../component/PizzaList';
import React,{useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';
import AddButton from './../component/AddButton';
import Add from '../component/Add';

export default function Home({pizzaList, admin}) { // pizzalist vem do serverSideProps
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Estabile's</title>
        <meta name="description" content="best in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList}/> {/* aqui é passado a prop*/ }
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get('http://localhost:3000/api/products');
  return{
    props: {
      pizzaList: res.data,
      admin
    }
  }
}