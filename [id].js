import styles from '../../styles/Home.module.css'
import xml from  "raw-loader!../../data/LomadeeDownload.xml"
import Produto from '@/components/produto'
export const config = { amp: true };

var parser = require('xml2json-light');
var coupons = parser.xml2json(xml); 



export const getStaticProps = async ({params: {id} }) =>{




      <Produto
           nome  = 'Curso Bicos de Confeitar'
           logoS  ='/assets/index/bolo4-1-1.png.webp'
           logoW ='359'
           logoH ='352'
           bonus = 'Bônus inclusos'
           videoI = '/assets/index/video_bicos_confeitar.webp'
           videoS = '/assets/chef-isis-alvarez/curso_bicos_confeitar/curso_bicos_confeitar.mp4'
           description = 'Neste curso, você aprenderá do absoluto zero tudo sobre os Bicos de Confeitar! Voce vai conhecer bicos mais utilizados, alé de várias Técnicas para tornar cada um deles mais versátil, também aprenderá a produzir lindas flores para decorar bolos e cupcakes.
            . O Curso também  te ensina as coberturas para bicos mais usadas aqui no Brasil e no Exterior: Chantininho, Glossy Buttercream e Shiny Buttercream.'
           preco = '297,00'
           desconto ='97,90'
           parcelas = '10x De R$ 11,08'
           link_checkout=''
           link_pagina_vendas = ''

      />



      <Produto
           nome  = 'Brigadeiros Gourmet'
           logoS  ='/assets/index/brigadeiro_gourmet.webp'
           logoW ='327'
           logoH ='352'
           bonus = 'Bônus inclusos'
           videoI = '/assets/index/video_brigadeiros.webp'
           videoS = '/assets/chef-isis-alvarez/curso_brigadeiros_sem_segredos/curso_brigadeiros_sem_segredos.mp4'
           description = 'Aqui você vai aprender o passo a passo para produzir e vender os brigadeiros mais pedidos do momento! São mais de 60 Vídeo Aulas super didáticas, perfeitas para os iniciantes!

E para você dar um passo além na confeitaria, se inscrevendo agora terá Acesso a 6 Bônus Incríveis: Aula de Palha Italiana, Copo da Felicidade Com Brigadeiro, Bolo no Pote Com Brigadeiro, Coxinha de Morango, Certificado e muito mais…

Faça sua inscrição agora e entre em uma das áreas mais lucrativas da confeitaria!'
           preco = '697,00'
           desconto ='127,00'
           parcelas = '12x De R$ 12,37'
           link_checkout=''
           link_pagina_vendas = ''

      />



 // const CuponsList = await fetch(
 //  "http://sandbox-api.lomadee.com/v2/1666449730458ebdc157f/coupon/_all?sourceId=37683570"
  
 // )

  //const posts = await CuponsList.json()

  //const data = posts.coupons.filter(p =>p.id.toString() == id)

  const posts =  await coupons;


  const data = posts.coupons.coupon.filter(p =>  p.code.toString()  == id)


    
   return {
    props: {
      item:  data[0],
      erro:'Você não possui permissão para divulgar esse anunciante.'
    }
   }

  
}


var count = 0;


export const getStaticPaths = async()=>{

 /* const res = await fetch(
    "http://sandbox-api.lomadee.com/v2/1666449730458ebdc157f/coupon/_all?sourceId=37683570"

    )
  const posts = await res.json()

  const paths = posts.coupons.map((post) => ({
    params: {id: post.id.toString()},
  }))*/

  const posts = await coupons;

  const paths = posts.coupons.coupon.map((post) => ({
    params: {id: post.code.toString()},
  }))


  return { paths, fallback: false }


}



 function Cupons( props)  {



  return (

    <>

        <a   href={props.item.link ==props.erro? props.item.store.link: props.item.link  } > 
           <amp-img className="image"
            alt={props.item.store.title}
            width="180"
            height="130"
            placeholder="blur"
            src={props.item.store.image1}
          >         
          </amp-img>
        </a>
        <br/>
        <small>{props.item.store.name}  - {props.item.category.name}</small><br/><br/>

        <h1>{props.item.title} *</h1><br/>

        <h2 className="cupom">CUPOM: <a   href={props.item.link ==props.erro? props.item.store.link: props.item.link}> <b> {props.item.code} </b> </a></h2>
        <small>Categoria: {props.item.category.name}</small>
        <br/><br/>

        <a className="button" href={props.item.link ==props.erro? props.item.store.link: props.item.link}> Ir para o site {props.item.store.name} <amp-img  className="search" src="../../arrow-right.png"  placeholder="blur"
        
            width="20" height="20"></amp-img>
        </a>
        <br/><br/>
             
        <small>* Este cupom de desconto é válido no site    <a   href={props.item.link ==props.erro? props.item.store.link: props.item.link } >  {props.item.store.name} </a>, até o dia <b> {props.item.vigency.endDate.split(' ')[0]} </b> ou enquanto durarem os estoques, podendo ser invalidado antes do prazo.</small>
         

     </>
         
    
    

  );
}




export default Cupons