import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TalentDetails({
  talent,
  favourites,
  handleFavourites,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="talent-card">
      <div
        className="favourite-icon"
        onClick={() => handleFavourites(talent.name)}
      >
        {favourites.has(talent.name) ? "❤️" : "🤍"}
      </div>
      <Slider key={talent.name} {...settings} className="carousel">
        {talent.images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              className="talent-detail-img"
              alt="talent-image"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      {/* <img
        src={talent.avatar}
        className="talent-detail-img"
        alt="talent-image"
        loading="lazy"
      /> */}
      <div className="name-container">
        <div className="name">{talent.name}</div>
      </div>
      <div className="details">
        <span>Region: {talent.region}</span>
        <span>Generation: {talent.generation}</span>
        <span>Debut date: {talent.debutDate}</span>
      </div>
    </div>
  );
}
