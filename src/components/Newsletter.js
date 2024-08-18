import React from 'react';

export default function NewsLetter () {

    return (
        <div className="py-16 bg-pink-600 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Join Our Beauty Insider Club</h2>
          <p className="text-lg mb-8">Get exclusive offers, tips, and updates delivered to your inbox.</p>
          <form className="flex justify-center">
            <input
              type="email"
              className="px-4 py-2 text-gray-800 rounded-l-full focus:outline-none"
              placeholder="Enter your email"
            />
            <button type="submit" className="bg-black px-6 py-2 rounded-r-full hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>
      );
      
}
