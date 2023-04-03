import '../styles/globals.css'
import  '../styles/output.css'
import Layout from '../components/layout';

import { useEffect } from 'react'





function MyApp({ Component, pageProps }) {


  return  <Layout>
           <Component {...pageProps} />
         </Layout>
}

export default MyApp
