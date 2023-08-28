import Link from "next/link";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const onClickButton = () => {
    window.location.href = "http://wa.me/4455998441483";
  };

  return (
    <div className="header-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img className="img--crown" src="./img/crown.png" alt="cown" />
        <img
          className="img--crowntech"
          src="./img/crowntech.png"
          alt="crownTech"
        />
      </div>
      <nav className="navbar-container">
        <ul>
          <li>
            <Link href="#inicio">Início</Link>
          </li>
          <li>
            <Link href="#sobre">Sobre</Link>
          </li>
          <li>
            <Link href="#servicos">Serviços</Link>
          </li>
          <li>
            <Link href="#avaliacoes">Avaliações</Link>
          </li>
          <li>
            <Link href="#localizacao">Localização</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Button
          label="Contato"
          imgSrc={"./img/whatsapp.png"}
          hasImg={true}
          width="120px"
        />
      </div>
    </div>
  );
};

export default Navbar;
