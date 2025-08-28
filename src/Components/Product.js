import React, { useState } from "react";
import ProductInfo from "./ProductionInfo";

const Product = () => {
  const [item, setItem] = useState(ProductInfo);
  const [cakeitem, setcakeItem] = useState(ProductInfo[0]);
  const [positem, setpos] = useState(0);

  const selectCake = (pos) => {
    setcakeItem(ProductInfo[pos]);
    setpos(pos);
  };

  return (
    <div className="container">
      <h1>Cake Factory</h1>
      <p className="cakeheading">
        Indulge in handcrafted cakes that blend tradition, flavor, and
        artistry—only at Cake Factory.
      </p>

      <div className="cakeContainer">
        {item.map((item, pos) => {
          const arr = ["classimg"];
          if (pos === positem) {
            arr.push("classimgBorder");
          }
          return (
            <img
              key={pos}
              className={arr.join(" ")}
              src={item.image}
              alt={item.name}
              onClick={() => selectCake(pos)}
            />
          );
        })}
      </div>

      <div className="cakeInfo">
        <h1>{cakeitem.name}</h1>
        <img src={cakeitem.image} alt={cakeitem.name} />
        <p>{cakeitem.description}</p>
        <div className="cakePrice">
          <h4>
            Price <span className="pricebg">{cakeitem.price}</span>
          </h4>
          <h4>
            <span className="ratebg">{cakeitem.rating}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
