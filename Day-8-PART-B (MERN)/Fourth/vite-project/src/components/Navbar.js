import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/products')}>Products</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
