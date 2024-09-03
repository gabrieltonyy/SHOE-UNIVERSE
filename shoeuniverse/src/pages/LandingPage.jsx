import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-[#D9F3FF] text-black-900 font-sans">
      {/* About Us Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold text-[#00A3FF]">ABOUT US</h2>
        <p className="mt-4 px-8 max-w-4xl mx-auto text-xl">
          Welcome to ShoeUniverse, where technology meets footwear to revolutionize how you discover, identify, and manage shoes. 
          Our cutting-edge platform leverages advanced machine learning and state-of-the-art robotics to bring unparalleled accuracy 
          and efficiency to the shoe industry.
        </p>
        <p className="mt-4 px-8 max-w-4xl mx-auto text-xl">
          At ShoeUniverse, we specialize in using machine learning algorithms to classify and identify various types of shoes. 
          Whether it's a boot, sandal, sneaker, or heel, our system can determine the exact type, brand, and name of the shoe with 
          remarkable precision.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="py-10">
        <h2 className="text-center text-3xl font-bold text-[#0050B6]">HOW IT WORKS</h2>
        <div className="flex justify-center items-center mt-8 space-x-8">
          <div className="flex flex-col items-center">
            <img src="/shoed.png" alt="Discover shoe" className="w-24 h-24" />
            <p className="text-[#0050B6] mt-2">1. Discover shoe</p>
          </div>
          <img src="/arrow.png" alt="Arrow" className="w-8 h-8" />
          <div className="flex flex-col items-center">
            <img src="/capture.png" alt="Capture or Upload" className="w-24 h-24" />
            <p className="text-[#0050B6] mt-2">2. Capture or Upload</p>
          </div>
          <img src="/arrow.png" alt="Arrow" className="w-8 h-8" />
          <div className="flex flex-col items-center">
            <img src="/analysis.png" alt="Machine Learning Analysis" className="w-24 h-24" />
            <p className="text-[#0050B6] mt-2 text-center">3. Machine Learning Analysis</p>
          </div>
          <img src="/arrow.png" alt="Arrow" className="w-8 h-8" />
          <div className="flex flex-col items-center">
            <img src="/qstn.png" alt="Results" className="w-24 h-24" />
            <p className="text-[#0050B6] mt-2">4. Results</p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="text-center py-10">
        <p className="px-8 max-w-4xl mx-auto text-xl">
          Our sophisticated machine learning models are trained on a vast dataset of shoes. This allows our system to accurately identify 
          the type and brand of a shoe from just an image. By simply capturing or uploading a photo, our users can quickly discover detailed 
          information about their footwear.
        </p>
        <button 
        className="mt-6 px-8 py-2 bg-[#F5F5F5] text-black font-bold rounded-full hover:bg-[#348C84] transition-colors duration-300 border border-black"
        onClick={() => navigate('/model')}>
          Get Started
        </button>
      </section>

      {/* Discover and Shop Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold text-[#0050B6]">DISCOVER AND SHOP</h2>
        <p className="mt-4 px-8 max-w-4xl mx-auto text-xl">
          But we don't stop there! With ShoeUniverse, you can:
        </p>
        <ul className="list-none text-left max-w-4xl mx-auto mt-4 text-xl">
          <li className="flex items-start mt-2">
            <img src="/shoed.png" alt="Icon" className="w-6 h-6 mr-2" />
            <span>Discover Similar or Exact Shoes: Find shoes similar to or exactly like the ones you upload, ready to shop from our store.</span>
          </li>
          <li className="flex items-start mt-2">
            <img src="/shoed.png" alt="Icon" className="w-6 h-6 mr-2" />
            <span>Shop Online: Explore our extensive online store, where you can find and purchase shoes that match your preferences and needs. 
              This revolutionary approach transforms the customer shopping experience, making it easier than ever to find the perfect pair.</span>
          </li>
        </ul>
        <button 
            className="mt-6 px-8 py-2 bg-[#F5F5F5] text-black font-bold rounded-full hover:bg-[#348C84] transition-colors duration-300 border border-black"
            onClick={() => navigate('/home')}>
          Shop
        </button>
      </section>

      {/* Other Services Section */}
      <section className="py-10">
        <h2 className="text-center text-3xl font-bold text-[#0050B6]">OTHER SERVICES</h2>
        <div className="flex justify-center items-center mt-8 space-x-8">
          <img src="/meet.jpeg" alt="Robotic Service" className="w-96 h-64 object-cover rounded-lg" />
          <div className="max-w-md text-xl">
            <p>ShoeUniverse's machine learning models can also be integrated with robotics to take the model use a step further:</p>
            <ul className="mt-4">
              <li className="flex items-start mt-2">
                <img src="/shoed.png" alt="Icon" className="w-6 h-6 mr-2" />
                <span>Pairing Shoes: Automatically matching shoes with their correct pair.</span>
              </li>
              <li className="flex items-start mt-2">
                <img src="/shoed.png" alt="Icon" className="w-6 h-6 mr-2" />
                <span>Sorting Shoes: Effortlessly separating bundled shoes, perfect for secondhand collections.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold text-[#0050B6]">WHY CHOOSE US?</h2>
        <ul className="list-none text-left max-w-4xl mx-auto mt-4 text-xl">
          <li className="flex items-start mt-2">
            <img src="/shoed.png" alt="Icon" className="w-6 h-6 mr-2" />
            <span>Effortless: Save time and effort with our automated systems.</span>
          </li>
          <li className="flex items-start mt-2">
            <img src="/shoed.png" alt="Icon" className="w-6 h-6 mr-2" />
            <span>Accurate: Trust our technology for precise shoe identification.</span>
          </li>
          <li className="flex items-start mt-2">
            <img src="/shoed.png" alt="Icon" className="w-6 h-6 mr-2" />
            <span>Innovative: Experience the latest in machine learning and robotics.</span>
          </li>
          <li className="flex items-start mt-2">
            <img src="/shoed.png" alt="Icon" className="w-6 h-6 mr-2" />
            <span>Better Shopping: Enjoy a personalized and convenient shopping experience.</span>
          </li>
        </ul>
        <p className="mt-6 px-8 max-w-4xl mx-auto text-xl">
          Join ShoeUniverse today and step into the future of footwear. Whether you're a retailer, a secondhand seller, or just a shoe lover, we make 
          managing and shopping for shoes easy and fun.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;