import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="list-group-item">
      {orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;
