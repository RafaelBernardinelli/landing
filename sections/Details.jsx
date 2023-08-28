import CardDetails from "@/components/CardDetails";

const Details = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2.5em",
      }}
    >
      <CardDetails
        infos="A maior parte dos concertos prontos no mesmo dia.
Nada pior que ficar sem seu aparelho certo?
"
        imgSrc={"./img/img1.png"}
        title={"Velocidade"}
      />
      <CardDetails
        infos="Se mesmo após nossos esforços seu aparelho não tiver conserto, você não paga por isso."
        imgSrc={"./img/img2.png"}
        title={"Sem conserto\nsem pagamento"}
      />
      <CardDetails
        infos="Serviço garantido.
Todas as manutenções que realizamos possuem garantia de até 90 dias."
        imgSrc={"./img/img3.png"}
        title={"Garantia"}
      />
      <CardDetails
        infos="Equipe qualificada com anos de experiencia para te oferecer o melhor e mais ágil atendimento. "
        imgSrc={"./img/img4.png"}
        title={"Experiência"}
      />
    </div>
  );
};

export default Details;
