import React from "react";
import Link from "next/link";
import PageTitle from "../components/pageTitle";

const Contato = () => {
  return (
    <div>
      <PageTitle title="Contato" />
      <div>
        <span className="text-center">Entre em contato conosco, <br /> em alguma de nossa redes sociais!</span>
        <div className="container mx-auto text-center">
          <Link href="">
            <a>
              <img
                className="max-w-1/4 mx-auto"
                src="/whats.png"
                alt="Whatsapp"
              />
              <span className='hover:underlins'>(99) 9999 - 8888 </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contato;
