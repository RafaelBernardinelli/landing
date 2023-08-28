import Aux from "@/components/Aux";
import Navbar from "@/components/Navbar";
import Carousel from "@/sections/Carousel";
import Details from "@/sections/Details";
import Home from "@/sections/Home";
import Services from "@/sections/Services";
import "./page.css";

export default function Page() {
  return (
    <div>
      <Navbar />
      <section id="inicio">
        <Home />
      </section>
      <section id="sobre">
        <div>
          <h2 className="subtitle-page">
            {" "}
            Só aqui você encontra os melhores{" "}
            <span style={{ color: "#007ad8" }}>serviços </span>
            pelos menores <span style={{ color: "#F2CB05" }}>preços </span>
          </h2>
          <Services />
        </div>
      </section>
      <section
        id="servicos"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <h2 className="subtitle-details-page">
            Porque somos a melhor opção pra
            <span style={{ color: "#F2CB05" }}> você?</span>
          </h2>
          <Details />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            backgroundImage: 'url("./img/placaback 1.png")',
            height: "165px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Aux number="5" title="Anos de Experiencia" />
          <Aux number="4000" title="Aparelhos consertados" />
          <Aux number="1500" title="Clientes Satisfeitos" />
        </div>
      </section>
      <section
        id="avaliacoes"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 className="subtitle-page">
          O que nossos <span style={{ color: "#007ad8" }}>clientes</span> dizem
          sobre <span style={{ color: "#F2CB05" }}>nós?</span>
        </h2>
        <Carousel />
      </section>
      <section id="localizacao">
        <h2>Localização</h2>
        {/* Conteúdo da seção */}
      </section>
    </div>
  );
}
