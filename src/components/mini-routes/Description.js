import React from "react";
import { Link } from "react-router-dom";

const Description = ({ description }) => {
  return (
    <div className="descript">
      <h3>Description:</h3>
      <h3>{description}</h3>
    </div>
  );
};

export default Description;
