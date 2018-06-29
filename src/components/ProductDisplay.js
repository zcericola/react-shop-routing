// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string,
  price: number,
  img: string,
  id: number
};

//syntax for function based components
const ProductDisplay = (props: Props) => {
  return (
    <Link to={`/details/${props.id}`} className="box">
      <img
        className="pic-frame"
        src={require(`./../assets/${props.img}`)}
        alt="of products"
      />
      <h3>
        Type: <span style={{ fontSize: '15px' }}>{props.name}</span>
      </h3>

      <h5>
        Price: <span style={{ fontSize: '15px' }}>{props.price}</span>
      </h5>
    </Link>
  );
};

export default ProductDisplay;
