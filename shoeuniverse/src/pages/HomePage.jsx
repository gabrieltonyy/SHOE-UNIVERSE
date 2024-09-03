import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const products = [
    {id: 1, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 2, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    {id: 3, image: '/sneaker1.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 4, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    {id: 5, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 6, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 7, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    {id: 8, image: '/sneaker1.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 9, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    {id: 10, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 11, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 12, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    {id: 13, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 14, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    {id: 15, image: '/sneaker1.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    {id: 16, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    // Add more products as necessary
  ];

  const Other_products = [
    { id: 17, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 18, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 19, image: '/sneaker1.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 20, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 21, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 22, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 23, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 24, image: '/sneaker1.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 25, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    { id: 26, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 27, image: '/sneaker3.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4 },
    { id: 28, image: '/sneaker2.png', name: 'Nike Cactus Jordan', price: 'KSh 4500', rating: 4.5 },
    // Add more products as necessary
  ];

  return (
    <div className="bg-[#D9F3FF]">
      <Navbar />
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold text-[#0050B6]">LATEST PRODUCTS</h2>
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
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold text-[#0050B6]">OTHER PRODUCTS</h2>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-3 justify-center">
          {Other_products.map((product, index) => (
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
      {/* Add other sections or components here as needed */}
    </div>
  );
};

export default Homepage;