import Document, { Html, Head, Main, NextScript,Link } from 'next/document';
import tailwindcss from '!raw-loader!../styles/output.css';




class MyDocument extends Document {


  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps,

       styles: (
        <>
          <style
            dangerouslySetInnerHTML={{
              __html: tailwindcss
            }}
          />
          {initialProps.styles}
        </>
      )


    };
  }

  render() {

    return (
      <Html lang="pt">
        <Head>

          <link rel="apple-touch-icon" href="/favicon.ico" />
		  
          <meta name="theme-color" content="#650242"/>
		      <link rel="canonical" href="https://cursoconfeitaria.blendibox.com.br"/>

          <script async custom-element="amp-fit-text" src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"/>
          <script async custom-element="amp-selector" src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"/>

         
          <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
          
          <meta name="msvalidate.01" content="13BC51958165F779625DD28F673D5B4A"/>
          <meta name="verify-admitad" content="547987f230" />
          <meta httpEquiv='content-language' content='pt-br'/> 

          <meta name="description" content="Aqui Você encontra dicas dos melhores cursos para você se preparar para o sucesso!"/>
		

       
        </Head>
    	
        <body >

        <amp-pixel src="https://www.facebook.com/tr?id=926977218348572&ev=PageView&noscript=1" layout="nodisplay"/>


            

          <header  className="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4"  >


          </header>       



          <Main />
          <NextScript />


        </body>
      </Html>
    );
  }
}

export default MyDocument;