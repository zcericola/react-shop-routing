import React from "react";
import { Link } from "react-router-dom";

//name,price,img, and id are being destructured off of props
const ProductDisplay = ({ name, price, img, id }) => {
  return (
    <Link to={`/details/${id}`} className="box">
      <img className="pic-frame" src={require(`./../assets/${img}`)} alt="" />
      <h3>
        Type: <span style={{ fontSize: "15px" }}>{name}</span>
      </h3>

      <h5>
        Price: <span style={{ fontSize: "15px" }}>{price}</span>
      </h5>
    </Link>
  );
};

export default ProductDisplay;
