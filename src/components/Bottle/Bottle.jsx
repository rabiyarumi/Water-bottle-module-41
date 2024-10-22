import "./bottle.css";

const Bottle = ({ bottle, handleBottlePurches }) => {
  const { name, img, price, seller } = bottle;
  return (
    <div className="bottle">
      <img src={img} alt="" />
      <h4>Bottle: {name}</h4>
      <p>Price: {price}$</p>
      <p>Brand: {seller}</p>
      <button onClick={() => handleBottlePurches(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
