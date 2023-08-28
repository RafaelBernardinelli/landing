import "./CardDetails.css";

const CardDetails = ({ imgSrc, title, infos }) => {
  return (
    <div className="card-details--container">
      <div className="card-details--header">
        <img src={imgSrc} alt="img details" />
        <h3 className="card-details--title">{title}</h3>
      </div>
      <div className="card-details--infos">
        <p>{infos}</p>
      </div>
    </div>
  );
};

export default CardDetails;
