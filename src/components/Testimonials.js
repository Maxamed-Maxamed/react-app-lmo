import React from "react";


export default function Testimonials() {
    return (
        <div className="py-16 bg-gray-100 text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <div className="flex justify-center space-x-8">
            {/* Example Testimonials */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
              <p className="text-gray-700 text-base">"Amazing service! My makeup was flawless and lasted all day."</p>
              <div className="mt-4">
                <h4 className="font-bold">Jane Doe</h4>
                <span className="text-gray-500">Beauty Enthusiast</span>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
              <p className="text-gray-700 text-base">"The best eyelash extensions I've ever had. Highly recommend!"</p>
              <div className="mt-4">
                <h4 className="font-bold">Emily Smith</h4>
                <span className="text-gray-500">Fashion Blogger</span>
              </div>
            </div>
          </div>
        </div>
      );
}