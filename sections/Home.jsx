import Button from "@/components/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="container--section-home">
      <div className="container--section-infos">
        <div>Está em busca de Assistência Técnica Especializada</div>
        <div>
          Eu me chamo Leonardo criador da CROWNTECH, e sou técnico em manutênção
          de celulares, computadores e video games.
        </div>
        <Button label={"Faça já um orçamento"} width={"200px"} />
      </div>
    </div>
  );
};

export default Home;
