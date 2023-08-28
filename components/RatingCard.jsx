import "./RatingCard.css";

const RatingCard = ({ info, name, photo }) => {
  return (
    <div className="rating--card-container">
      <div>
        <img src="./img/shape.png" alt="Avaliação" />
      </div>
      <div className="card--info">{info}</div>
      <div className="card--info-author">
        <img src={photo} alt={name} />
        <p className="card--name">{name}</p>
      </div>
    </div>
  );
};

export default RatingCard;
