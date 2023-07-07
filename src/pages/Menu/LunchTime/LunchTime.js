import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './LunchTime.css'
import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";



const menuDataLeft = [
    {
      title: "Kanju Roll",
      description: "Ale & artichokes",
      price: 640,
      img: image1,
    },
    {
      title: "Kesar Burfi",
      description: "Mushroom ketchup & fries",
      price: 700,
      img: image1,
    },
    {
      title: "Kanju Pan",
      description: "Smoked confit fennel & umbles",
      price: 535,
      img: image1,
    },
    {
      title: "Kanju Katli",
      description: "Mussel & seaweed ketchup, salmon roe & sea rosemary",
      price: 262,
      img: image1,
    },
  ];
  
  const menuDataRight = [
    {
      title: "Malai Peda",
      description: "Pan fried line fish, herbed nicola potato and mussel salad",
      price: 437,
      img: image1,
    },
    {
      title: "Yellow Peda",
      description: "Pan seared lamb loin, slow roasted lamb shanks",
      price: 403,
      img: image1,
    },
    {
      title: "Kanju Katli",
      description: "Confit duck leg, mushroom and liver stuffing and onions",
      price: 305,
      img: image1,
    },
    {
      title: "Anjeer Kajuu Roll",
      description: "with sesame, aubergine puree and burnt aubergine jelly",
      price: 500,
      img: image1,
    },
  ];

const LunchTime = () => {
  return (
    <div className='section'>
        <div className="container lunch-time">
      <h1 className="heading-secondary">
       SWEETS <span>PRICE</span>
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
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default LunchTime