import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className="p-3 bg-light">
      <h5>Recipe Categories</h5>
      <ul className="list-unstyled">
        <li>Vegan</li>
        <li>Gluten-Free</li>
        <li>Sweet Dish</li>
        <li>Breakfast</li>
      </ul>
    </div>
  );
};

export default Sidebar;
