"use cient"
import Image from "next/image";
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function Home() {
  return (
<>


    {/* Seção inicio */}
    <div id="inicio" className="  mh-auto text-center  relative grid bg-purple-900 grid-flow-col grid-rows-1 gap-4  bold  text-white py-16">
	
        <div className="flex mt-0  max-w-[80%] max-w-6xl mx-auto  grid md:grid-cols-1 gap-8 px-4  bg-p-900 	">
			   
					
		 <div className="  bg-amber-200 p-10 text-pink-900 rounded text-2xl sm:text-md md:text-md">
			   Tenha Acesso Aos Melhores <b className="font-mono">Cursos De Confeitaria </b><br/>
			Aprenda sem precisar sair de casa, sem gastar com deslocamento.<br/>
			Aulas  <b className="font-mono">detalhadas</b>, que você poderá ver e rever sempre que quiser!<br/>
			Cursos para  <b className="font-mono">iniciantes</b> e  <b className="font-mono">profissionais</b> que querem aprimorar seus conhecimentos<br/>
<Link href="#cursos" 
className=" flex font-mono  rounded bg-pink-600 text-white p-5 mt-5 max-w-[50%] ml-[25%] mr-[25%] justify-center text-center  shadow-xl shadow-purple-500/50 "> 
<svg aria-hidden="true" className="max-w-8 mr-3 fill-white " viewBox="0 0 20 20"   xmlns="http://www.w3.org/2000/svg"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z"  data-name="Down"/></svg>		
VER CURSOS</Link>         
		 <video
				id="produtoVideo"
				src='../../assets/chef-isis-alvarez/bolo_no_pote/bolo_no_pote.mp4'
				alt="chef isis alvarez"
				playsInline
				loop
				autoPlay
				muted
				className='flex relative saturate-[1.5] contrast-[1.03]  max-w-[80%] ml-[10%] mr-[10%] mt-5 rounded shadow-xl shadow-purple-800/30   '
			  ></video> 


			   </div>
			   
			   
			 </div>
			 
	</div>
    <div id="meio" className="   text-center  relative grid bg-purple-900 grid-flow-col  gap-4  bold bg-purple-900 text-white py-16">
		
			 
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
</div>
			 
			 
			 
			 
			 
			 
			 </div>
			 
 <div id="planos" className="  mx-auto text-center  relative grid bg-purple-900 grid-flow-col grid-rows-6 gap-4 text-3xl bold bg-purple-900 text-white py-16">
		 
		 
	   <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-1 gap-8 px-4  bg-purple-900 	">
	  
	  <div className="col  bg-amber-400 rounded ">
	    <div className="flex justify-center mb-6 mt-6  ">
			<div className=" text-center justify-center max-w-2xl  m-5">
			<div className=" ml-[26%] bg-white rounded-full  m-5  min-h-25 min-w-25  max-w-35 text-center justify-center  text-red-500">
				  <Image className="flex justify-center max-w-38 min-h-10 p-5 "
					   src='images/BolosdeFestaok.png.webp'
					   alt="Guias, agendas e materiais didáticos"
					   width={140}
					   height={140}
				   />  
              </div>				   
		  <div >
			  curso:<br/> <b className='italic text-3xl bold text-red-800 '>Bolos De Festa Ísis Alvarez</b><br/><br/>
			  </div>
		  
			  
			  	 <div className="text-center justify-center max-w-12xl">
				  <div className="ml-15 mr-15 sm:ml-5 sm:mr-5 flex justify-center  shadow-xl shadow-red-500/30 m-2  	z-30 p-5 text-2xl sm:text-md text-white text-center bg-red-500 bg-opacity-50 rounded-xl hover:bg-red-600  cursor-pointer  transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-1  hover:shadow-xl hover:shadow-red-500/30">
		
				<Link  href="https://go.hotmart.com/U81320832O">
				Saiba Mais!
				</Link>
				</div>
				</div>
			 </div> 	  
			<div className="flex justify-center m-5      ">
			     <video
				id="produtoVideo"
				src='assets/chef-isis-alvarez/bolo_andar_ganache/chamada_semana_gratuita_bolos_de_festa.mp4'
				playsInline
				loop
				autoPlay
				muted
				className='relative  w-auto max-w-2xl rounded shadow-xl shadow-purple-800/30   '
			  ></video>
			  
			  </div>
		
			  </div>
	  </div>
	</div>	 
  
    <div className=" max-w-6xl mx-auto mt-10 grid md:grid-cols-1 gap-8 px-4  bg-purple-900 	">
	  
	  <div className="col  bg-amber-400 rounded ">
	    <div className="flex justify-center mb-6 mt-6  ">
			<div className=" text-center justify-center max-w-2xl  m-5">
			<div className=" ml-[26%]  bg-white rounded-full  m-5  min-h-25 min-w-25  max-w-35 text-center justify-center  text-red-500">
				  <Image className="flex justify-center max-w-40 min-h-10 p-5 "
					   src='images/CapaCursoBolosNoPoteGourmet.jpeg'
					   alt="Guias, agendas e materiais didáticos"
					   width={140}
					   height={140}
				   />  
              </div>				   
		  <div >
			  curso:<br/> <b className='italic text-3xl bold text-amber-800 '>Bolos no Pote Gourmet</b><br/><br/>
			  </div>
		  
			  
			  	 <div className="text-center justify-center max-w-12xl">
				  <div className="ml-15 mr-15 sm:ml-5 sm:mr-5 flex justify-center  shadow-xl shadow-red-500/30 m-2  	z-30 p-5 text-2xl sm:text-md text-white text-center bg-red-500 bg-opacity-50 rounded-xl hover:bg-red-600  cursor-pointer  transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-1  hover:shadow-xl hover:shadow-red-500/30">
		
				<Link  href="https://go.hotmart.com/T50684642P?dp=1">
				Saiba Mais!
				</Link>
				</div>
				</div>
			 </div> 	  
			<div className="flex justify-center m-5      ">
			     <video
				id="produtoVideo"
				src='video_pag_1.mov'
				playsInline
				loop
				autoPlay
				muted
				className='relative  w-auto max-w-2xl rounded shadow-xl shadow-purple-800/30   '
			  ></video>
			  
			  </div>
		
			  </div>
	  </div>
	</div>

   
 

		    <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-1 gap-8 px-4  bg-purple-900 	">
	  
	  <div className="col  bg-amber-400 rounded ">
	    <div className="flex justify-center mb-6 mt-6  ">
			<div className=" text-center justify-center max-w-2xl  m-5">
			<div className=" ml-[26%] bg-red-900 rounded-full  m-5  min-h-25 min-w-25  max-w-35 text-center justify-center  text-red-500">
				  <Image className="flex justify-center max-w-38 min-h-10 p-5 "
					   src='images/marrara.png'
					   alt="Guias, agendas e materiais didáticos"
					   width={140}
					   height={140}
				   />  
              </div>				   
		  <div >
			  curso:<br/> <b className='italic text-3xl bold text-red-800 '>Bolo Vulcão e Piscina - Marrara Bortoloti</b><br/><br/>
			  </div>
		  
			  
			  	 <div className="text-center justify-center max-w-12xl">
				  <div className="ml-15 mr-15 sm:ml-5 sm:mr-5 flex justify-center  shadow-xl shadow-red-500/30 m-2  	z-30 p-5 text-2xl sm:text-md text-white text-center bg-red-500 bg-opacity-50 rounded-xl hover:bg-red-600  cursor-pointer  transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-1  hover:shadow-xl hover:shadow-red-500/30">
		
				<Link  href="https://go.hotmart.com/T101060258F">
				Saiba Mais!
				</Link>
				</div>
				</div>
			 </div> 	  
			<div className="flex justify-center m-5      ">
			     <video
				id="produtoVideo"
				src='video_pag_3.mp4'
				playsInline
				loop
				autoPlay
				muted
				className='relative  w-auto max-w-2xl rounded shadow-xl shadow-purple-800/30   '
			  ></video>
			  
			  </div>
		
			  </div>
	  </div>
	</div>	 
	
		    <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-1 gap-8 px-4  bg-purple-900 	">
	  
	  <div className="col  bg-amber-400 rounded ">
	    <div className="flex justify-center mb-6 mt-6  ">
			<div className=" text-center justify-center max-w-2xl  m-5">
			<div className=" ml-[26%] bg-red-900 rounded-full  m-5  min-h-25 min-w-25  max-w-35 text-center justify-center  text-red-500">
				  <Image className="flex justify-center max-w-38 min-h-10 p-5 "
					   src='images/marrara.png'
					   alt="Guias, agendas e materiais didáticos"
					   width={140}
					   height={140}
				   />  
              </div>				   
		  <div >
			  curso:<br/> <b className='italic text-3xl bold text-red-800 '>Bolos e Sobremesas de Vitrine - Marrara Bortoloti</b><br/><br/>
			  </div>
		  
			  
			  	 <div className="text-center justify-center max-w-12xl">
				  <div className="ml-15 mr-15 sm:ml-5 sm:mr-5 flex justify-center  shadow-xl shadow-red-500/30 m-2  	z-30 p-5 text-2xl sm:text-md text-white text-center bg-red-500 bg-opacity-50 rounded-xl hover:bg-red-600  cursor-pointer  transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-1  hover:shadow-xl hover:shadow-red-500/30">
		
				<Link  href="https://go.hotmart.com/R101060256U">
				Saiba Mais!
				</Link>
				</div>
				</div>
			 </div> 	  
			<div className="flex justify-center m-5      ">
			     <video
				id="produtoVideo"
				src='video_pag_4.mov'
				playsInline
				loop
				autoPlay
				muted
				className='relative  w-auto max-w-2xl rounded shadow-xl shadow-purple-800/30   '
			  ></video>
			  
			  </div>
		
			  </div>
	  </div>
	</div>	 



			    <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-1 gap-8 px-4  bg-purple-900 	">
	  
	  <div className="col  bg-amber-400 rounded ">
	    <div className="flex justify-center mb-6 mt-6  ">
			<div className=" text-center justify-center max-w-2xl  m-5">
			<div className=" ml-[26%] bg-red-900 rounded-full  m-5  min-h-25 min-w-25  max-w-35 text-center justify-center  text-red-500">
				  <Image className="flex justify-center max-w-38 min-h-10 p-5 "
					   src='images/marrara.png'
					   alt="Guias, agendas e materiais didáticos"
					   width={140}
					   height={140}
				   />  
              </div>				   
		  <div >
			  curso:<br/> <b className='italic text-3xl bold text-red-800 '>Bolos de Sucesso - Marrara Bortoloti</b><br/><br/>
			  </div>
		  
			  
			  	 <div className="text-center justify-center max-w-12xl">
				  <div className="ml-15 mr-15 sm:ml-5 sm:mr-5 flex justify-center  shadow-xl shadow-red-500/30 m-2  	z-30 p-5 text-2xl sm:text-md text-white text-center bg-red-500 bg-opacity-50 rounded-xl hover:bg-red-600  cursor-pointer  transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-1  hover:shadow-xl hover:shadow-red-500/30">
		
				<Link  href="https://go.hotmart.com/E96070367U">
				Saiba Mais!
				</Link>
				</div>
				</div>
			 </div> 	  
			<div className="flex justify-center m-5      ">
			     <video
				id="produtoVideo"
				src='video_pag_2.mp4'
				playsInline
				loop
				autoPlay
				muted
				className='relative  w-auto max-w-2xl rounded shadow-xl shadow-purple-800/30   '
			  ></video>
			  
			  </div>
		
			  </div>
	  </div>
	</div>	


  </div>
</>

  );
}
