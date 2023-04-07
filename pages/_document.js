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
	




          <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "d6c6uyqopa");
         ` }}
          />
            

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-N3S9JTJZHT"/>
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N3S9JTJZHT');` }}
          />



          <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '926977218348572');
            fbq('track', 'PageView');` }}
          />
          <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=926977218348572&ev=PageView&noscript=1" />` }}
          />

        </Head>
    	
        <body >
      
          


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