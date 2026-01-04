import React from 'react';

const IconButton = ({ onClick, children, className = '' }) => (
  <button onClick={onClick} className={`icon-button ${className}`}>
    {children}
  </button>
);

export default IconButton;