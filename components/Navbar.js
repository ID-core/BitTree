/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProductsDropdownContent = {
  title: "Products Plans",
  desc: "Choose the plan that fits your needs. Simple, transparent Products.",
  img: "/Products.png", // Make sure Products.png is in your public folder
};

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate", "/pricing"].includes(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);

  return (
    showNavbar && (
      <nav className="z-1 lg:py-3 md:py-4 md:px-8 sm:py-4 sm:px-8 bg-white absolute w-[80vw] top-10 right-[10vw] rounded-full mx-auto pl-10 text-black flex justify-between items-center transition-transform duration-500">
        {/* Left section: logo + nav links in one line */}
        <div className="flex items-center gap-10">
          <Link href={"/"}>
          <Image
            className="hover:cursor-pointer"
            src="/BitTree_logo.svg"
            width={120}
            height={120}
            alt="nav desktop logo"
          /></Link>

          <div className="relative flex gap-8 items-center">
            <ul className="hidden lg:flex gap-8 items-center">
              <li
                className="hover:cursor-pointer relative"
                onMouseEnter={() => {
                  if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    setHideTimeout(null);
                  }
                  setHoveredMenu("Products");
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setHoveredMenu(null);
                    setHideTimeout(null);
                  }, 100); // 0.1 seconds
                  setHideTimeout(timeout);
                }}
              >
                Products
                {hoveredMenu === "Products" && (
                  <div
                    className="absolute left-[0vw] move-left-to-zero top-full mt-[28px] z-50 bg-white rounded-xl shadow-lg w-[1070px]  min-h-[300px] text-black flex justify-center items-start h-[370px] w-[1070px] l-[100px] grid grid-cols-1 md:grid-cols-3 transition-all duration-300 ease-out opacity-100 scale-100 animate-fade-slide-in"
                    onMouseEnter={() => {
                      if (hideTimeout) {
                        clearTimeout(hideTimeout);
                        setHideTimeout(null);
                      }
                      setHoveredMenu("Products");
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setHoveredMenu(null);
                        setHideTimeout(null);
                      }, 100); // 0.1 seconds
                      setHideTimeout(timeout);
                    }}
                  >
                    {/* Column 1: Example options */}
                    <ul className="col-span-1 flex flex-col gap-4 p-4 md:p-8 border-r">
                      <li className="flex items-center gap-2 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer">
                        Manage your social media
                      </li>
                      <li className="flex items-center gap-2 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer">
                        Grow and engage your audience
                      </li>
                      <li className="flex items-center gap-2 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer">
                        Monetize your following
                      </li>
                      <li className="flex items-center gap-2 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer pb-1">
                        Measure your success
                      </li>
                    </ul>
                    {/* Column 2: Example details */}
                    <div className="col-span-1 p-4 md:p-8 border-r flex flex-col justify-center">
                      <div className="text-lg font-semibold mb-2">
                        Schedule and auto-post
                      </div>
                      <div className="text-gray-700 mb-4">
                        Hands-free, hassle-free social media planning
                      </div>
                      <div className="text-lg font-semibold mb-2">
                        Instagram auto reply
                      </div>
                      <div className="text-gray-700 mb-4">
                        Automated replies and DMs triggered by comments
                      </div>
                      <div className="text-lg font-semibold mb-2">
                        AI content & caption generator
                      </div>
                      <div className="text-gray-700 mb-4">
                        Instant AI-powered post ideas and captions
                      </div>
                    </div>
                    {/* Column 3: Example featured */}
                    <div className="col-span-1 p-4 md:p-8 flex flex-col items-center justify-center">
                      <div className="font-bold text-xl mb-2">Featured</div>
                      <img
                        src="/Products.png"
                        alt="Products"
                        className="rounded-xl w-full h-40 object-cover mb-2 bg-orange-400"
                      />
                      <div className="font-semibold text-lg mb-2">
                        Join BitTree as their link in bio
                      </div>
                      <div className="text-gray-700 text-center">
                        One link to share everything you create, curate,and all
                        sell across all your socials.
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <Link href="/pricing">
                <li className="hover:cursor-pointer">Pricing</li>
              </Link>

              <li
                className="hover:cursor-pointer relative"
                onMouseEnter={() => {
                  if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    setHideTimeout(null);
                  }
                  setHoveredMenu("Learn");
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setHoveredMenu(null);
                    setHideTimeout(null);
                  }, 100); // 0.1 seconds
                  setHideTimeout(timeout);
                }}
              >
                Learn
                {hoveredMenu === "Learn" && (
                  <div
                    className="absolute left-[-5vw]  Lesson_move-left-to-zero top-full mt-[28px] z-50 bg-white rounded-xl shadow-lg w-[1070px] text-black flex justify-center items-start h-[360px] w-[1070px] l-[100px] grid grid-cols-1 md:grid-cols-3 transition-all duration-300 ease-out opacity-100 scale-100 animate-fade-slide-in"
                    onMouseEnter={() => {
                      if (hideTimeout) {
                        clearTimeout(hideTimeout);
                        setHideTimeout(null);
                      }
                      setHoveredMenu("Learn");
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setHoveredMenu(null);
                        setHideTimeout(null);
                      }, 100); // 0.1 seconds
                      setHideTimeout(timeout);
                    }}
                  >
                    {/* Column 1: Example options */}
                    <ul className="col-span-1 flex flex-col gap-4 p-4 md:p-8 border-r justify-start">
                      <li className="flex items-center gap-2 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer">
                        Resources
                      </li>
                      <li className="flex items-center gap-2 font-semibold hover:bg-gray-100 p-3 mb-42 rounded cursor-pointer">
                        How to use BitTree
                      </li>
                    </ul>
                    {/* Column 2: Example details */}
                    <div className="col-span-1 p-4 md:p-8 border-r flex flex-col justify-center">
                      <div className="text-lg font-semibold mb-10">
                        Resources
                      </div>

                      <div className="text-lg font-semibold mb-2">
                        Read our blogs
                      </div>
                      <div className="text-gray-700 mb-10">
                        All the latest tips, tricks, and growth strategies
                      </div>

                      <div className="text-lg font-semibold mb-2">
                        Success Stories
                      </div>
                      <div className="text-gray-700 mb-10">
                        Real people, real results on BitTree
                      </div>
                    </div>
                    {/* Column 3: Example featured */}
                    <div className="col-span-1 p-4 md:p-8 flex flex-col items-start justify-center">
                      <div className="font-bold text-xl mb-2">
                        Learn with BitTree
                      </div>
                      <img
                        src="/Learn.png"
                        alt="Learn"
                        className="rounded-xl w-full h-40 object-cover mb-2 bg-orange-400"
                      />
                      <div className="font-normal font-gray-900 text-md mb-2">
                        Create & sell your own mobile course with BitTree.
                        <p className="text-gray-500 text-sm font-normal">
                          If you&apos;ve got something to share, you&apos;ve got something
                          to sell. Easily create and share an online course...
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Right section: buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-gray-300 text-black font-bold px-6 py-2 rounded-md hover:cursor-pointer">
            No Login Needed
          </button>
          <Link href={"/generate"}>
          <button className="bg-gray-900 text-white font-bold px-6 py-2 rounded-full hover:cursor-pointer">
            Try up free
          </button></Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="ml-4 px-5 lg:hidden block p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {!menuOpen && (
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
            </svg>
          )}
          {menuOpen && (
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="text-lg font-bold absolute top-[85%] mx-auto max-h-[700px] overflow-y-auto bg-slate-100 w-[90%] shadow-lg rounded-b-xl flex flex-col py-4 lg:hidden z-50 my-5">
            <ul className="flex items-start pl-8 flex-col gap-4 mb-4 ">
              <li
                className="hover:cursor-pointer"
                onMouseEnter={() => {
                  if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    setHideTimeout(null);
                  }
                  setHoveredMenu("ProductsMobile");
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setHoveredMenu(null);
                    setHideTimeout(null);
                  }, 300); // 0.3 seconds
                  setHideTimeout(timeout);
                }}
              >
                Products
                {hoveredMenu === "ProductsMobile" && (
                  <div className="mt-[5px] ml-[-15px] bg-white rounded-xl shadow-lg w-full text-black grid grid-cols-1 md:grid-cols-3 transition-all duration-300 ease-out animate-fade-slide-in">
                    {/* Column 1: Menu with icons */}
                    <ul className="col-span-1 flex flex-col gap-4 p-6 border-r">
                      <li className="flex items-center gap-3 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer text-md">
                        Manage your social media
                      </li>
                      <li className="flex items-center gap-3 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer text-md">
                        Grow and engage your audience
                      </li>
                      <li className="flex items-center gap-3 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer text-md">
                        Monetize your following
                      </li>
                      <li className="flex items-center gap-3 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer text-md">
                        Measure your success
                      </li>
                    </ul>
                    {/* Column 2: Details */}
                    <div className="col-span-1 p-6 border-r flex flex-col gap-6 justify-center">
                      <div>
                        <div className="font-bold mb-1 text-md">
                          Link in bio + tools
                        </div>
                        <div className="text-gray-600 text-sm mb-4">
                          Customize your BitTree
                        </div>
                      </div>
                      <div>
                        <div className="font-bold mb-1 text-md">
                          Link shortener
                        </div>
                        <div className="text-gray-600 text-sm mb-4">
                          Create trackable, shareable short links
                        </div>
                      </div>
                      <div>
                        <div className="font-bold mb-1 text-md">
                          QR code generator
                        </div>
                        <div className="text-gray-600 text-sm mb-4">
                          Turn links into scannable QR codes
                        </div>
                      </div>
                      <div>
                        <div className="font-bold mb-1 text-md">
                          BitTree for every social platform
                        </div>
                        <div className="text-gray-600 text-sm mb-2">
                          Grow and engage your audience everywhere
                        </div>
                      </div>
                    </div>
                    {/* Column 3: Featured */}
                    <div className="col-span-1 p-6 flex flex-col items-center justify-center">
                      <div className="font-bold text-xl mb-2">Featured</div>
                      <img
                        src="/Products.png"
                        alt="Products"
                        className="rounded-xl w-full h-40 object-cover mb-2 bg-blue-700"
                      />
                      <div className="font-semibold text-md mb-2">
                        Join 70M+ using BitTree as their link in bio
                      </div>
                      <div className="text-gray-700 text-sm">
                        One link to share everything you create, curate, and
                        sell across all your socials.
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <Link href="/pricing">
                <li className="hover:cursor-pointer">Pricing</li>
              </Link>

              <li
                className="hover:cursor-pointer"
                role="button"
                aria-haspopup="true"
                aria-expanded={hoveredMenu === "LearnMobile"}
                onMouseEnter={() => {
                  if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    setHideTimeout(null);
                  }
                  setHoveredMenu("LearnMobile");
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setHoveredMenu(null);
                    setHideTimeout(null);
                  }, 300); //0.3 seconds
                  setHideTimeout(timeout);
                }}
              >
                Learn
                {hoveredMenu === "LearnMobile" && (
                  <div className="mt-[5px] ml-[-15px] bg-white rounded-xl shadow-lg w-full min-h-[300px] text-black grid grid-cols-1 md:grid-cols-3 transition-all duration-300 ease-out animate-fade-slide-in  max-h-[500px]  overflow-y-auto">
                    {/* Column 1 */}
                    <ul className="col-span-1 flex flex-col gap-4 pb-6 pl-6 pr-6 pt-3 border-r">
                      <li className="flex items-center gap-3 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer text-md">
                        Resources
                      </li>
                      <li className="flex items-center gap-3 font-semibold hover:bg-gray-100 p-3 rounded cursor-pointer text-md">
                        How to use BitTree
                      </li>
                    </ul>

                    {/* Column 2 */}
                    <div className="col-span-1 p-6 border-r flex flex-col gap-6 justify-start">
                      <div>
                        <div className="font-bold mb-1 text-md">Resources</div>
                      </div>
                      <div className="font-bold mb-1 text-md">
                        Read our blogs
                        <div className="text-gray-600 text-sm mb-4">
                          All the latest tips, tricks, and growth strategies
                        </div>
                      </div>

                      <div>
                        <div className="font-bold mb-1 text-md">
                          Success Stories
                        </div>
                        <div className="text-gray-600 text-sm mb-4">
                          Real people, real results on BitTree
                        </div>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-span-1 p-6 flex flex-col items-center justify-center">
                      <div className="font-bold text-xl mb-2">
                        Learn with BitTree
                      </div>
                      <img
                        src="/Learn.png"
                        alt="Learn"
                        className="rounded-xl w-full h-40 object-cover mb-2 bg-blue-700"
                      />
                      <div className="text-gray-700 text-sm text-start">
                        Create & sell your own mobile course with BitTree.
                        <p className="text-gray-500 text-sm">
                          If you&apos;ve got something to share, you&apos;ve got something
                          to sell. Easily create and share an online course...
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <div className="flex mx-5 flex-col gap-2">
              <button className="bg-gray-300 text-black font-bold p-4 rounded-md hover:cursor-pointer">
                No Login Needed
              </button>
              <button className="bg-gray-900 text-white font-bold p-4 rounded-full hover:cursor-pointer">
                Try up free
              </button>
            </div>
          </div>
        )}
      </nav>
    )
  );
};

export default Navbar;
