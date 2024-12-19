import React from "react";
import { LaptopT } from "../types/LaptopT";
const Card: React.FC<LaptopT> = ({ id, title, price }) => {
  return (
    <div className="card">
      {/* <img src={imageUrl} alt={title} className="card-image" /> */}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{price}$</p>
      </div>
    </div>
  );
};

export default Card;
