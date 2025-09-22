import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-500  text-white w-full px-4 py-3 text-sm z-50 mt-30">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8">
        <p className="text-center">
          &copy; {currentYear} Get me A Chai — All rights reserved!
        </p>
        <p className="text-center">
          Made with ❤️ by ID
        </p>
      </div>
    </footer>
  );
};

export default Footer;
