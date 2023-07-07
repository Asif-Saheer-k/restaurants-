import React from "react";

import "./Breakfast.css";
import ListItem from "../../../components/ListItem/ListItem";
import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";

const menuDataLeft = [
  {
    title: "Pista Burfee",
    description: "with either bacon or salmon",
    price: "300",
    img:image1
  },
  {
    title: "Bikaneri Burfee",
    description: "with fresh fruit, bacon and maple syrup",
    price: "350",
    img:image2
  },
  {
    title: "Nariyal Burfee",
    description:
      "with grilled banana, bacon, rosewater mascarpone and maple syrup",
    price: "320",
    img:image1
  },
];

const menuDataRight = [
  {
    title: "Pakija",
    description: "grilled chicken breast with veggies",
    price: 340,
    img:image1
  },
  {
    title: "Kala Jamun",
    description: "with salmon, cream cheese and salsa",
    price: 230,
    img:image2
  },
  {
    title: "Boondi Ladoo",
    description: "with chocolate  sauce or maple syrup, honey and cream",
    price: 430,
    img:image1
  },
];

const Breakfast = () => {
  return (
    <div className="container breakfast">
      <h1 className="heading-secondary">
        Eazy<span>Diner</span>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            
            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
