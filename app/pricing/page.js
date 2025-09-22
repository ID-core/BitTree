"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const pricing = () => {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    if (text.trim()) {
      router.push(`/generate?handle=${text}`);
    }
  };

  return (
    <>
      {/* ------- Sec 1: your growth starts here ------- */}
      <div className="bg-[#e8c0e9] text-black flex flex-col items-center justify-center pb-10 pt-50">
        <h1 className="text-violet-900 font-extrabold text-4xl sm:text-3xl text-center"style={{ fontWeight: 900, fontSize: '45px' }}>
          Your growth starts here.
        </h1>
        <p className="text-violet-800 lg:text-lg sm:text-base md:text-md sm:font-medium w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] text-center mt-4 md:font-bold lg:font-bold">
          Manage your entire online following on BitTree. Schedule your social
          posts, grow your email list, track visitors and get even more
          followers.
        </p>

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-8 mt-10 px-4 sm:px-18 md:px-10 lg:px-40 w-full items-center justify-center">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-[40px] flex flex-col items-center text-center w-full sm:w-[75%] md:w-[30%]">
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/6850e60a6d4a73b11f384a51_image.avif"
              alt="pricing"
              className="w-64 sm:w-72 md:w-80 h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-start mt-6 text-left">
              <h2 className="text-lg font-bold mb-2">
                Stay Consistent on Social
              </h2>
              <p className="text-md font-medium">
                Schedule social posts to go live across platforms and never miss
                a posting day again.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-[40px] flex flex-col items-center text-center w-full sm:w-[75%] md:w-[30%]">
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/6850e6099f6d282d02e7eed3_image-1.avif"
              alt="pricing"
              className="w-64 sm:w-72 md:w-80 h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-start mt-6 text-left">
              <h2 className="text-lg font-bold mb-2">Grow your email list</h2>
              <p className="text-md font-medium">
                Create emails on your BitTree so you can stay connected on and
                off social platforms.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-[40px] flex flex-col items-center text-center w-full sm:w-[75%] md:w-[30%]">
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/6855e97139789b8bea546ad9_image.svg"
              alt="pricing"
              className="w-64 sm:w-72 md:w-80 h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-start mt-6 text-left">
              <h2 className="text-lg font-bold mb-2">
                Use insights to optimize
              </h2>
              <p className="text-md font-medium">
                Get insights on your audience and optimize your BitTree for more
                clicks and engagement.
              </p>
            </div>
          </div>
        </div>
        {/* button to get started for free  */}
        <Link href={"/generate"}>
          <button className="mt-8 bg-violet-800 text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-violet-700 transition duration-300 hover:cursor-pointer">
            Get Started for Free
          </button>
        </Link>
      </div>

      {/* ---------------- Sec 2: Everything you need then some ---------------- */}

      <section className="bg-gray-200 py-16 px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a23] mb-6 w-[40%] mx-auto">
          Everything you need, and then some.
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#eecaf5] rounded-3xl p-6 flex flex-col justify-between h-full">
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666a0ccb99bbb195b6ce68c3_Container.webp"
              alt="Enhanced Customization"
              className="mx-auto mb-6"
            />

            <h3 className="text-xl font-bold text-[#0a0a23] mb-2 text-left">
              Enhanced Customization
            </h3>
            <p className="text-[#1a1a40] mb-4 text-left">
              From video backgrounds to removing the BitTree logo: get even
              more power to make your page pop.
            </p>

            <div className="flex gap-2 justify-center text-black mt-4">
              <span className="border border-black px-3 py-1 rounded-full text-sm">
                Premium
              </span>
              <span className="border border-black px-3 py-1 rounded-full text-sm">
                Pro
              </span>
              <span className="border border-black px-3 py-1 rounded-full text-sm">
                Starter
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#d5f831] rounded-3xl p-6 flex flex-col justify-between h-full">
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666a0ccb1f219bd6f07ddc57_Container-1.webp"
              alt="Extended Analytics"
              className="mx-auto mb-6"
            />

            <h3 className="text-xl font-bold text-[#0a0a23] mb-2 text-left">
              Extended Analytics
            </h3>
            <p className="text-[#1a1a40] mb-4 text-left">
              See what&apos;s performing and download extensive analytics to
              shape your BitTree for success.
            </p>

            <div className="flex gap-2 justify-center text-black mt-4">
              <span className="border border-black px-3 py-1 rounded-full text-sm">
                Premium
              </span>
              <span className="border border-black px-3 py-1 rounded-full text-sm">
                Pro
              </span>
              <span className="border border-black px-3 py-1 rounded-full text-sm">
                Starter
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#750017] rounded-3xl p-6 flex flex-col justify-between h-full text-white">
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666a0ccb51c08621d1942adb_Container-2.webp"
              alt="Email & SMS Integrations"
              className="mx-auto mb-6"
            />

            <h3 className="text-xl font-bold mb-2 flex text-left">
              Email & SMS Integrations
            </h3>
            <p className="mb-4 flex text-left">
              Build an audience you reach anywhere, any time by collecting email
              and SMS details on your BitTree.
            </p>

            <div className="flex gap-2 justify-center mt-4 text-white">
              <span className="border border-white px-3 py-1 rounded-full text-sm">
                Premium
              </span>
              <span className="border border-white px-3 py-1 rounded-full text-sm">
                Pro
              </span>
              <span className="border border-white px-3 py-1 rounded-full text-sm">
                Starter
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Sec 3: recommendations ---------------- */}

      <section className="flex flex-col items-center text-center px-4 py-16 bg-white">
        <div className="relative  mb-8">
          {/* Image */}
          <img
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666a11a37740626dea94af9d_pricing%20quote%20img.webp"
            alt="Testimonial"
            className="relative w-200 h-auto object-cover "
          />
        </div>

        {/* Testimonial Quote */}
        <p className="text-2xl md:text-3xl font-extrabold max-w-3xl text-[#0a0a23] mb-4">
          “I&apos;d recommend BitTree to other creators! It&apos;s very powerful
          for getting more eyes on your content.”
        </p>

        {/* Person Info */}
        <p className="text-sm text-[#5c5c7b]">
          Catie T (Millennial Money Honey),
          <br />
          Designer, Art Director and Financial Independence Educator
        </p>
      </section>

      {/* ----------- sec 4: agency or enterprise ----------- */}

      <section className="bg-[#eec7f5] px-6 py-16">
        <div className="w-[60%] max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-start gap-10">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2
              className="text-[#0f172a] mb-6"
              style={{ fontSize: "53px", fontWeight: 800 }}
            >
              Agency or Enterprise
            </h2>
            <p className="text-lg text-[#1f2937] mb-6 font-medium text-md">
              Big teams, big goals. Connect with us and we&apos;ll build a
              custom plan to get you there.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/67d9818372ef48af8d6e415e_Group%2048097433-1.avif"
              alt="Visual representation"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ----------- sec 5: footer ----------- */}
      <section className="bg-violet-600 text-pink-300 flex flex-col items-center justify-center pt-30 pb-50 flex items-center ">
        <div className="w-[50%] mx-auto">
          <h1 className=" font-extrabold sm:text-3xl text-center"
          style={{ fontSize: "50px" }}>
            Jumpstart your corner of the internet today
          </h1>
          <div className="boxes flex flex-col md:flex-row gap-4 mt-10 mx-auto max-w-xl items-stretch ">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Enter your handle"
              className="box1 bg-white text-black rounded-md py-4 px-3 w-3/5"
            />
            <button
              onClick={createTree}
              className="box2 bg-[#d5f831] text-black font-bold py-4 px-2 rounded-full hover:cursor-pointer w-2/5"
            >
              Create your BitTree
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default pricing;
