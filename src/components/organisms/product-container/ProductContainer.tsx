import "./ProductContainer.scss";

import Button from "../../atoms/ui/button/Button";
import { CardItem } from "../../molecules/card-item/CardItem";

export const ProductContainer = () => {
  return (
    <div className="product-container">
      <div className="product-header">
        <span className="title">Электросамокаты</span>
        <div className="filters">
          <Button variant={"light"}>Хиты продаж</Button>
          <Button variant={"light"}>Для города</Button>
          <Button variant={"light"}>Взрослые</Button>
          <Button variant={"light"}>Детские</Button>
        </div>
      </div>
      <div className="product-body">
        <CardItem />
      </div>
    </div>
  );
};
