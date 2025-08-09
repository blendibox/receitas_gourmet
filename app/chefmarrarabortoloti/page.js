"use cient"
import Image from "next/image";
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export async function generateMetadata() {

  return {
    title: 'Cursos de Confeitaria, bolos, doces e tortas',
    description:'Os melhores cursos de confeitaria você encontra aqui: Cursos e apostilas de Chefs renomadas como Marrara Bortoloti e Isis Alvarez ',
  };
}

export default function Home() {
  return (
<>
	<div className="min-h-screen flex flex-col bg-black">
	  
		<Image
		className="flex justify-center min-w-screen"
							   src='../../images/chef_marrara_bortoloti/backgroun-desk-ok-min.webp'
							   alt="Guias, agendas e materiais didáticos"
							   priority 
							   width={500}
							   height={500}

		/>
		<div className=" text-lg  absolute ml-10 mt-45">
		   <h1 className=" text-red-500 font-mono  text-3xl"><b>CHEF MARRARA BORTOLOTTI</b>   </h1>
		   <p className="text-white font-mono  text-3xl mt-2"  ><b> SEJA BEM-VINDA <br/> A MINHA LOJA</b></p>
<p className=" text-white  text-1xl mb-2 mt-2" >Mais de 50 Mil Alunas Satisfeitas</p>
		   <p className=" text-white  text-sm" >Aqui você tem acesso a todo material <br/>(Cursos, Apostilas) da Chef Marrara Bortoloti.</p>
		<Link
		   href="#cursos" 
		   className="flex relative bg-white rounded p-5 mt-10 max-w-40 text-sm transition delay-100 duration-300 ease-in-out"
		> 
		<svg aria-hidden="true" className="max-w-3 mr-3 " viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
		VER CURSOS
		</Link>
		</div>
	</div>


<div>



    {/* Seção cursos */}
    <div id="cursos" className="relative bg-black text-white py-16">
		  <h2 className=" text-white-500 font-mono ml-10 text-3xl"><b>CURSOS</b>
  <br/>
		  <small className="text-sm">(toque no curso desejado)</small>   </h2>
	   <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-8 px-4">
	   
        {/* Card curso*/}
		 <Link href="https://go.hotmart.com/R101060256U">
		 
			<div className="bg-purple-400 rounded-lg   shadow-xl shadow-purple-500/50 min-h-100 max-h-130">
			
			  <div className="">
			  <div className="mb-5  rounded bg-white max-w-70 shadow-xl shadow-purple-800/50">
			   <p className="font-mono  text-purple-700 p-3 justify-center text-2xl    "> Bolos de Vitrine</p>
		  
			 </div>
				<Image className="flex justify-center relative rounded"
					src='../../images/chef_marrara_bortoloti/apostila-com-mola-bolos-de-vitrine.png'
					alt="Curso Chef Marrara Bortoloti - Ebook Bolos de Vitrine + Sobremesas que Vendem!"
					 width={400}
					height={100}
			/>	
				
			  </div>
			  
			</div>
        </Link>	
		
		
		       {/* Card curso*/}
		 <Link href="https://go.hotmart.com/T101060258F">
		 
			<div className="bg-pink-400 rounded-lg   shadow-xl shadow-pink-500/50 min-h-100 max-h-130">
			
			  <div className="">
			  <div className="mb-5  rounded bg-white max-w-70 shadow-xl shadow-pink-800/50">
			   <p className="font-mono  text-pink-700 p-3 justify-center text-2xl    "> Bolos Vulcão</p>
		  
			 </div>
				<Image className="flex justify-center relative rounded"
					src='../../images/chef_marrara_bortoloti/6275883-e1721325774443.png'
					alt="Curso Chef Marrara Bortoloti - Bolos Vulcão e Piscina com Marrara Bortoloti"
					 width={400}
					height={100}
			/>	
				
			  </div>
			  
			</div>
        </Link>	
		
		       {/* Card curso*/}
		 <Link href="https://go.hotmart.com/Q101060257D">
		 
			<div className="bg-red-400 rounded-lg   shadow-xl shadow-red-500/50 min-h-100 max-h-130">
			
			  <div className="">
			  <div className="mb-5  rounded bg-white max-w-70 shadow-xl shadow-red-800/50">
			   <p className="font-mono  text-red-700 p-3 justify-center text-1xl bold  "> Festival de Brigadeiros</p>
		  
			 </div>
				<Image className="flex justify-center relative rounded"
					src='../../images/chef_marrara_bortoloti/apostila-de-brigadeiros-747x1024.png'
					alt="Curso Chef Marrara Bortoloti - Bolos Vulcão e Piscina com Marrara Bortoloti"
					 width={400}
					height={100}
			/>	
				
			  </div>
			  
			</div>
        </Link>	
		
		
		
				       {/* Card curso*/}
		 <Link href="https://go.hotmart.com/T101060258F">
		 
			<div className="bg-pink-400 rounded-lg   shadow-xl shadow-pink-500/50 min-h-100 max-h-130">
			
			  <div className="">
			  <div className="mb-5  rounded bg-white max-w-70 shadow-xl shadow-pink-800/50">
			   <p className="font-mono  text-pink-700 p-3 justify-center text-2xl    "> Massas Perfeitas </p>
		  
			 </div>
				<Image className="flex justify-center relative rounded"
					src='../../images/chef_marrara_bortoloti/5179040-e1721317244556-777x1024.png'
					alt="Curso Chef Marrara Bortoloti - Massas perfeitas com Marrara Bortoloti"
					 width={400}
					height={100}
			/>	
				
			  </div>
			  
			</div>
        </Link>	
		
		
		
						       {/* Card curso*/}
		 <Link href="https://go.hotmart.com/V101060254T">
		 
			<div className="bg-pink-400 rounded-lg   shadow-xl shadow-pink-500/50 min-h-130 max-h-130">
			
			  <div className="">
			  <div className="mb-5  rounded bg-white max-w-80 shadow-xl shadow-pink-800/50">
			   <p className="font-mono  text-pink-700 p-3 justify-center text-2xl    "> Escola do Bolo 3.0 </p>
		  
			 </div>
				<Image className="flex justify-center relative rounded"
					src='../../images/chef_marrara_bortoloti/7813081.jpg'
					alt="Curso Chef Marrara Bortoloti - Escola do Bolo 3.0"
					 width={400}
					height={100}
			/>	
				
			  </div>
			  
			</div>
        </Link>	
		
	
	
	
	
		
</div>



          <div className="  mx-auto mt-30 grid md:grid-cols-3   ">
		  <div></div>
		  <div className="flex col">
		   <Link href="https://go.hotmart.com/T101220571S">
		  
		  	<Image className="flex justify-center relative rounded"
				src='../../images/chef_marrara_bortoloti/LOGO-SEM-FUNDO.png'
				alt=" Isis Alvares - Chef Confeiteira"
				 width={400}
				height={100}
		/>	
       </Link>	

            </div>	

 <div></div>		
          </div>
   
			<div className=" max-w-6xl mx-auto mt-5">
			Me chamo Marrara Bortoloti, tenho 33 anos, sou mãe, confeiteira e produtora dos Cursos Bolos de Sucesso e Escola de Bolo com mais de 50 mil alunas em todo o Brasil e no mundo!
A Confeitaria é realmente surpreendente, sempre cheia de novidades e oportunidades... E se Você quer começar um negócio próprio ou simplesmente preparar Bolos Incríveis, diferenciados e especiais, esse curso é perfeito para você!
		</div>			

     
    </div>
  </div>
</>

  );
}
