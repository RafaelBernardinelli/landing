import "./Aux.css";

const Aux = ({ number, title }) => {
  return (
    <div
      style={{ display: "flex", textAlign: "center", flexDirection: "column" }}
    >
      <h1 className="info--aux">
        <span style={{ color: "#F2CB05" }}>+</span> {number}
      </h1>
      <h4>{title}</h4>
    </div>
  );
};

export default Aux;
