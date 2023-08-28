import RatingCard from "@/components/RatingCard";
import "./Carousel.css";

const Carousel = () => {
  const cardInfos = [
    {
      info: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
      name: "Lucas Andrade",
      photo: "./img/image.png",
    },
    {
      info: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
      name: "Lucas Andrade",
      photo: "./img/image.png",
    },
    {
      info: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
      name: "Lucas Andrade",
      photo: "./img/image.png",
    },
    {
      info: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
      name: "Lucas Andrade",
      photo: "./img/image.png",
    },
    {
      info: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
      name: "Lucas Andrade",
      photo: "./img/image.png",
    },
    {
      info: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
      name: "Lucas Andrade",
      photo: "./img/image.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="/static/images/super-shoes.png" alt="Super Shoes Logo" />
      </div>
      <div className="carousel">
        {cardInfos.map((it) => {
          const { info, name, photo } = it;
          return <RatingCard info={info} name={name} photo={photo} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
