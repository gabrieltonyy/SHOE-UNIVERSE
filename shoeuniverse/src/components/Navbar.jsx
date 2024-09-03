import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#D9F3FF] py-4">
      <ul className="flex justify-center space-x-10">
        <li>
          <Link to="/" className="text-blue-900 hover:text-[#0050B6] font-semibold">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/" className="text-blue-900 hover:text-[#0050B6] font-semibold">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/model" className="text-blue-900 hover:text-[#0050B6] font-semibold">
            MODEL
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-blue-900 hover:text-[#0050B6] font-semibold">
            CART
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




