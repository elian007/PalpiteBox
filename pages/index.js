import React from "react";
import Link from "next/link";
import useSWR from 'swr'
import PageTitle from '../components/pageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  
  return (
    <div>
      <PageTitle title='Seja bem-vindo'/>
      <p className="mt-12 text-center">
        A hamburgueria <b>The Burger Shack</b> sempre busca atender melhor seus clientes.
        <br />
        Por isso, estamos sempre abertos a ouvir sua opinião
      </p>
      <div className="text-center my-12 ">
        <Link href="/pesquisa">
          <a className="bg-yellow-500 px-6 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow">
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      { !data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='my-12 text-center'>
          { data.message }
        </p>
      }
    </div>
  );
};

export default Index;
