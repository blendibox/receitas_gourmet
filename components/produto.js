import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Video from './video'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faGift } from '@fortawesome/free-solid-svg-icons/faGift';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile'

class Produto extends React.Component {


render() {


  return (


     <div className="grid grid-flow-col  flex gap-y-15 gap-x-5 ">      
       <div>

        <div className=" grid grid-flow-col items-center topo-card">
          <div> {this.props.nome}
          </div>
          <div className="">
            <amp-img
              alt="Recheios a alma da Confeitaria 3.0"
              className=" "
              width={this.props.logoW}
              height={this.props.logoH}
              layout="responsive"
              src={this.props.logoS}         >
            </amp-img>
          </div>
        </div>  
        <div className="grid grid-flow-col items-center corpo-card">
        <div>
             <span ><FontAwesomeIcon icon={faFile} className="fontIconCard" /></span>
          </div>
          <div className="items-center my-8 "> Com Certificado
          </div>
          <div>
             <span ><FontAwesomeIcon icon={faGift} className="fontIconCard" /></span>
          </div>
           <div>{this.props.bonus}
          </div>
        </div>  
        <div className="grid grid-flow-col corpo-card flex items-center">         
          <div className="video-container"  style={{marginTop:0}}>
           <Video className="video-border" image={this.props.videoI} 
             src={this.props.videoS} 
             preload="auto"  loop="loop" muted="muted" layout="responsive"  
             rotate-to-fullscreen="rotate-to-fullscreen" controls="controls"  
           />
          </div>  
          
        </div>  

        <div className="grid grid-flow-col corpo-card flex items-center"> 
          <div className="flex px-3">
            <small >{this.props.description}</small>
            
          </div>
        </div> 

        <div className="grid grid-flow-col corpo-card flex items-center pt-8"> 
          <div style={{textDecoration:'line-through'}}>
            De R$ {this.props.preco} 
          </div>
        </div>
        <div className="grid grid-flow-col corpo-card flex items-center"> 
          <div >
            <h4><b><i> <span className="span">R$ {this.props.desconto} </span>á Vista </i></b></h4>
          </div>
        </div>
         <div className="grid grid-flow-col corpo-card flex items-center"> 
          <div>
            <small>Ou {this.props.parcelas}*  no cartão </small></div>
        </div> 
         <div className="grid grid-flow-col corpo-card flex items-center"> 
          <div>
          <Link href={this.props.link_checkout}>
            <a className=" pulse-button flex justify-center transition" id="botaum"style={{ marginTop:10}}>
                <span  className=""><span> Compre Aqui  </span></span>
            </a>
            </Link>
          </div>
        </div> 
         <div className=" grid grid-flow-col items-center corpo-card  pb-8">
          <div className="">
            <amp-img
              alt="Formas de Pagamento"
              className=""
              width={1024}
              height={87}
              layout="responsive"
              src="/assets/index/PAGAMENTO-2-1024x87-1.webp"   >
            </amp-img>
          </div>
        </div>  

         <div className="grid grid-flow-col corpo-card flex items-center  bottom-card  pb-8"> 
          <div>
          <Link href={this.props.link_pagina_vendas}>
            <a className="flex justify-center transition" id="botaum"style={{ marginTop:10}}>
                <span  className="link-mais"><span> Quero Saber Mais...  </span></span>
            </a>
            </Link>
          </div>
        </div> 
        
        </div>

            
      
     </div>
 




       
  	)

  }

 }

export default Produto;