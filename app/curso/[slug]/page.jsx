import fs from 'fs';
import path from 'path';
import { lerProdutoPorSlug } from '../../../lib/awin';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProdutoAwin from '../../../components/produtoAwin';

const nomeArquivo = 'cursos';

export async function generateStaticParams() {
	
  
  const indexPath = path.join(process.cwd(), 'public', 'data', 'cursos.jsonl');
  const slugsProduto = [];
  
  console.log(indexPath);
  
  const linhas = fs.readFileSync(indexPath, 'utf8').split('\n');
  const slugs = [];

  for (const linha of linhas) {
    if (!linha.trim()) continue; // Ignora linhas vazias
    try {
		
      const obj = JSON.parse(linha);
      if (obj.slug) {
        slugs.push({ slug: obj.slug });
      }
    } catch (e) {
      console.warn(`❌ Erro ao parsear linha: ${linha}`);
    }
  }

  return slugs;
 
 
}

export async function generateMetadata({ params }) {
  const produto = await lerProdutoPorSlug(params.slug, nomeArquivo);


  if (!produto) return {};

  return {
    title: produto['Title'],
    description: produto['Description'],
  };
}



export default async function ProdutoPage({ params }) {
    

  const produto = await lerProdutoPorSlug(params.slug, nomeArquivo);

  if (!produto) return notFound();

  return (
	  <ProdutoAwin
		produto= {produto}
		mybrand='curso'
	  >
	  </ProdutoAwin>
	  
  );
}
