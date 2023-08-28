import "./Button.css";

const Button = ({ label, imgSrc, hasImg, width, onClick }) => {
  return (
    <button style={{ width }} className="button--container" onClick={onClick}>
      {hasImg ? <img className="img--button" src={imgSrc} alt="img" /> : ""}
      <p className="button--label">{label}</p>
    </button>
  );
};

export default Button;
