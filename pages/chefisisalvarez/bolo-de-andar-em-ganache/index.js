import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import Head from 'next/head';
import Video from '@/components/video'
import Footer from '@/components/footer'
import Link from 'next/link'
import Countdown from "@/components/Countdown";
export const config = { amp: true };





const linkGrupoWhatsapp = 'https://chat.whatsapp.com/HK3uagGePhi8RWW1UstVN1';



const background = '/assets/chef-isis-alvarez/bolo_andar_ganache/Fundo-scaled-1-jpg.webp';
const image1 = '/assets/chef-isis-alvarez/bolo_andar_ganache/BolodeAndarGanache2.png';
const image2 = '/assets/chef-isis-alvarez/bolo_andar_ganache/Bolo-830x1024.png';
const image3 = '/assets/chef-isis-alvarez/bolo_andar_ganache/vem_aprender.png';
const nomeCurso = ' Curso da Chef Isis Alvarez - Recheios, a Alma da Confeitaria';
const videoMp4 = '/assets/chef-isis-alvarez/bolo_andar_ganache/chamada_semana_gratuita_bolos_de_festa.mp4';
const videoImage = '/assets/chef-isis-alvarez/bolo_andar_ganache/ccapa_video_bolo_ganache';
const brand ="Blendibox [Representante Autorizado]";
const description = 'Entre no Grupo do Whatsapp para assistir as Aulas Gratuitas da Chef Isis Alvarez. Durante as aulas, ela ensinará como fazer Recheios Gourmet para diversas finalidades: bolos, ovos de páscoa de colher, copo da felicidade, e muito mais!';
const cor_video_conteiner = '#763535';

const palavrasChave = 'recheios a alma da confeitaria,'+
'curso de doces gourmet,'+
'brigadeiro,'+
'leite condensado,'+
'creme de leite,'+
'doce de leite,'+
'receitas de páscoa,'+
'receitas de sobremesas,'+
'doces para vender e lucrar,'+
'curso de doces finos,'+
'curso de doces gratuito,'+
'curso de doces blendibox,'+
'blendibox,'+
'semana gratuita dos recheios,'+
'alma da confeitaria,'+
'ísis alvarez,'+
'recheios a alma da confeitaria ísis alvarez,'+
'apostila recheios a alma da confeitaria,'+
'apostila,'+
'apostila ísis alvarez,'+
'ebook ísis alvarez,'+
'isis alvarez bolo caseiro,'+
'isis alvarez bolo de pote,'+
'isis alvarez red velvet,'+
'isis alvarez confeitaria,'+
'isis alvarez recheio,'+
'isis alvarez curso,'+
'bolos da isis alvarez,'+
'confeiteira isis alvarez,'+
'receitas da isis alvarez,'+
'alma da confeitaria é bom,'+
'bZPSsDv6pco,'+
'curso de recheios,'+
'curso confeitaria,'+
'curso para aprender a confeitar,'+
'recheio de bolo simples,'+
'recheio de bolo de aniversário'+
'recheio de bolo de chocolate,'+
'recheio de ovo de colher,'+
'recheio de ovomaltine,'+
'recheio de ovo de pascoa,'+
'recheio de ovo da pascoa,'+
'recheio de bolo,'+
'recheio de leite ninho';




