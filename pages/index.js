import Produto from '@/components/produto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faGift } from '@fortawesome/free-solid-svg-icons/faGift';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight'

import Head from 'next/head';
import Video from '@/components/video'
import Footer from '@/components/footer'
import Link from 'next/link'
import Countdown from "@/components/Countdown";


export const config = { amp: true };


const background = '/assets/index/background_index.png';
const background2 = '/assets/index/background_2.webp';
const image1 = '/assets/index/video_pascoa_isis.png';
const nomeCurso = ' Cursos da Chef Isis Alvarez - Recheios, bolos, ovos de páscoa';
const brand ="Blendibox [Representante Autorizado]";
const description = 'Cursos Online de Confeitaria Gourmet, escolha o seu Curso favorito e começe hoje mesmo a ser uma Confeiteira de Sucesso';

const depoimento1 = '/assets/index/depoimento_1.webp';
const depoimento2 = '/assets/index/depoimento_2.webp';
const depoimento3 = '/assets/index/depoimento_3.webp';
const depoimento4 = '/assets/index/depoimento_4.webp';
const logo_chef = '/assets/index/logo_chef_isis_alvarez.webp';
const selo_garantia = '/assets/index/SELO-.png.webp';

const palavrasChave = 'recheios a alma da confeitaria,'+
'ovo de colher ideias,'+
'ovos de pascoa tradicional,'+
'ovo de colher ninho com nutella,'+
'ovo de colher ferrero rocher,'+
'ovo de pascoa,'+
'ovos de colher,'+
'mini ovos,'+
'ovo de pascoa tradicional,'+
'ovo de colher ferrero rocher,'+
'mini ovo de colher,'+
'fotos de ovos de pascoa de colher,'+
'ovo de colher ninho com nutella,'+
'ovo de colher ideias,'+
'ovo de pascoa criativo,'+
'mini ovo de colher,'+
'fotos de ovos de pascoa de colher,'+
'foto ovo de pascoa,'+
'lembrancinhas de pascoa criativa,'+
'tag feliz pascoa para imprimir,'+
'fundo pascoa,'+
'frases de pascoa,'+
'imagens de pascoa,'+
'ideias para vender na pascoa,'+
'ideias de ovo de pascoa infantil,'+
'caça aos ovos de pascoa,'+
'fotos de ovos de pascoa de colher,'+
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
       faWhatsapp:faWhatsapp
    }
   }
}




 function Index({faWhatsapp}) {

  return(


    
    <main id="content" role="main"  className='container mx-auto font-sans' >

 
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
                      "url": "https://cursoconfeitaria.blendibox.com.br/favicon.ico",
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
        <meta  name="description" content={description} />
        <meta  property="og:site_name" content={nomeCurso} />
        <meta  property="og:description" content={description} />
        <meta  property="og:title" content={nomeCurso} />
        <meta  property="og:image" content={image1} />
        <meta  name="twitter:card" content="summary_large_image" />
        <meta  name="twitter:site" content="@blendibox.br" />
        <meta  name="twitter:title" content={nomeCurso} />
        <meta  name="twitter:description" content={description} />
        <meta  name="twitter:image" content={image1} />


        <meta name="keywords" content={palavrasChave}/>
        <meta
          name="description"
          content={description}
          key="desc"
        />
      </Head>



      <div className="grid grid-flow-col width-space">

        <div className=""></div>  
        <div className="heading-title justify-self-center "  style={{marginTop:50}}>
          <h1>Tenha Acesso Aos <span className="span">Melhores Cursos De Confeitaria</span></h1>
          <h3>Aprenda sem precisar <span className="span">sair de casa</span>, sem gastar com deslocamento.</h3>
          <h3> Aulas detalhadas, que você poderá <span className="span">ver e rever sempre que quiser!</span></h3>
          <h3 style={{textDecoration: 'underline'}}>Cursos para iniciantes e profissionais que querem aprimorar seus conhecimentos</h3>
        </div>
        <div className=""></div>
      
      </div>


      <div className="grid grid-flow-col ">
        <div className=""></div>  
        <div className=" justify-self-center  my-8 "  >
            <div className=" justify-self-center  " >
             <h2  > ESCOLHA <span className="span">SEU CURSO </span>
             </h2>
            </div>      
        </div>       
        <div className=""></div>     
      </div>


   <div className=" grid grid-cols-1 mb-8   gap-x-6 gap-y-4 ">
       
    
     <Produto
           nome  = 'Ovos de Páscoa 2023'
           logo_none = 'hidden'
           logoS  ='/assets/index/logo_pascoa_2.png'
           logoW ='961'
           logoH ='451'
           bonus = 'Bônus inclusos'
           videoI = '/assets/index/video_pascoa_isis.png'
           videoS = '/assets/chef-isis-alvarez/curso_pascoa/video_venda_pascoa_2023.mp4'
           description = 'Você fica encantada quando está no instagram e ve passar aquelas fotos de ovos de páscoa lindos? E fica imaginando o quão complexo é chegar a esse nível de perfeição?
           você vai aprender Técnicas de temperagem em passo a passo em vídeo aula, + De 20 modelos de Ovos Incríveis e a tão pedida Colomba Pascal'
           preco = '697,00'
           desconto ='127,00'
           parcelas = '12x De R$ 12,37'
          link_checkout='https://go.hotmart.com/I81320933I?ap=8ede'
           link_pagina_vendas = 'https://go.hotmart.com/I81320933I'

      />

    </div>
    <div className=" grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2   gap-x-6 gap-y-4 ">


      <Produto
           nome  = 'Curso de Recheios 3.0'
           logoS  ='/assets/index/Curso-recheios-titulo.png.webp'
           logoW ='961'
           logoH ='451'
           bonus = 'Bônus incluso'
           videoI = '/assets/index/video_recheio.jpg.webp'
           videoS = '/assets/index/vendas_recheios.mp4'
           description = 'Um Maravilhoso Kit de Apostilas, somando mais de 50 recheios! além de muitos Bônus e Vídeo Aulas! Você será diferente de todas as Confeiteiras de sua cidade, graças a um mix incrível de receitas maravilhosas e mais pedidas pelos Clientes. Testadas e Aprovadas pela Chef Isis Alvarez.'
           preco = '197,00'
           desconto ='67,90'
           parcelas = '8x De R$ 9,34'
           link_checkout='https://go.hotmart.com/G81320784V?ap=7e08'
           link_pagina_vendas = 'https://go.hotmart.com/G81320784V'


      />

     <Produto
           nome  = 'Curso Copos e Taças'
           logoS  ='/assets/index/copos_tacas.webp'
           logoW ='1024'
           logoH ='415'
           bonus = 'Bônus Incluso'
           videoI = '/assets/index/video_copos-tacas.webp'
           videoS = '/assets/chef-isis-alvarez/curso_copos_tacas/curso_copos_tacas.mp4'
           description = 'A sensação do momento são os Copos e Taças da Felicidade! Com recheios lindos e deliciosos na medida certa em doçura, para não enjoar, mas sim pedir muuuuuuuito mais!

Aqui você aprenderá as bases, as montagens e alguns segredinhos para criar seu menu Exclusivo e Vender durante o ano todo! Excelente para Festas.'
           preco = '297,00'
           desconto ='97,00'
           parcelas = '10x De R$ 11,08'
           link_checkout='https://go.hotmart.com/Y81320940Q?ap=7be6'
           link_pagina_vendas = 'https://go.hotmart.com/Y81320940Q'

      />


   
      <Produto
           nome  = 'Bolos De Festas + Ganaches'
           logoS  ='/assets/index/bolo_festas.webp'
           logoW ='716'
           logoH ='427'
           bonus = 'Bônus inclusos'
           videoI = '/assets/index/video_bolo_ganache.webp'
           videoS = '/assets/chef-isis-alvarez/bolo_andar_ganache/chamada_semana_gratuita_bolos_de_festa.mp4'
           description = 'O Curso mais Desejado por ser o mais completo em Bolos de Festa, e agora com a sua versão “Especial em Chocolate”. Entenda todos os conceitos para se tornar uma Confeiteira de respeito produzindo Bolos Altamente Lucrativos. Aprenda de fato a fazer lindas decorações em Ganaches!'
           preco = '697,00'
           desconto ='297,90'
           parcelas = '12x De R$ 29,70'
           link_checkout='https://go.hotmart.com/U81320832O?ap=8529'
           link_pagina_vendas = 'https://go.hotmart.com/U81320832O'

           

      />


         <Produto
           nome  = 'Curso Geladinhos Gourmet'
           logoS  ='/assets/index/DSC_6651-PhotoRoom-1-1024x683.png.webp'
           logoW ='768'
           logoH ='432'
           bonus = 'Bônus incluso'
           videoI = '/assets/index/video_geladinho_gourmet.webp'
           videoS = '/assets/chef-isis-alvarez/geladinhos_gourmet/geladinhos_gourmet.mp4'
           description = 'Entrego nesse curso receitas secretas que nenhuma confeiteira teve coragem de revelar!

Apostila principal com 80 Receitas de Geladinhos Gourmet incluindo receitas alcoólicas, sem lactose, fit e diet.

Vários Bônus especiais em Apostilas em PDF que você pode imprimir sempre que precisar. Além de tudo você ainda terá acesso as nossas AULAS EXTRAS EM VÍDEO com receitas NUNCA ENSINADAS ANTERIORMENTE!'
           preco = '397,00'
           desconto ='77,00'
           parcelas = '9x De R$ 9,66'
           link_checkout='https://go.hotmart.com/H81320987X?ap=6c25'
           link_pagina_vendas = 'https://go.hotmart.com/H81320987X'

      />

         

    </div>

    

    
    <div className="container section-depoimento  my-8 ">

      <div  className="grid grid-flow-col ">
        <h2  style={{color:'#000000'}} className=" my-8">O que os Alunos <span className="span">Dizem?</span></h2>
      </div>
         
      <div className="grid grid-flow-row flex grid-cols-2  ">
  
        <div className="mx-8 grid-flow-col " >
          <amp-img
          alt="Depoimento de Clientes"
           className="shadow-image"
              width={638}
              height={374}
              layout="responsive"
         src={depoimento1}
         >
         </amp-img>
        </div> 
        <div className="mx-8 grid-flow-col " >
          <amp-img
          alt="Exemplo de Recheios"
           className="shadow-image"
              width={638}
              height={374}
              layout="responsive"
         src={depoimento2}
         >
         </amp-img>
        </div>    
     

      </div>

      <div className="grid grid-cols-2   my-8">
  
        <div className="mx-8  my-8" >
          <amp-img
          alt="Exemplo de Recheios"
           className=""
              width={638}
              height={374}
              layout="responsive"
         src={depoimento3}
         >
         </amp-img>
        </div> 
        <div className="mx-8  my-8" >
          <amp-img
          alt="Exemplo de Recheios"
           className=""
              width={638}
              height={374}
              layout="responsive"
         src={depoimento4}
         >
         </amp-img>
        </div>    
      </div>

  
    </div>

    <div className="background2">


      <div className="grid grid-flex-cols width-space  grid-cols-1 " >
       
        <div className="mx-8  " >
          <amp-img
          alt="Chef Isis Alvarez"
           className=""
              width={1024}
              height={204}
              layout="responsive"
         src={logo_chef}
         >
         </amp-img>
        </div>

      </div>

      <div className="grid grid-flex-cols width-space sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 py-8">
          <div className="my-8">
              <p>A professora Ísis Alvarez é Chef Confeiteira Apaixonada pela Culinária desde a sua Infância. Formada em Gastronomia em 2003 e dedicada ao mundo da confeitaria desde então, trabalhou em grandes casas em São Paulo como a Confeitaria Fasano, Restaurante D.O.M e Confeitaria Le Vin. Em Campinas, chefiou a confeitaria do Restaurante Belline, do Hotel Vitória.</p>

<p>Fora do país, aprimorou seus conhecimentos na Lenôtre, uma das principais escolas de Gastronomia de Paris, Especializou-se também em Barcelona (Espanha) e Florença (Itália).
</p>
<p>Trabalha diretamente com Confeitaria para Eventos, fornecendo Bolos e um extenso Cardápio de Doces Finos. Fundadora da Sucre en Rouge.</p>
<p> Devido a vários pedidos de pessoas Interessadas nas Receitas que utiliza em seu vasto Cardápio, começou a formar Turmas com diversos Cursos Presenciais de Confeitaria. Não demorou muito para levar seus cursos a vários Estados Brasileiros e também receber grandes profissionais em seu Ateliê.
</p>
<p>Começou a oferecer aulas ONLINE, gravando Cursos Completos, para que todos que desejam aprender ou aprimorar seus conhecimentos consigam assistir as aulas, sem a necessidade de deslocamento.</p>
<p> Hoje, a família de alunos Online conta com mais de 3 mil pessoas do mundo todo e, neste coração de mãe, também tem Espaço para Você! Venha fazer parte dessa Grande família de Profissionais Confeiteiros de Sucesso!
</p>
          </div>
          <div>
          </div>
      </div>

    </div>

    <div className="container section-depoimento  ">

      <div  className="grid grid-flow-col ">
        <h2  style={{color:'#000000'}} className=" my-8"> <span className="span">Perguntas</span> Frequentes</h2>
      </div>
      <div  className="grid grid-flow-col ">
      </div>

      <div className="my-10">


        <div>
          <div>
            <div>
              <a href="#" className="toggle-title">Qual o formato dos cursos?</a>
            </div>
            <div className="tab-content ">
              <p>Você terá acesso a diversas vídeo aulas (passo a passo) + apostila complementar com as informações sobre as vídeo aulas 
e receitas complementares. Você recebe assim que confirma o pagamento.</p>
            </div>
          </div>
          <div>
            <div>
              <a href="#" className="toggle-title">Quais as formas de pagamento?</a>
            </div>
            <div className="tab-content ">
              <p>Você tem as opções de pagamento via cartões de crédito, boleto ou PIX.</p>
            </div>
          </div>
          <div >
            <div className="tab-title" >
              <a href="#" className="toggle-title">Como vou receber o curso?</a>
            </div>
            <div className="tab-content " >
              <p>Assim que seu pedido for aprovado, o link de acesso ao curso será enviado ao seu e-mail, onde você terá acesso à sua área restrita com login e senha pessoal.</p>
            </div>
          </div>
          <div >
            <div className="tab-title " >
              <a href="#" className="toggle-title">E se eu tiver dúvidas no decorrer do curso?</a>
            </div>
            <div className="tab-content ">
              <p>Assim que adquirir o curso, você terá acesso direto ao WhatsApp da professora, onde poderá tirar todas as dúvidas.</p>
            </div>
          </div>
        </div>
      </div>   
    </div>


    <div className="section-depoimento grid grid-flow-col sm:grid-cols-1 grid-cols-2 flex items-center ">
      <div className="grid grid-flow-col mx-10 px-10 my-10 py-10">
        <amp-img 
          alt="Exemplo de Recheios"
           className=""
              width={300}
              height={300}
              layout="responsive"
         src={selo_garantia}>
         </amp-img>
      </div>
      <div className="grid grid-flow-col  colspan-2 mx-8 my-8 justify-self-center ">
          <p style={{color:'#222222'}}>
            <span className="span grid grid-flow-row">AVISO LEGAL </span>

          Estes produtos não garantem a obtenção de resultados.
                  <br/>
           Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
           </p>
      </div>
    </div>

   <div className="mt-8">

    <Footer/>
  </div>



    <style jsx global>{`

        .toggle-title{
          color:#000000;
          font-size:1.5em;
          font-weight:bold;
          line-height: 2.3em;
        }
        .tab-content >p{
          color:#333333;
          font-size:1.1em; 
        }

        .imageLogo{
           width:'30%';
           margin-bottom: 20px;
           text-align: center;
          vertical-align: middle;
        }

        .width-space{
          margin-left: 10%;
          margin-right: 10%;

        }

        .shadow-image{        
           box-shadow: 0px 0px 10px 0px rgba(255, 0, 115.00000000000004, 0.6509803921568628);       
        }

        .section-depoimento{        
          background-color: #eeeeee;
        }

        #botaum {
          -webkit-animation: pulse 1.5s infinite;
        }

        .pulse-button:hover {
          -webkit-animation: none;
        }

        .pulse-button{
          display:flex;
          font-size: 1em;
          line-height:1.5em;
          color:#ffffff;
          padding: 12px 24px;
          font-weight: bold;
          margin-left:10%;
          margin-right:10%;
          letter-spacing: 1.5px;
          background-color: #FF0073;
          border-radius: 100px 100px 100px 100px;
          box-shadow: 0px 0px 15px 0px #FF0073;
        }

        .pulse-button:hover{
          font-size: 1.2em;
        }

        .link-mais:hover{
          display:flex;
          color:#ffffff;
          background-color: #FF0073;
          font-size: 1em;
          padding:  0 15px  0 15px
          font-weight: bold;
          border-radius: 10px 10px 10px 10px;
          box-shadow: 0px 0px 5px 0px #FF0073;
        }



        .topo-card{
          border-radius: 10px 10px 0px 0px;
          background-color: #ff0073;
          color: #ffffff;
          font-weight:bold;
          font-size: 1.5em;
          line-height: 1.8em;
        }

        .corpo-card{
          background-color:#f3ebf3;
          color: #222222;
          font-size:1.4em;

        }

        .bottom-card{
          border-radius: 0 0 15px 15px ;
          box-shadow: 0px 5px  0 0 rgba(255, 0, 115.00000000000004, 0.6509803921568628);
        } 

         .video-container {
            margin: 15px 15px 15px 15px;           

          }

          .video-border {        
            border-radius: 15px 10px 10px 10px;

          }

        .fontIconSize{
            font-size: 18px;
            width:45px;
            margin-left:12px;
            margin-top:3px;
        }

        .fontIconCard{
            width:20px;
            margin-left:12px;
            margin-top:3px;
        }

        .p-red{
           color: #B01B1B;
        }

       .largura-imagem{
        margin-left:19%;
        margin-right:19%;
        margin-top:19%;
       }
        p{
          color: #ffffff;
          font-weight: bold;
          margin-top : 5px;
        }

        h1{
          font-size:32px;   
        }
        h1,h3{
            text-align: center;
            color: #FFFFFF;
            font-family: "Poppins", Sans-serif;
            font-size: 27px;
            font-weight: 500;
            line-height: 1.3em;
        }

        .span{
          color:#ff0073;
        }
        h2{
          color: #ffffff;
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
          background-color: #090120;
          background-image: url( '${background}');
          background-position: top left;
          background-size: contain;
        }
        .background2{
            background-image: url( '${background2}');
            background-repeat: no-repeat;
            background-size: 120% auto;
            opacity: 1;
            transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
        }

         @media (max-width: 767px) {
         .button {
            font-size: 25px;
            padding: 16px 16px 16px 16px;
          }
          .fontIconSize {
            width: 30px;

          }

          .largura-imagem{
            margin-left:10%;
            margin-right:10%;
          }
          .width-space{
             margin-left:5%;
             margin-right 5%;
           }

        }

      `}
      </style>
  
    


    </main>


)   

  
}


export default Index