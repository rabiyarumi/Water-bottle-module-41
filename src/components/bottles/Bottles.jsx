import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleBottlePurches = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h3>Bottles Available: {bottles.length}</h3>
      <h4>Cart: {cart.length}</h4>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleBottlePurches={handleBottlePurches}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
