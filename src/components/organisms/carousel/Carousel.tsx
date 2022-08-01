import "./Carousel.scss";

import scott from "./scott-slider.png";
import samo from "./samo.png";
import Button from "../../atoms/ui/button/Button";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

interface ICarousel {
  id: number;
  name: string;
  label: string;
  img: string;
  link: string;
  novelty: boolean;
  active: boolean;
}

const carouselAds = [
  {
    id: 1,
    name: "Scott",
    label: "Горные велосипеды Scott Downhill от официального дилера",
    img: scott,
    link: "",
    novelty: true,
    active: true,
  },
  {
    id: 2,
    name: "Scott",
    label: "Электросамокаты Kugoo Kirin от официального дилера",
    img: samo,
    link: "",
    novelty: true,
    active: false,
  },
  {
    id: 3,
    name: "Scott",
    label: "Горные велосипеды Scott от Slide3",
    img: "",
    link: "",
    novelty: true,
    active: false,
  },
];

export const Carousel = () => {
  const [ads, setAds] = useState<ICarousel[]>(carouselAds);

  const onClickButtonHandler = useCallback((id: number) => {
    setAds((prevState) =>
      prevState.map((slide) => {
        if (slide) {
          slide.active = false;
        }
        if (slide.id === id) {
          slide.active = true;
        }
        return slide;
      })
    );
  }, []);

  return (
    <div className="carousel-container">
      {ads.map((ad) => {
        const { id, novelty, label, img, name, link, active } = ad;
        return (
          <section
            key={id}
            className={`carousel-item-container ${
              active ? "fadeIn" : "fadeOut"
            }`}
          >
            <div className="container-body">
              {novelty && <span className="badge">Новинка</span>}
              <div className="label">{label}</div>
              <Link to={link}>
                <Button variant={"light"}>Перейти в католог</Button>
              </Link>
            </div>

            <div className="container-bg">
              <img src={img} alt={name} />
            </div>
          </section>
        );
      })}

      <div className="carousel-indicators">
        {ads.map((ad) => {
          const { id, active } = ad;
          return (
            <button
              key={id}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className={`${active && "active"}`}
              aria-current="true"
              aria-label={`${id}`}
              onClick={() => onClickButtonHandler(id)}
            />
          );
        })}
      </div>
    </div>
  );
};
