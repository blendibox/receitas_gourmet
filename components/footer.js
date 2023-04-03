import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import categories from '../data/categories.json';

const Footer = () => {

  const more = 1;
  return (
    <footer >
      <span className="footer">     

          <a className="brand"   href="https://www.blendibox.com.br/pagina/politicas-de-privacidade.html">
              <p>Politica de Privacidade</p>
          </a> 

          <a className="brand"  href='https://www.blendibox.com.br' >
             <p>Blendibox® - CNPJ: 17.084.837/0001-69 © Todos os direitos reservados. 2023</p>
          </a>   
              
         <div className="grid grid-flow-col ">
            <div className=""></div>
           <div className=""></div>
           <div className=""><a className="brand"  href="https://wa.me/5519971489380?text=Olá, quero tirar uma dúvida sobre o Curso de Receitas Gourmet pode me ajudar?"> 
              <FontAwesomeIcon icon={faWhatsapp} className="fontWhats" />
          </a> </div> 
          <div className=""> <a className="brand"  href="https://wa.me/5519971489380?text=Olá, quero tirar uma dúvida sobre o Curso de Receitas Gourmet pode me ajudar?"> 
              <FontAwesomeIcon icon={faPinterest} className="fontWhats" />
             </a>   
          </div> 
           <div className=""></div>
            <div className=""></div>
        </div>
      

             
          
      </span>

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

    </footer>
  );
};

export default Footer;