// @flow

import React from "react";


type Props = {
  description: string
}


const Description = (props: Props) => {

  return (
    <div className="descript">
      <h3>Description:</h3>
      <h3>{props.description}</h3>
    </div>
  );
};

export default Description;
