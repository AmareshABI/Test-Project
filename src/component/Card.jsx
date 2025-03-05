import React from 'react';
import './Card.css';

const Card = ({user}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{user.name}</h3>
        <p className="card-content">{user.phone}</p>
        <p className="card-content">{user.email}</p>
      </div>
    </div>
  );
};

export default Card;
