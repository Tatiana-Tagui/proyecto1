import React from "react";

const ItemListContainer = ({ greeting, saludos }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <h2>{saludos}</h2>
    </div>
  );
};

export default ItemListContainer;