export async function getStaticProps(context) {



   return {
    props: {
       faWhatsapp:faWhatsapp,
       linkGrupoWhatsapp:linkGrupoWhatsapp
    }
   }
}




 function revenda_item({faWhatsapp, linkGrupoWhatsapp}) {

  return(


    
    <main id="content" role="main"  className='container mx-auto font-sans ' >

 
   <Head>
        <title>
         {nomeCurso}
        </title>
          <script   type="application/ld+json"  
          dangerouslySetInnerHTML=
               {{ __html: JSON.stringify( 

                 {
                  "@context": "http://schema.org",
                  "@type": "NewsArticle",
                  "mainEntityOfPage": "http://cdn.ampproject.org/article-metadata.html",
                  "headline": {nomeCurso},
                  "datePublished": "2023-04-03T12:02:41Z",
                  "dateModified": "2023-04-03T12:02:41Z",
                  "description":  "Procurando " + nomeCurso + "? Clique aqui e Reserve sua Vaga para Assistir Online as aulas gratuitas, número de vagas limitadas. "  + description,
                  "author": {
                    "@type": "Person",
                    "name": "Juliana"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Blendibox",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://comprar.blendibox.com.br/favicon.ico",
                      "width": 40,
                      "height": 40
                    }
                  },
                  "image": {
                    "@type": "ImageObject",
                    "url": {image1},
                    "height": 205,
                    "width": 205
                  }
                }

              
            )
             
          }}
        />


        <meta  name="robots" content="follow, index" />
        <meta  name="description" content={nomeCurso} />
        <meta  property="og:site_name" content={nomeCurso} />
        <meta  property="og:description" content={nomeCurso} />
        <meta  property="og:title" content={nomeCurso} />
        <meta  property="og:image" content={image1} />
        <meta  name="twitter:card" content="summary_large_image" />
        <meta  name="twitter:site" content="@blendibox.br" />
        <meta  name="twitter:title" content={nomeCurso} />
        <meta  name="twitter:description" content={nomeCurso} />
        <meta  name="twitter:image" content={image2} />
        <meta name="keywords" content={palavrasChave}/>
        <meta
          name="description"
          content={description}
          key="desc"
        />
      </Head>
 

      <div className="grid grid-flow-col  ">
        <div className="" style={{marginTop:50}}>
          <amp-img
          alt="Titulo"
           className="largura-imagem"
              width={961}
              height={451}
              layout="responsive"
         src={image1}
         >
         </amp-img>
        </div>    
      </div>

       <div className="grid grid-flow-col ">

        <div className=""></div>  
        <div className="heading-title justify-self-center "  style={{marginTop:50}}>
               ÚLTIMO PASSO, para você garantir a sua Vaga para Assistir as Aulas
        </div>
        <div className=""></div>
      
      </div>

      <div className="grid grid-flow-col   ">
       
        <div className="justify" style={{marginTop:-35}}>
          <amp-img
          alt="Exemplo de Recheios"
          className="largura-imagem"
              width={878}
              height={1024}
              layout="responsive"
         src={image2}         >
         </amp-img>
        </div>
         
      </div>

       <div className="grid grid-flow-col ">
        <div className=""></div>  
        <div className=" justify-self-center "  style={{marginTop:5}}>
              <Link href={linkGrupoWhatsapp} >  
                  <a className="button" > Entrar no grupo Agora
                      <span  style={{fontSize:18}}><FontAwesomeIcon icon={faWhatsapp} className="fontIconSize" /></span>
                  </a>
              </Link>
        </div>
        <div className=""></div>     
      </div>
        <div className="grid grid-flow-col ">
        <div className=""></div>  
        <div className=" justify-self-center "  style={{marginTop:50}}>
        <p className=" justify-self-center ">Após entrar no grupo, aguarde o início das aulas gratuitas que se iniciam na próxima segunda feira às 09:00.</p>
        <p className=" justify-self-center "><span className="p-red">Não saia do grupo para não perder a sua vaga</span> Permaneça até o início das aulas, e se tiver dúvidas, chame a moderação no privado.</p>
             
        </div>

        
        <div className=""></div>     
      </div>
    
      <div className="grid grid-flow-col justify-self-center">
          
        <div className="video-container"  style={{marginTop:50}}>
          <Video  image={videoImage} 
          src={videoMp4} 
          preload="auto"  loop="loop" muted="muted" layout="responsive"  
          rotate-to-fullscreen="rotate-to-fullscreen" controls="controls" 
          />
        </div>       
       
      </div>

      <div className="grid grid-flow-col ">
        <div className=""></div>  
        <div className=" justify-self-center sm:colspan-3"  style={{marginTop:5}}>
              <Link href={linkGrupoWhatsapp} >  
                  <a className="button" > Entrar no grupo Agora
                      <span  style={{fontSize:18}}><FontAwesomeIcon icon={faWhatsapp} className="fontIconSize" /></span>
                  </a>
              </Link>
        </div>
        <div className=""></div>     
      </div>

      <div className="grid grid-flow-col ">
        <div className=""></div>  
        <div className=" justify-self-center "  style={{marginTop:50}}>
            <div className=" justify-self-center " >
             <h2  >SIM, ENTENDI E VOU FAZER PARTE DO GRUPO!
             </h2>

              <Countdown />
            </div>      
        </div>       
        <div className=""></div>     
      </div>

     <div className="grid grid-flow-col  ">
       
        <div className="" style={{marginTop:5}}>
          <amp-img
          alt="Exemplo de Recheios"
           className="largura-imagem image-container"
              width={1080}
              height={1350}
              layout="responsive"
         src={image3}
         >
         </amp-img>
        </div>    
      </div>

      <div className="grid grid-flow-col ">
        <div className=""></div>  
        <div className=" justify-self-center sm:colspan-3"  style={{marginTop:10, marginBottom:150}}>
              <Link href={linkGrupoWhatsapp} >  
                  <a className="button" > Entrar no grupo Agora
                      <span  style={{fontSize:18}}><FontAwesomeIcon icon={faWhatsapp} className="fontIconSize" /></span>
                  </a>
              </Link>
        </div>
        <div className=""></div>     
      </div>

      <Footer/>


     <style jsx global>{`

        .imageLogo{
           width:'30%';
           margin-bottom: 20px;
           text-align: center;
          vertical-align: middle;
        }

     

         .video-container {
            margin: 130px 130px 130px 130px;
            border-style: solid;
            border-width: 8px 8px 8px 8px;
            border-color: ${cor_video_conteiner};

          }


          .image-container {
            border-style: solid;
            border-width: 8px 8px 8px 8px;
            border-color: #de7281;

          }

        .fontIconSize{
            font-size: 18px;
            width:45px;
            margin-left:12px;
            margin-top:3px;
        }

        .p-red{
           color: #B01B1B;
        }

       .largura-imagem{
        margin-left:19%;
        margin-right:19%;
       }
        p{
          color: #763535;
          font-weight: bold;
          margin-top : 5px;
        }
        h2{
          color: #763535;
          font-weight: 900;
          text-transform: uppercase;
          padding: 0;
          margin: 0;
          line-height: 1;
          font-size: clamp(2.625rem, calc(2.625rem + ((1vw - 0.48rem) * 8.4135)), 3.25rem);

        }

        .heading-title {
            color: #763535;
            font-family: "Roboto", Sans-serif;
            font-size: 18px;
            font-weight: bold;
        }

        .heading-description {
            color: #763535;
            font-family: "Roboto", Sans-serif;
            font-size: 18px;

        }


        .button {
            display:flex;
            color: #fff;
            padding: 12px 24px;
            font-weight: bold;
            font-size: 40px;
            font-style: italic;
            text-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            background-color: #B01B1B;
            border-radius: 32px 0px 32px 32px;
        }

       

        .container{
           margin-top: 0px;
           max-width:100%;
           padding: 10px; 
           font-size: 15px;
           text-align: center;
        }
        #content{

          background-image: url( '${background}')
        }

         @media (max-width: 767px) {
         .button {
            font-size: 25px;
            padding: 16px 16px 16px 16px;
          }
          .fontIconSize {
            width: 30px;

          }
           .video-container {
            margin: 10px 10px 10px 10px;
            border-style: solid;
            border-width: 8px 8px 8px 8px;

          }
          .largura-imagem{
            margin-left:10%;
            margin-right:10%;
          }
        }

      `}
      </style>
  


    </main>


)   

  
}


export default revenda_item