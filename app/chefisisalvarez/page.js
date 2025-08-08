"use cient"
import Image from "next/image";
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function Home() {
  return (
<>
	<div className="min-h-screen flex flex-col bg-black">
	  
		<Image
		className="flex justify-center min-w-screen"
							   src='../../images/chef_isis_alvarez/backgroun-desk-ok.webp'
							   alt="Guias, agendas e materiais didáticos"
							   width={500}
							   height={500}

		/>
		<div className=" text-lg  absolute ml-10 mt-45">
		   <h1 className=" text-red-500 font-mono  text-3xl"><b>CHEF ISIS ALVAREZ</b>   </h1>
		   <p className="text-white font-mono  text-3xl mt-2"  ><b> SEJA BEM-VINDA <br/> A MINHA LOJA</b></p>
		   
		   <p className=" text-white  text-1xl mb-2 mt-2" >Mais de 87 Mil Alunas Satisfeitas</p>
		   <p className=" text-white  text-sm" >Aqui você tem acesso a todo material <br/>(Cursos, Apostilas) da Chef Isis Alvarez.</p>
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
	   <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6 px-4">
	   
        {/* Card curso*/}
		 <Link href="https://go.hotmart.com/A101220653L">
        <div className="bg-purple-400 rounded-lg   shadow-xl shadow-purple-500/50 min-h-100">
          <div>
		 
		  	<Image className="flex justify-center relative rounded"
				src='../../images/chef_isis_alvarez/capa-roxa-ebooks-bolo-no-pote.webp'
				alt="Curso Chef Isis Alvares - Fábrica de Bolos no Pote"
				 width={400}
				height={100}
		/>	
        	
          </div>
        </div>
 </Link>	
 
 
 		{/* Card curso*/}
				 <Link href="https://go.hotmart.com/P101220643E">
        <div className="bg-pink-400 rounded-lg   shadow-xl shadow-pink-500/50 min-h-100">
          <div>
		  
		  
		  	<Image className="flex justify-center relative rounded"
				src='../../images/chef_isis_alvarez/Capa-Bolos-Vulcoes.webp'
				alt="Curso Chef Isis Alvares - Vivendo de Bolos Vulcões"
				 width={400}
				height={100}
		/>	
   	
          </div>
        </div>
		    </Link>	
			
			{/* Card curso*/}
				 <Link href="https://go.hotmart.com/U81320832O">
        <div className="bg-pink-400 rounded-lg   shadow-xl shadow-pink-500/50 min-h-100">
          <div>
		  
		  
		  	<Image className="flex justify-center relative rounded"
				src='../../images/chef_isis_alvarez/capa-preta-bolos-de-festa.webp'
				alt="Curso Chef Isis Alvares - Vivendo de Bolos Vulcões"
				 width={400}
				height={100}
		/>	
   	
          </div>
        </div>
		    </Link>	
			
			
		
							{/* Card curso*/}
							 
		<Link className="bg-amber-50 rounded-lg   shadow-xl shadow-amber-500/50 min-h-100" 
		href="https://go.hotmart.com/H101220566O">
        <div className=" justify-center">
          <div>
		  
		  
		  	<Image className="flex justify-center relative rounded saturate-[1.3] contrast-[1.03]"
				src='../../images/chef_isis_alvarez/banner800x800.webp'
				alt="Curso Chef Isis Alvares - Doces para Presentear"
				 width={400}
				height={100}
		/>	
     		
          </div>
		   <div className="m-5">
		 <div 
		 className="text-white p-3 text-3xl ml-[25%] rounded bg-amber-700 max-w-43"> R$ 127,00</div>
         <p className="text-amber-700 pl-5 pb-5 text-1xl mt-5  ml-[10%]"> em 12x de <b>R$ 12,75</b>	 no cartão </p>
		 </div>
        </div>
		  </Link>	
		  
		  {/* Card curso*/}
			 <Link href="https://go.hotmart.com/A101220592B">
        <div className="bg-amber-400 rounded-lg   shadow-xl shadow-amber-500/50 min-h-100">
          <div>
		  
		  
		  	<Image className="flex justify-center relative rounded"
				src='../../images/chef_isis_alvarez/Slice-Cakes.webp'
				alt="Curso Chef Isis Alvares - Slice Cakes - Da Fatia ao Bolo Perfeito"
				 width={400}
				height={100}
		/>	
     		
          </div>
        </div>
		  </Link>	
		
								{/* Card curso*/}
			<Link className="bg-amber-50 rounded-lg   shadow-xl shadow-red-500/50 min-h-100" 
							
								href="https://go.hotmart.com/T101220571S">
        <div >
          <div>
		   
		  
		  	<Image className="flex justify-center relative rounded saturate-[1.5] contrast-[1.03]"
				src='../../images/chef_isis_alvarez/capaminivulcao.webp'
				alt="Curso Chef Isis Alvares - Apostila Bolo Mini Vulcão"
				 width={400}
				height={100}
		/>	
     		
          </div>
		   <div className="m-5">
		 <div className="text-white p-3 text-3xl ml-[25%] rounded bg-red-700  max-w-43"> R$ 19,90</div>
         <p className="text-red-700 pl-5 pb-5 text-1xl mt-5  ml-[10%]"> em 2x de <b>R$ 10,40</b>	 no cartão </p>
		 </div>
        </div>
		  </Link>	
		
		
		
				{/* Card curso*/}
				 <Link href="https://go.hotmart.com/S101220577Q">
        <div className="bg-white rounded-lg   shadow-xl shadow-amber-500/50 min-h-100">
          <div>
		  
		  
		  	<Image className="flex justify-center relative rounded saturate-[1.4] contrast-[1.03]"
				src='../../images/chef_isis_alvarez/ColecaoReceitasLucrativas.webp'
				alt="Curso Chef Isis Alvares - Coleção Receitas Lucrativas da Chef Ísis Alvarez"
				 width={400}
				height={100}
		/>	
       		
          </div>
		  <div className="m-5">
		 <div className="text-white p-3 text-3xl ml-[25%] rounded bg-pink-700  max-w-43"> R$ 97,00</div>
         <p className="text-pink-700 pl-5 pb-5 text-1xl mt-5  ml-[10%]"> em 12x de <b>R$ 9,74</b>	 no cartão </p>
		 </div>
        </div>
		</Link>	
		
		
							{/* Card curso*/}
								   <Link
className="bg-pink-200 rounded-lg   shadow-xl shadow-pink-500/50 min-h-100"
								   href="https://go.hotmart.com/M92814070N">
        <div >
          <div>
	
		  
		  	<Image className="flex justify-center relative rounded saturate-[1.5] contrast-[1.03]"
				src='../../images/chef_isis_alvarez/SOBREMESASok.webp'
				alt="Curso Chef Isis Alvares - Apostila de Sobremesas Lucrativas da Chef Isis Alvarez"
				 width={400}
				height={100}
		/>	
       		
          </div>
		   <div className="m-5">
		 <div className="text-white p-3 text-3xl ml-[25%] rounded bg-pink-700  max-w-43"> R$ 19,90</div>
         <p className="text-pink-700 pl-5 pb-5 text-1xl mt-5  ml-[10%]"> em 2x de <b>R$ 10,40</b>	 no cartão </p>
		 </div>
        </div>
		</Link>	
		
		
						{/* Card curso*/}
						   <Link href="https://go.hotmart.com/P101220643E">
        <div className="bg-white rounded-lg   shadow-xl shadow-red-500/50 min-h-100">
          <div>
		
		  
		  	<Image 
			className="flex justify-center relative rounded saturate-[1.5] contrast-[1.03]"
				src='../../images/chef_isis_alvarez/CAPAQUADRADASOREBEMESAS.webp'
				alt="Curso Chef Isis Alvares -Sobremesas da Chef Ísis Alvarez 2024"
				 width={400}
				height={100}
		/>	
       			
          </div>
		   <div className="m-5">
		 <div className="text-white p-3 text-3xl ml-[25%] rounded bg-red-700  max-w-43"> R$ 97,00</div>
         <p className="text-red-700 pl-5 pb-5 text-1xl mt-5  ml-[10%]"> em 12x de <b>R$ 9,74</b>	 no cartão </p>
		 </div>
        </div>
		</Link>
		
			
		
		
	
	
	
	
		
</div>



          <div className="  mx-auto mt-30 grid md:grid-cols-3   ">
		  <div></div>
		  <div className="flex col">
		   <Link href="https://go.hotmart.com/T101220571S">
		  
		  	<Image className="flex justify-center relative rounded"
				src='../../images/chef_isis_alvarez/LOGO-ISIS-ALVAREZcor.png'
				alt=" Isis Alvares - Chef Confeiteira"
				 width={400}
				height={100}
		/>	
       </Link>	

            </div>	

 <div></div>		
          </div>
   
			<div className=" max-w-6xl mx-auto mt-5">
			
			Olá! Eu sou a Ísis Alvarez, chef confeiteira apaixonada pela culinária desde que me conheço por gente. Muito prazer!

Me formei em gastronomia em 2003 e logo em seguida mergulhei de cabeça no mundo da confeitaria.

Trabalhei em grandes casas em São Paulo, como a Confeitaria Fasano, Restaurante D.O.M. e Confeitaria Le Vin.

Em Campinas, chefiei a confeitaria do Restaurante Belline, do Hotel Vitória.

​​​​​​​Fora do país, aprimorei meus conhecimentos na Lenôtre, uma das principais escolas de gastronomia de Paris, me especializando também em Barcelona (Espanha) e Florença (Itália).

Trabalhei diretamente com confeitaria para eventos, fornecendo bolos e um extenso cardápio de doces finos e modelados - nascia aí a Sucre en Rouge.

A partir de vários pedidos de aulas e receitas, comecei então a formar turmas com variados cursos de confeitaria na região. Não demorou muito para levar meus cursos a vários estados do Brasil e também receber grandes profissionais em meu ateliê.

​​​​​​

Ao mesmo tempo, comecei a oferecer minhas aulas ONLINE, gravando cursos completos e com suporte, para que todos os que desejam aprender ou aprimorar seus conhecimentos consigam com esta facilidade.
</div>			

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
    
    </div>
  </div>
</>

  );
}
