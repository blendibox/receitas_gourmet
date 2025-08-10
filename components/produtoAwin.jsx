import Image from  'next/image'
import Link from 'next/link'

import SchemaProduto from './SchemaProduto';

export default function ProdutoAwin(props) {
  const {
    produto,
	mybrand

  } = props;

 // const caminho =  mybrand.toLowerCase().trim();
  const linkUrl = `https://comprar.blendibox.com.br/${mybrand}/${produto['slug']}?${mybrand}`;

    return (
      <>   
      <head>		 
		 <SchemaProduto
		   title={produto['Title']}
		   image={produto['Image']} 
		   link ={linkUrl}
		   brand={produto['brand'] || mybrand}
		   priceGoogle= {produto['Price']}
		   />
	 </head>
      <main id="content" role="main" className="justify-center">
		
      <div className="p-8 max-w-3xl mx-auto  ">
      <h1 className="text-3xl font-bold mb-4">Onde Comprar {produto['Title']}?</h1>
	   <div className="m-2  items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
		  <Link
			href={produto['Deeplink']}
			className="inline-block mt-4  px-4 py-2 rounded"
			title={produto['Title']}
		  >     

		 <Image
			src={produto['Image']}
			alt={produto['Title']}
			width={406}
			height={406}
			className="rounded object-cover w-full h-full"
		  />

	     </Link>
		 <h2> Este produto você encontra na Loja
		  <Link
			href={produto['Deeplink']}
			className="inline-block mt-4  px-4 py-2 rounded underline decoration-emerald-500"
			title={produto['Advertiser'] || produto['Categories']}
		  >
		 <b>{produto['Advertiser'] || produto['Categorie']}</b>

          </Link>		 
		  </h2>
		 
      <p className="mt-4 text-lg">{ produto['Description'] || ""}</p>
	  
	  <Link
			href={produto['Deeplink']}
			className="inline-block mt-4  px-4 py-2 rounded"
			title={produto['Title']}
		  >     
		 <Image
			src={produto['Image']}
			alt={produto['Title']}
			width={250}
			height={250}
			className="rounded "
		  />
	     </Link>
      <p className="mt-2 text-green-700 font-bold">Preço: {produto['Price']}*</p>
      <Link
        href={produto['Deeplink']}
        className="inline-block mt-4 bg-emerald-600 text-white px-4 py-2 rounded text-xl"
      >
        Comprar  no site {produto['Advertiser'] || produto['Categories']}
      </Link>
	 
	  <hr className=" mt-12 "/>
	  <p>* Valor na data de publicação - 10/08/2025</p>

	  </div>
    </div>
         
        </main>
      </>
    );
  }
