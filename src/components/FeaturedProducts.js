import React from 'react';

export default function FeaturedProducts() {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Best Sellers</h2>
      <div className="flex justify-center space-x-8">
        {/* Example Product Cards */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/path-to-image1.jpg" alt="Product 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Product Name 1</div>
            <p className="text-gray-700 text-base">$29.99</p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/path-to-image2.jpg" alt="Product 2" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Product Name 2</div>
            <p className="text-gray-700 text-base">$39.99</p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/path-to-image3.jpg" alt="Product 3" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Product Name 3</div>
            <p className="text-gray-700 text-base">$49.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}