import React from "react";
import Link from "next/link";

const Pesquisa = () => {
  return (
    <div className="pt-6">
      <h1 className="text-center font-bold my-4 text-2xl">
        Críticas e Sugestões
      </h1>
      <p className="mb-6 text-center">
        O restaurante X sempre busca atender melhor seus clientes.
        <br />
        Por isso, estamos sempre abertos a ouvir sua opinião
      </p>
      <div className="w-1/4 mx-auto">
        <label className="font-bold">Seu nome:</label>
        <input
          type="text"
          className="p-4 block shadow bg-blue-100 m-2 rounded my-2"
        />
      </div>
      <div className="w-1/4 mx-auto">
        <label className="font-bold">E-mail:</label>
        <input
          type="text"
          className="p-4 block shadow bg-blue-100 m-2 rounded my-2"
        />
      </div>
      <div className="w-1/4 mx-auto">
        <label className="font-bold">Whatsapp:</label>
        <input
          type="text"
          className="p-4 block shadow bg-blue-100 m-2 rounded my-2"
        />
      </div>
      <div className="w-1/4 mx-auto">
        <label className="font-bold">Sua crítica ou sugestão</label>
        <input
          type="text"
          className="p-4 block shadow bg-blue-100 m-2 rounded my-2"
        />
      </div>
      <div className="w-1/4 mx-auto">
        <label className="font-bold">
          Que nota você daria para este estabelcimento:
        </label>
      </div>
      <div className="w-1/4 mx-auto">
        <label className="font-bold">Você indicaria para um amigo?</label>
      </div>

      <div className="text-center my-8 ">
        <Link href="/">
          <a className="bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow">
            Enviar crítica ou sugestão
          </a>
        </Link>

        <p className="my-8 text-center font-bold">
          Ao dar sua opinião e/ou sugestão, <br />
          ganhe 10% na sua próxima compra
        </p>
      </div>
    </div>
  );
};

export default Pesquisa;
