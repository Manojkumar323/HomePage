import React from "react";
import logo from "/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <img
              src={logo} // replace with your logo path
              alt="Logo"
              className="w-13 h-20"
            />
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-right mb-4 sm:mb-0">
            <p className="text-sm sm:text-base md:text-lg font-normal">
              Contact:{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-blue-400 hover:text-blue-600 Atag"
              >
                yesuraj88@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="text-center text-sm sm:text-base md:text-lg font-light">
          <p>
            Website developed by{" "}
            <a
              href="https://www.seelangraphics.com/"
              target="_blank"
              className="text-blue-400 hover:text-blue-600 Atag"
            >
              Seelan graphic compass pvt ltd
            </a>
          </p>
          <p>Copyrights © 2024 TinyKarts. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
