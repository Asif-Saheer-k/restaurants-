import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/coffee.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import Breakfast from './Breakfast/EazyDiner'
import LunchTime from "./LunchTime/LunchTime";
import CoffeeSelection from './CoffeeSelection/CoffeeSelection'


const Menu = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
        text="Everything we have to offer at one glance"
      />
      <MenuOfTheDay />
      <Breakfast />
      <LunchTime />
      <CoffeeSelection />
      
    </div>
  );
};

export default Menu;
