const { default: Card } = require("@/components/Card");

const Services = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2em",
        marginBottom: "5em",
      }}
    >
      <Card title="Celulares" imgSrc={"img/servcell.png"} price="40" />
      <Card title="Computadores" imgSrc={"img/servpc.png"} price="60" />
      <Card title="Notebooks" imgSrc={"img/servnote.png"} price="60" />
      <Card title="Video Games" imgSrc={"img/servcontrole.png"} price="80" />
    </div>
  );
};

export default Services;
