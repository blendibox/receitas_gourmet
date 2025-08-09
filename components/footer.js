'use client';

import Link from 'next/link';
import Image from  'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const ano = new Date().getFullYear();

  const navegarComScroll = (href) => {
    router.push(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // pequena espera para a navegação acontecer
  };

  return (
    <footer className=" min-h-[120px] bg-black text-white ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
	  
	   <div className="justify-center max-w-6xl mx-auto mt-5">
		   <Link href="https://go.hotmart.com/T101220571S">
		  
		  	<Image className="flex justify-center relative rounded"
				src='../../images/compra-segura-hotmart-w1000-768x230.png.webp'
				alt=" Isis Alvares - Chef Confeiteira"
				 width={400}
				height={100}
		/>	
       </Link>	


            </div>	
    

		<div>
          <h3 className="text-sm font-semibold mb-2 uppercase text-gray-100">Cursos</h3>
          <ul className="space-y-1 text-sm">
           <li><Link name='Todo os Cursos' href="https://cursoconfeitaria.blendibox.com.br/" className="hover:underline text-gray-100">Todo os Cursos</Link></li>
		  <li><Link name='Cursos da Chef Isis Alvarez' href="https://cursoconfeitaria.blendibox.com.br/chefisisalvarez" className="hover:underline text-gray-100">Cursos da Chef Isis Alvarez</Link></li>
		  <li><Link name='Cursos da Chef Marrara Bortoloti' href="https://cursoconfeitaria.blendibox.com.br/chefmarrarabortoloti" className="hover:underline text-gray-100">Cursos da Chef Marrara Bortoloti</Link></li>
		
		  </ul>
        </div>

       

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-100">
        © {ano} <Link href="https://www.blendibox.com.br">Blendibox. Todos os direitos reservados.</Link>
      </div>
    </footer>
  );
}