import styles from '../../styles/Home.module.css'
import xml from  "raw-loader!../../data/LomadeeDownload.xml"
import Produto from '@/components/produto'
export const config = { amp: true };

var parser = require('xml2json-light');
var coupons = parser.xml2json(xml); 



export const getStaticProps = async ({params: {id} }) =>{



     <Produto
           nome  = 'Escola de Bolos Caseiros'
           logoS  ='/assets/index/escola_bolos_caseiros.webp'
           logoW ='961'
           logoH ='451'
           bonus = 'Bônus inclusos'
           videoI = '/assets/index/video_bolo_caseiro.webp'
           videoS = '/assets/chef-isis-alvarez/escola_bolos_caseiros/escola_de_bolos_caseiros.mp4'
           description = 'Um Curso Completo com mais de trinta Aulas com muitas variedades em receitas simples e práticas para você já começar a vender na mesma semana, acompanha aulas extras em vídeos ensinando o passo a passo dos Bolos Caseiros que são campeões de vendas no mercado.

Aqui você aprenderá as massas, coberturas e alguns segredinhos para criar seu menu exclusivo e vender durante o ano todo!'
           preco = '697,00'
           desconto ='127,90'
           parcelas = '12x De R$ 12,37'
           link_checkout='#'
           link_pagina_vendas = '#'

      />


         <Produto
           nome  = 'Apostila Bolo No Pote'
           logoS  ='/assets/index/recorte-pote-ovomaltinemorango1-1.png.webp'
           logoW ='800'
           logoH ='669'
           bonus = 'Bônus inclusos'
           videoI = '/assets/index/video_bolo_pote.webp'
           videoS = '/assets/chef-isis-alvarez/bolo_no_pote/bolo_no_pote.mp4'
           description = 'Um Pacote de Apostilas com as melhores receitas e combinações praticas para você já começar a sair vendendo na mesma semana, além de 35 aulas extras em vídeos ensinando o passo a passo da produção e montagem dos potes.

Aqui você aprenderá as massas, recheios e alguns segredinhos para criar seu menu exclusivo e vender durante o ano todo!'
           preco = '397,00'
           desconto ='67,00'
           parcelas = '8x De R$ 9,34'
           link_checkout='#'
           link_pagina_vendas = '#'

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