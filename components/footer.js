import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head';

//import categories from '../data/categories.json';

const Footer = () => {

  const more = 1;
  return (
    <>
 
       <style jsx global>{`

          .fontWhats{
            font-size: 18px;
            width:30px;
            margin-left:46%;
            margin-top:3px;
        }

        `
         }
      </style>
  
    <footer >
      <span className="footer">     

          <p>* As ofertas são válidas por tempo limitado. Caso o valor no Carrinho seja divergente do valor da oferta, valerá sempre o valor final no
          seu Carrinho de Compras. </p>
          <p> Ao clicar em Comprar, você será redirecionado para a Plataforma Segura da Hotmart, a qual
          fará todo o Processamento de seu Pagamento e a Liberação de seu Login e Senha para Acessar as Aulas e Apostilas adquiridas por você, de acordo com o Curso Escolhido. </p>

        <p>Sua Privacidade é nossa Prioridade! Seus Dados estarão sempre Seguros. Para mais detalhes leia a nossa</p>
          <a className="brand" aria-label='Política de Privacidade'   href="https://www.blendibox.com.br/pagina/politicas-de-privacidade.html">
              <p> Politica de Privacidade</p>
          </a> 
        <p> Se você tiver alguma dúvida, clique no Link de Whatsapp para falar conosco em Horário Comercial: de Segunda a Sextas das 09h00 ás 18h00. Respondemos todas as mensagens por ordem de chegada.</p>

          <a className="brand" aria-label="Blendibox"  href='https://www.blendibox.com.br' >
             <p>Divulgação Autorizada: Blendibox® - CNPJ: 17.084.837/0001-69 © - 2023 - Todos os direitos reservados.</p>
          </a>   
              
         <div className="grid grid-flow-col ">
           <div className=""></div>
           <div className=""></div>
           <div className="">
              <p>
                <a className="brand" aria-label="Whatsapp da Blendibox"  href="https://wa.me/5519971489380?text=Olá, quero tirar uma dúvida sobre o Curso de Receitas Gourmet pode me ajudar?"> 
                 <FontAwesomeIcon icon={faWhatsapp} className="fontWhats" />
                </a>
              </p> 
            </div> 
          <div className=""> 
            <p>
              <a className="brand" aria-label="Pinterest da Blendibox" href="https://wa.me/5519971489380?text=Olá, quero tirar uma dúvida sobre um dos Cursos de Confeitaria Gourmet."> 
                <FontAwesomeIcon icon={faPinterest} className="fontWhats" />
              </a>  
            </p> 
          </div> 
          <div className=""></div>
          <div className=""></div>
        </div>
      

             
          
      </span>

     

    </footer>
    </>
  );
};

export default Footer;