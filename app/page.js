"use cient"
import Image from "next/image";
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function Home() {
  return (
<>

{/*video background*/}
 <video
				id="produtoVideo"
				src='../../assets/chef-isis-alvarez/bolo_no_pote/bolo_no_pote.mp4'
				alt="chef isis alvarez"
				playsInline
				loop
				autoPlay
				muted
				className='absolute  w-auto min-w-full min-h-full max-w-none opacity-70 background-black contrast-110 saturation-110    '
			  ></video> 



    {/* Seção inicio */}
    <div id="inicio" className=" opacity-90  mh-auto text-center  relative grid bg-purple-900 grid-flow-col grid-rows-1 gap-4  bold  text-white py-16">
	
        <div className="flex mt-0  max-w-[80%] max-w-7xl mx-auto  grid md:grid-cols-1 gap-8 px-4  bg-p-900 	">
			   
					
		 <div className=" bg-amber-200 p-5 text-pink-900 rounded text-1xl sm:text-sm   xl:text-xl lg:text-lg md:text-md">
			   Tenha Acesso Aos Melhores <b className="font-mono">Cursos De Confeitaria </b><br/>
			Aprenda sem precisar sair de casa, sem gastar com deslocamento.<br/>
			Aulas  <b className="font-mono">detalhadas</b>, que você poderá ver e rever sempre que quiser!<br/>
			Cursos para  <b className="font-mono">iniciantes</b> e  <b className="font-mono">profissionais</b> que querem aprimorar seus conhecimentos<br/>
<Link href="#cursos" 
className=" flex font-mono  rounded bg-pink-600 text-white p-5 mt-5 max-w-[80%] ml-[10%] mr-[10%] justify-center text-center  shadow-xl shadow-purple-500/50 "> 
<svg aria-hidden="true" className="max-w-7 mr-3 fill-white " viewBox="0 0 20 20"   xmlns="http://www.w3.org/2000/svg"><path d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z"  data-name="Down"/></svg>		
VER CURSOS</Link>         
	


			   </div>
			   
			   
			 </div>
			 
	</div>
	
    <div id="meio" className="   text-center  relative grid bg-purple-900 grid-flow-col  gap-4  bold bg-purple-900 text-white py-16">
		
			 
    {/* Seção cursos */}
    <div id="cursos" className="relative bg-black text-white py-6">
		  <h2 className=" text-white-500 font-mono max-w-[70%] ml-[15%] mr-[15%] text-3xl"><b>CURSOS</b>
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
				 priority 
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
		<Link href="https://go.hotmart.com/G101256374B">
        <div className="bg-yellow-200 rounded-lg   shadow-xl shadow-yellow-500/50 min-h-100">
          <div>
	
		  
		  	<Image className="flex justify-center relative rounded saturate-[1.5] contrast-[1.03]"
				src='../../images/chef_isis_alvarez/capa-amarela-bolod-caseiros.webp'
				alt="Curso Chef Isis Alvares -Bolos Caseiros com Sabor e Alma Junina – por Chef Ísis Alvarez"
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
				 <Link href="https://go.hotmart.com/A101256401Q">
        <div className="bg-white rounded-lg   shadow-xl shadow-amber-500/50 min-h-100">
          <div>
		  
		  
		  	<Image className="flex justify-center relative rounded saturate-[1.4] contrast-[1.03]"
				src='../../images/chef_isis_alvarez/CapaTortas41.webp'
				alt="Curso Chef Isis Alvares - Apostila Tortas de Confeitaria da Chef Isis"
				 width={400}
				height={100}
		/>	
       		
          </div>
		  <div className="m-5">
		 <div className="text-white p-3 text-3xl ml-[25%] rounded bg-pink-700  max-w-43"> R$ 19,00</div>
         <p className="text-pink-700 pl-5 pb-5 text-1xl mt-5  ml-[10%]"> em 2x de <b>R$ 10,40</b>	 no cartão </p>
		 </div>
        </div>
		</Link>	
		
		
							{/* Card curso*/}
		<Link href="https://go.hotmart.com/M92814070N">
        <div className="bg-pink-200 rounded-lg   shadow-xl shadow-pink-500/50 min-h-100">
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
		
			
		
			        {/* Card curso*/}
		 <Link href="https://go.hotmart.com/R101060256U">
		 
			<div className="bg-purple-400 rounded-lg   shadow-xl shadow-purple-500/50 min-h-100 max-h-130">
			
			  <div className="mt-5">
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
			
			  <div className="mt-5">
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
			
			  <div className="mt-5">
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
			
			  <div className="mt-5">
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
		
		
		
	
	</div>	
</div>
			 
			 

	
  </div>
</>

  );
}
