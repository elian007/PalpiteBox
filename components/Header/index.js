import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className="container mx-auto text-center">
          <Link href="/">
            <a>
              <img
                className="max-w-1/4 mx-auto"
                src="/hamb1.png"
                alt="PalpiteBox"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="bg-red-400 p-4 shadow-md text-center">
        <Link href="/sobre">
          <a className="px-2 hover:underline text-white">Sobre</a>
        </Link>
        <Link href="/contato">
          <a className="px-2 hover:underline  text-white">Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className="px-2 hover:underline text-white">Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
