import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MiniCard from "../mini-card";
import style from "./index.module.css";

const Carousel = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className={style.container}>
      <Slider className={style.container} {...settings}>
        <MiniCard planet="sun" name="Sol" />
        <MiniCard planet="mercury" name="Mercurio" />
        <MiniCard planet="venus" name="Venus" />
        <MiniCard planet="earth" name="Tierra" />
      </Slider>
    </div>
  );
};
export default Carousel;