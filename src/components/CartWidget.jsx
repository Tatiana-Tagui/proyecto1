import { Button } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <div className="cart">
      <Button size="lg" variant="outline">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>5</span>
      </Button>
    </div>
  );
};

export default CartWidget;
