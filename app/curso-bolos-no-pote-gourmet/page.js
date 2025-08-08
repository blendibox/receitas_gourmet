"use cient"
import Image from "next/image";
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function Home() {
  return (
<>
  <div className="min-h-screen flex flex-col bg-gray-900">
  

    {/* Overlay */}
    <div className="  bg-black/70   z-999  shadow-xl shadow-black-500/30  ">
	  <div className="max-w-full    mx-auto  relative grid  grid-flow-col grid-rows-1 gap-4 ">
	    <div className=" col m-3 justify-center">
          <Link className=" flex grid-flow-col grid-rows-1  "
		    href="https://go.hotmart.com/T50684642P?ap=db9c" >		     		  
              <div className="bg-white rounded-full p-5 min-h-25  ">
		        <Image className="h-20  saturate-125"
                   src='images/CapaCursoBolosNoPoteGourmet.jpeg'
                   alt=" natflix"
                   width={90}
                   height={20}

               /> 
			   </div>
			    </Link>
		</div>	 

		 <div className="  col m-5 justify-right">
		  <div className=" flex bg-red-500 rounded text-white max-w-50 p-2 gap-4 absolute top-3 right-3 ">
		  <Link className=" flex grid-flow-col grid-rows-1  "
		    href="https://go.hotmart.com/T50684642P?ap=db9c" 		>	
		        <Image className="h-5 stroke-current  "
                   src='images/natflix/content-clipboard-document-paper-paste-icon-svgrepo-com.svg'
                   alt=" ir para o curso"
                   width={40}
                   height={40}

               />

              <b className=" flex justify-left ">		
			  Ir para o curso
			   </b>	
		    </Link>
	         </div>	 
		</div>	 
	   

	  </div>			

	</div>
	
	<div className="  flex items-center justify-center h-screen mb-12 overflow-hidden">

  
	
  <video
        id="produtoVideo"
        src='video_pag_1.mov'
        playsInline
        loop
		autoPlay
		muted
        className='absolute  w-auto min-w-full  max-w-none opacity-50'
      ></video>



  <div className="flex justify-center z-20  min-w-screen p-5  lg:mt-3	sm:mt-15	md:mt-15	mt-40 ">
	
		<div className="hero_content-2 align-center text-align-center ">
			<div className="">
				<h1 className="lg:text-7xl text-5xl  sm:text-3xl  	text-white text-center"> 
				 <b className="font-sans">Transforme</b> <br /> 
				 <b className="font-mono">seu Fogão </b> <br/>
				 <b className="font-mono">em uma</b> <br/>
 				 <b className="font-sans" > </b> <b  className="underline text-6xl"> Máquina de Vendas! </b> </h1>
			</div>
   
			<div className="img-top1-wrapper">
				<div className="text-sm  p-10 text-center">
				     <b className="text-white"> Brasil: top 1 de hoje </b>
				     <b className=" text-emerald-300">

					 4,5 de 5 gostaram </b>
					 
					
				</div>
				 <div className="text-center justify-center max-w-12xl">
				  <div className="ml-15 mr-15  flex justify-center  shadow-xl shadow-red-500/30 m-2  	z-30 p-5 text-2xl sm:text-md text-white text-center bg-red-500 bg-opacity-50 rounded-xl hover:bg-red-600 hover:p-6 hover:text-3xl cursor-pointer">
		
				<Link  href="https://go.hotmart.com/T50684642P?ap=db9c">
				Começe a Aprender Agora!
				</Link>
				 	</div>
				<br/>
				 <div className="mt-6	 text-2xl flex justify-center bg-black opacity-30  min-w-screen drop-shadow-sm">
				 <b className="relative mt-5 text-white pb-35 pt-5 sm:pb-5 "> + de 2.900 mil alunas já conquistaram uma Renda Extra</b>
				</div>

				</div>
            </div>
	    </div>
		 
	</div>

</div>




    {/* Seção Planos */}
    <div id="planos" className="relative bg-gray-900 text-white py-16">
	
	
	 <div className=" max-w-1xl p-10 col-span-2  sm:col-span-1  rounded  ">
	  <div className="flex justify-center mb-6 mt-6">
	     
				  <Image className="flex justify-center min-w-10 min-h-10"
					   src='images/natflix/starts.svg'
					   alt="Guias, agendas e materiais didáticos"
					   width={100}
					   height={40}
				   /> 			
				
			
				<div className="flex justify-center m-5 text-4xl font-mono sm:text-6xl ">
			   4,5 / 5
			  </div>
			    </div>
	  </div>
   
   
    <div className=" max-w-6xl  mx-auto text-center  relative grid bg-gray-900 grid-flow-col grid-rows-1 gap-4">
	  <div className="row-span-3  bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6  hover:shadow-xl hover:shadow-red-500/30">
	    <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-red-600 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10"
					   src='images/natflix/content-clipboard-document-paper-paste-icon-svgrepo-com.svg'
					   alt="Guias, agendas e materiais didáticos"
					   width={40}
					   height={40}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    mais de 40 vídeo aulas passo a passo de incríveis receitas gourmet 
			  </div>
			  </div>
			   
				
	  </div>
	  <div className="col-span-2  sm:col-span-1 bg-red-400 rounded   transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6  hover:shadow-xl hover:shadow-red-700/30">
	  <div className="flex justify-left mb-6 mt-6">
	            <div className="bg-red-600 rounded-full p-4 m-5 max-h-18">
				  <Image className="flex justify-center min-w-10 min-h-10"
					   src='images/natflix/happy-smiling-emoticon-square-face-with-sunglasses-svgrepo-com.svg'
					   alt="Guias, agendas e materiais didáticos"
					   width={40}
					   height={40}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono sm:text-3xl ">
			   1 Livro Digital Exclusivo
			  </div>
			    </div>
	  </div>
	  <div className="col-span-2 sm:col-span-1 row-span-2   bg-red-400 rounded  transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6  hover:shadow-xl hover:shadow-red-700/30">
	  <div className="flex justify-left mb-6 mt-6">
	        <div className="bg-red-600 rounded-full p-4 m-5 max-h-18">
				  <Image className="flex justify-center min-w-10 min-h-10"
					   src='images/natflix/album-svgrepo-com.svg'
					   alt="Guias, agendas e materiais didáticos"
					   width={40}
					   height={40}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono sm:text-3xl ">
			   Aprenda massas e recheios líder de vendas passo a passo
			  </div>
			   </div>
	  </div>
	</div>

   
   
	  
	  
	  <div id="modulos" className="px-4 md:px-8 mt-20 ">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ícone */}
          <div className="flex justify-center mb-6 mt-6">
            <div className="bg-red-600 rounded-full p-4">
			  <Image 
                   src='images/natflix/apple-svgrepo-com.svg'
                   alt="Guias, agendas e materiais didáticos"
                   width={40}
                   height={40}
               /> 			
            
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold">
           Módulos Essenciais para você ter a tão sonhada Liberadade Financeira.
          </h2>

          {/* Espaço */}
          <div className="mt-4" />

          {/* Subtítulo */}
          <p className="text-lg text-gray-300 mb-20">
            O Segredo das Confeiteiras Profissionais.
          </p>
        </div>
      </div>
	  
		
		 <div className="flex  max-w-6xl  mx-auto text-center  relative grid bg-gray-900 grid-flow-col grid-rows-4 gap-4">
	    
		   <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-white rounded-full p-4 m-5 max-h-14   min-w-14 ">
				 <b className=" text-gray-600 text-lg ">01</b>			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl align-middle  ">
			    Início
			  </div>
		   </div>	
		    </div>
          <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-white rounded-full p-4 m-5 max-h-14   min-w-14 ">
				 <b className=" text-gray-600 text-lg ">02</b>			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl align-middle  ">
			   Tipos de Massa
			  </div>
		   </div>	
		    </div>
			  <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-white rounded-full p-4 m-5 max-h-14   min-w-14 ">
				 <b className=" text-gray-600 text-lg ">03</b>			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl align-middle  ">
			 Tipos de Recheio
			  </div>
		   </div>	
		    </div>
				  <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-white rounded-full p-4 m-5 max-h-14   min-w-14 ">
				 <b className=" text-gray-600 text-lg ">04</b>			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl align-middle  ">
			Montagens no Pote
			  </div>
		   </div>	
		    </div>
					  <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-white rounded-full p-4 m-5 max-h-14   min-w-14 ">
				 <b className=" text-gray-600 text-lg ">05</b>			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl align-middle  ">
			Bônus
			  </div>
		   </div>	
		    </div>
					  <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-white rounded-full p-4 m-5 max-h-14   min-w-14 ">
				 <b className=" text-gray-600 text-lg ">06</b>			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl align-middle  ">
			Livro Digital
			  </div>
		   </div>	
		    </div>
					  <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-white rounded-full p-4 m-5 max-h-14   min-w-14 ">
				 <b className=" text-gray-600 text-lg ">07</b>			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl align-middle  ">
			Planilha de Custos
			  </div>
		   </div>	
		    </div>
						  <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-white rounded-full p-4 m-5 max-h-14   min-w-14 ">
				 <b className=" text-gray-600 text-lg ">08</b>			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl align-middle  ">
			Certificado
			  </div>
		   </div>	
		    </div>

			
			</div>
		
		
	

		
		{/* Tipos de Recheio. */}
		
	  <div className="px-4 md:px-8 mt-20 ">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ícone */}
          <div className="flex justify-center mb-6 mt-6">
             <div className="bg-red-600 rounded-full p-4">
			  <Image 
                   src='images/natflix/heart-pulse-svgrepo-com.svg'
                   alt="Guias, agendas e materiais didáticos"
                   width={40}
                   height={40}
               /> 			
            
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold">
          Tipos de Recheio.
          </h2>

          {/* Espaço */}
          <div className="mt-4" />
       </div>

        </div>
		
		 <div className="flex  max-w-6xl  mx-auto text-center  relative grid bg-gray-900 grid-flow-col grid-rows-7 gap-4">
	    
		   <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Mousse de Maracujá"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Mousse de Maracujá 
			  </div>
		   </div>	
		    </div>
             <div className=" row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Mousse de Limão"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Mousse de Limão
			  </div>
		   </div>		   
			</div>	

			<div className="row max-h-38  bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Mousse de Amarula"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Mousse de Amarula
			  </div>
		   </div>		   
			</div>	
			<div className="row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Mousse de Chocolate"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Mousse de Chocolate
			  </div>
		   </div>		   
			</div>	
				<div className="row max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Recheio Sonho de Valsa"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Recheio Sonho de Valsa
			  </div>
		   </div>		   
			</div>	
			<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Recheio Ovomaltine"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Recheio Ovomaltine
			  </div>
		   </div>		   
			</div>	
			<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Recheio Ouro Branco"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Recheio Ouro Branco
			  </div>
		   </div>		   
			</div>	
				<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Recheio Oreo"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Recheio Oreo
			  </div>
		   </div>		   
			</div>	
				<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Brigadeiro de Leite Ninho"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Brigadeiro de Leite Ninho
			  </div>
		   </div>		   
			</div>
	<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Brigadeiro de Chocolate"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Brigadeiro de Chocolate
			  </div>
		   </div>		   
			</div>
	<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Recheio Ferrero Rocher"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Recheio Ferrero Rocher
			  </div>
		   </div>		   
			</div>	
