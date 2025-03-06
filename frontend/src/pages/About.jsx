// src/pages/About.jsx
import React from 'react';
import { FaLeaf, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About RecipeShare</h2>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">
                <FaLeaf className="me-2" />
                Our Mission
              </h3>
              <p className="card-text">
                Connecting food enthusiasts worldwide through recipe sharing 
                and culinary collaboration.
                Encourage Culinary Creativity – Inspire people to experiment with new ingredients, cuisines, and cooking techniques.

              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">
                <FaUsers className="me-2" />
                Features
              </h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Share your unique recipes</li>
                <li className="list-group-item">Discover new dishes</li>
                <li className="list-group-item">Connect with food lovers</li>
                <li className="list-group-item"> Add new recipes with images, ingredients, steps, and categories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;