import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, image, name, price, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('product id', id);
    console.log('product data:', { image, name, price, rating });
    navigate(`/product/${id}`, {
      state: { image, name, price, rating },
    });
  };
  return (
    <div 
    onClick={handleClick}
    className="bg-white shadow-md rounded-lg overflow-hidden p-2 cursor-pointer md:p-3 lg:p-4 transform scale-75 hover:scale-80 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-32 md:h-40 lg:h-48 object-cover" />
      <h3 className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg font-semibold text-center text-blue-900">{name}</h3>
      <div className="flex justify-center mt-1 md:mt-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.571 8.332 1.151-6.001 5.801 1.417 8.261L12 18.897l-7.416 4.474 1.417-8.261-6.001-5.801 8.332-1.151L12 .587z" />
          </svg>
        ))}
      </div>
      <p className="mt-1 md:mt-2 text-center text-sm md:text-base lg:text-xl font-semibold text-blue-900">{price}</p>
    </div>
  );
};

export default ProductCard;