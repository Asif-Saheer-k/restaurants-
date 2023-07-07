import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuOfTheDay.css";

import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";

const menuData = [
  {
    title: "Ice Cream",
    description: "with honeyed Pedro Ximenez sauce and potato cake",
    price: "100",
    img: image1,
  },
  {
    title: "Cake",
    description: "with herb crust and fruity mesclun salad and straw potato",
    price: "300",
    img: image2,
  },
  {
    title: "Halva",
    description: "with herb crust and fruity mesclun salad and straw potato",
    price: "40",
    img: image1,
  },
  {
    title: "Ladu",
    description: "with herb crust and fruity mesclun salad and straw potato",
    price: "90",
    img: image2,
  },
];

const MenuOfTheDay = () => {
  return (
    <div className="section">
      <div className="container menu-of-the-day">
        <h1 className="heading-secondary">
          <span>menu </span>of the day
        </h1>
        {menuData.map((data, i) => (
          <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuOfTheDay;
