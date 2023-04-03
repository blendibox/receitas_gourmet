// components/Layout.js

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const revalidate = 60 * 60 * 24 * 7; // revalidate this page every 60 seconds * 60 * 24 * 7 = 7 dias

export const config = { amp: true };

function Layout(props) {

const font = "/Poppins-Regular.woff";

  return (
      <div className="containner">
         <Head>
           <title>Blendibox - Comprar Moda Online</title>
         </Head>




     

      {props.children}
    
  
 
  </div>
  );
}

export default Layout;