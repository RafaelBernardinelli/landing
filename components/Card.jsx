import Button from "./Button";
import "./Card.css";

const Card = ({ title, imgSrc, price }) => {
  return (
    <div className="card--container">
      <h1 className="card--title">{title}</h1>
      <img className="card--img" src={imgSrc} alt="image cards" />
      <p className="card--repair">Reparos apartir de:</p>
      <div className="card--price">R$ {price},00</div>
      <div>
        <Button label="Faça já um orçamento" width="180px" onPressButton={""} />
      </div>
    </div>
  );
};

export default Card;
