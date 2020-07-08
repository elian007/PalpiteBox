import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto Desenvolvido por:
        <a className="px-2 hover:underline" href="https://www.facebook.com/elian.marcos.7" target='_blank'>
          {" "}
          Elian Marcos
        </a>{" "}
        /
        <a
          className="px-2 hover:underline"
          href="https://linkedin.com/in/elian-marcos/" target='_blank'
        >
          {" "}
          Linkedin
        </a>{" "}
        /
        <a className="px-2 hover:underline" href="https://github.com/Elian07" target='_blank'>
          {" "}
          GitHub
        </a>{" "}
        /
        <div className='mt-4 '>
          <img className="inline p-4 max-w-1/15" src="/logo_devpleno.png" alt="DevPleno" />
          <img
            className="inline p-4 max-w-1/15"
            src="/logo_semana_fsm.png"
            alt="Semana Fullstack Master"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
