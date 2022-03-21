import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      about
      <br />
      <button onClick={handleClick}>Home 으로</button>
      <Link to='/'>Home</Link>
    </div>
  );
}
