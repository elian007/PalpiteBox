import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-300 p-4 shadow-md">
      <div className="container mx-auto text-center font-bold text-black">
        Projeto Desenvolvido por:
        <a
          className="px-2 hover:underline"
          href="https://www.facebook.com/elian.marcos.7"
          target="_blank"
        >
          {" "}
          Elian Marcos
        </a>{" "}
        /
        <a
          className="px-2 hover:underline"
          href="https://linkedin.com/in/elian-marcos/"
          target="_blank"
        >
          {" "}
          Linkedin
        </a>{" "}
        /
        <a
          className="px-2 hover:underline"
          href="https://github.com/Elian07"
          target="_blank"
        >
          {" "}
          GitHub
        </a>{" "}
        /
        <div className="mt-4 ">
          <img
            className="inline p-4 max-w-15/100"
            src="/logo_devpleno.png"
            alt="DevPleno"
          />
          <img
            className="inline p-4 max-w-15/100"
            src="/logo_semana_fsm.png"
            alt="Semana Fullstack Master"
          />
        </div>
      </div>
      <div className='pt-6 text-right text-xs'>
        *Ícones feitos por{" "}
        <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/br/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
