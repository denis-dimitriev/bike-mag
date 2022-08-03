import "./Homepage.scss";

import { Carousel } from "../../organisms/carousel/Carousel";
import { ProductContainer } from "../../organisms/product-container/ProductContainer";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Carousel />
      <ProductContainer />
    </div>
  );
};

export default Homepage;
