import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 LMO Beauty. All rights reserved.</p>
            <div className="mt-4">
              <a href="/#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
              <a href="/#" className="text-gray-400 hover:text-white mx-2">Instagram</a>
              <a href="/#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
            </div>
          </div>
        </footer>
      );
}