<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Creme Branco"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			    Creme Branco
			  </div>
		   </div>		   
			</div>	
<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Beijinho Tradicional"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			  Beijinho Tradicional
			  </div>
		   </div>		   
			</div>	
<div className="row  max-h-38 bg-red-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-1 hover:-translate-2  hover:shadow-xl hover:shadow-red-500/30">
	          <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-green-400 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10 "
					   src='images/natflix/chevron-down.webp'
					   alt="Beijinho Fit"
					   width={20}
					   height={20}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			  Beijinho Fit
			  </div>
		   </div>		   
			</div>			
		    
	  </div>
		    
		
	
		
		
		
		   <div className="px-4 md:px-8  mt-40">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ícone */}
          <div className="flex justify-center mb-6 mt-6">
             <div className="bg-yellow-100 rounded-full p-4">
			  <Image 
                   src='images/natflix/melhor.png'
                   alt="Guias, agendas e materiais didáticos"
                   width={40}
                   height={40}
               /> 			
            
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Assine e tenha acesso a todos os conteúdos do curso.
          </h2>

          {/* Espaço */}
          <div className="mt-4" />

          {/* Subtítulo */}
          <p className="text-lg text-gray-300">
            Sem surpresas, sem cobranças extras.
          </p>
        </div>
      </div>
	  
	  
	  {/* Cards de preços */}
      <div className="max-w-2xl mx-auto mt-10 grid md:grid-cols-1 gap-8 px-4">
        {/* Card Dark */}
        <div className="bg-gray-700 rounded-lg p-6 shadow-lg min-h-100">
          <div>
            <h3 className="text-4xl font-semibold">Pagamento único</h3>
            <p className="text-sm text-green-400 mt-1 min-h-6"></p>
            <h3 className="text-3xl font-bold mt-4">
  		  
			  <p> <b className="mt-4 space-y-1 text-gray-200 text-sm" >4 x de </b>R$ 13,91 *</p>

              <span className="text-base font-medium text-gray-300"> </span>
            </h3>
            <h3 className="text-xl mt-2 text-gray-200 min-h-6"></h3>

            {/* Informações extras */}
            <div className="mt-4 space-y-1 text-gray-200 text-md">
              <p>*Ou R$ 49,90 à vista</p>
			  <div className="flex">
			<Link  href="https://go.hotmart.com/T50684642P?ap=db9c" className="relative mt-10 shadow-xl shadow-red-500/30 		z-30 p-5 text-3xl text-white text-center bg-red-500 bg-opacity-50 rounded-xl hover:bg-red-600 hover:p-6 hover:text-3xl cursor-pointer">
					Começe agora!
				</Link>
				</div>
            </div>
			 
          </div>
        </div>
		
		
</div>
			  

    
    </div>
  </div>
</>

  );
}
