import React from 'react';
import './MenuItem.css';

function MenuItem({ name, description, price }) {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
    </div>
  );
}

export default MenuItem;
