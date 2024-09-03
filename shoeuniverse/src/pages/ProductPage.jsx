import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';

const ProductPage = () => {
  const location = useLocation();
  const { image, name, price, rating, description, sizes, colors } = location.state || {};

  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!location.state) {
    console.error('Error: No product data received!');
  } else {
    console.log('Product data:', { image, name, price, rating, description, sizes, colors });
  }

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const products = [
    { id: 29, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 30, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 31, image: '/sneaker1.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 32, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 33, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 34, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 35, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 36, image: '/sneaker1.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 37, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 38, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 39, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 40, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 41, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 42, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 43, image: '/sneaker1.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 44, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    // Add more products as necessary
  ];

  return (
    <div className="bg-[#D9F3FF] min-h-screen py-10 px-6 md:px-16">
      <Navbar />
      <section className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md hover:bg-[#348C84] transition-colors duration-300">
                <img src={image} alt={name} className="h-48 w-full object-cover rounded-t-lg" />
              </div>
              <div className="ml-4 bg-white p-4 rounded-lg shadow-md hover:bg-[#348C84] transition-colors duration-300">
                <img src={image} alt={name} className="h-48 w-full object-cover rounded-t-lg" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image} alt={name} className="w-full object-cover rounded-lg" />
          </div>
          <div className="lg:w-1/2 p-4 ml-5">
            <div className="mb-4">
              <h3 className="text-lg font-bold">Size</h3>
              <div className="flex space-x-2">
                {sizes && sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => handleSizeSelect(size)}
                    className={`border border-black rounded-full px-4 py-2 transition-colors duration-300 ${
                      selectedSize === size ? 'bg-black text-white' : 'text-[#9747FF] hover:bg-black hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold mr-2">Reviews</h2>
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold mr-2">Price</h2>
              <span className="text-2xl font-bold mr-2">{price}</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Color</h3>
              <div className="flex space-x-2">
                {colors && colors.map((color, index) => (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-black transition-colors duration-300"
                  ></button>
                ))}
              </div>
            </div>
            {quantity === 0 ? (
              <button
                className="bg-[#F5F5F5] text-black px-4 py-2 rounded-lg hover:bg-[#348C84] transition-colors duration-300"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center">
                <button
                  className="bg-[#F5F5F5] text-black px-4 py-2 rounded-l-lg hover:bg-[#348C84] transition-colors duration-300"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="px-4 py-2 text-xl">{quantity}</span>
                <button
                  className="bg-[#F5F5F5] text-black px-4 py-2 rounded-r-lg hover:bg-[#348C84] transition-colors duration-300"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Similar Products Section */}
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold text-[#0050B6] mb-6">SIMILAR PRODUCTS</h2>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-5 justify-center">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
        <button className="mt-8 px-8 py-2 bg-[#F5F5F5] text-black font-bold rounded-full hover:bg-[#348C84] transition-colors duration-300 border border-black">
          See More
        </button>
      </div>
    </div>
  );
};

export default ProductPage;