import React from "react";
import Link from "next/link";
import PageTitle from "../components/pageTitle";

const Contato = () => {
  return (
    <div className="pt-6">
      <PageTitle title="Contato" />
      <div >
        <h1 className="text-center font-bold my-4 text-2xl">
          Entre em contato conosco, <br /> em alguma de nossas redes sociais!
        </h1>

        <div className="container mx-auto text-center" >

        <Link href=''>
            <a className="my-4">
              <img
                className="max-w-2/100 mx-auto inline my-4"
                src="/whats.png"
                alt="Whatsapp"
              />
              <strong> (99) 9999-8888</strong><br />
            </a>
          </Link>

          <Link href="">
            <a className="my-4">
              <img
                className="max-w-2/100 inline my-4"
                src="/insta.jpg"
                alt="Facebook"
              />
              <strong> theburger</strong>
              <br />
            </a>
          </Link>

          <Link href="">
            <a className="my-4">
              <img
                className="max-w-2/100 inline my-4"
                src="/face.png"
                alt="Facebook"
              />
              <strong> theburger</strong>
              <br />
            </a>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default Contato;
