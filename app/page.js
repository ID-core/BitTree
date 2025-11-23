/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import TiltImage from "./TiltImage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HandleSearch from "@/components/HandleSearch";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const isEmpty = text.trim() === "";

  const createTree = () => {
    if (text.trim()) {
      router.push(`/generate?handle=${text}`);
    }
  };

  return (
    <main>
      {/* ------------ Section 1 ------------ */}
      <section className="shorter_dp bg-[#254f1a] min-h-[70vh] grid pt-[32%] grid-cols-1 md:grid-cols-2 px-4 md:pt-20 lg:pt-15 pb-10 gap-8 text-white sm:pt-[20%] ">
        <div className="lg:pt-12 sm:pt-10 flex flex-col justify-start items-start sm:px-18 md:px-24 lg:px-32">
          <h1 className="font-extrabold text-4xl sm:text-6xl md:text-5xl lg:text-6xl md:pt-12 lg:text-7xl text-[rgb(210,232,35)] leading-tight">
            <p>Everything you are in one, simple link in bio.</p>
          </h1>

          <p className="mt-6 font-medium text-base sm:text-lg md:text-lg text-white max-w-xl">
            Join 70M+ people using BitTree for their link in bio. One link to
            help you share everything you create, curate, and sell from your
            Instagram, TikTok, Twitter, YouTube, and other social media
            profiles.
          </p>

          {/* Responsive form layout */}
          <div className="boxes flex flex-col md:flex-row gap-4 mt-8 w-full max-w-xl items-stretch">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Enter your handle"
              className="box1 bg-white text-black rounded-md p-3 w-full"
            />
            <button
              onClick={createTree}
              disabled={isEmpty}
              className={`box2 bg-pink-300 text-black font-bold py-3 px-5 rounded-full w-full ${
                isEmpty ? "cursor-not-allowed opacity-80" : "hover:cursor-pointer"
              }`}
            >
              Create BitTree
            </button>
          </div>
          <div className="mt-4 w-full">
            <HandleSearch />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <TiltImage />
        </div>
      </section>

      {/* ------------ Section 2 ------------ */}
      <section className="bg-[#e8c0e9] min-h-[70vh] grid grid-cols-1 md:grid-cols-2 items-center px-6 py-12 gap-8">
        <div className="flex justify-center">
          <video
            src="/homepage_media2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-lg object-contain mix-blend-darken"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-purple-900">
            <p>Create and customize</p>
            <p>your BitTree in minutes</p>
          </h2>

          <p className="mt-6 font-medium text-base sm:text-lg text-black">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>

          <button className="bg-purple-900 text-white font-bold py-3 px-5 rounded-full mt-8 w-fit cursor-pointer hover:scale-105 transition-transform">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* ------------ Section 3 ------------ */}
      <section className="bg-[#780017] text-[#e5bdf0] min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-10 md:gap-20">
  {/* Left Text Section */}
  <div className="max-w-2xl w-full text-center md:text-left">
    <h1 className="text-3xl lg:text-5xl sm:text-4xl md:text-4xl font-extrabold leading-tight mb-6">
      Share your BitTree from your Instagram, TikTok,
      <br className="hidden sm:block" />
      Twitter and other bios
    </h1>

    <p className="text-white text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto md:mx-0">
      Add your unique BitTree URL to all the platforms and places you find
      your audience. Then use your QR code to drive your offline traffic online.
    </p>

    <Link href="/generate">
      <button className="bg-[#e5bdf0] text-[#780017] text-base sm:text-lg font-semibold cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform">
        Get started for free
      </button>
    </Link>
  </div>

  {/* Right Section */}
  <div className="w-full max-w-md">
    <video
      src="/homeSec_social.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto object-contain"
    ></video>
  </div>
</section>

{/* ------------ Section 4: Images ------------ */}

<section className="bg-[#F8F8F6] px-4 py-20 flex flex-col items-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full mb-16">
    {/* Left Column - Card 1 & Card 3 */}
    <div className="flex flex-col gap-6">
      {/* Card 1 */}
      <div className="bg-[#F4C8F4] p-4 rounded-xl h-full lg:h-1/2">
        <img
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680c13b834d3994a796896bd_all%20your%20things.avif"
          alt="Share Content"
          className="w-full rounded-lg mb-10"
        />
        <p className="text-black text-2xl font-semibold">
          Share your content in limitless ways on your BitTree.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#E4FF2A] p-4 rounded-xl h-full lg:h-1/2">
        <img
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680c16a391a7e027f3fbda59_products.avif"
          alt="Sell Products"
          className="w-full rounded-lg mb-8"
        />
        <p className="text-black text-2xl font-semibold">
          Sell products and collect payments. It&apos;s monetization made simple.
        </p>
      </div>
    </div>

    {/* Right Column - Card 2 (Tall) */}
    <div className="bg-[#020295] p-4 rounded-xl text-white flex flex-col justify-between h-full">
      <img
        src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680c13b83b832c35450e92d6_Group%2048096668.avif"
        alt="Grow Audience"
        className="w-full rounded-lg mb-4"
      />
      <p className=" text-2xl font-semibold">
        Grow, own and engage your audience by unifying them in one place.
      </p>
    </div>
  </div>

  {/* Centered Text */}
  <div className="text-center max-w-xl px-4">
    <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 mt-13" style={{ fontSize: "41px" }}>
      The fast, friendly and powerful link in bio tool.
    </h2>
    <Link href="/pricing">
    <button className="bg-[#f0c4ec] text-black font-bold py-5 px-15 rounded-full hover:bg-[#e09cdc] transition hover:cursor-pointer">
      Explore all plans
    </button>
    </Link>
  </div>
</section>

{/* ---------------- Sec 5: featured by ---------------- */}

      <section className="flex flex-col items-center text-center px-4 py-16 bg-[#F8F8F6]">
        <div className="relative  mb-8">
          {/* Image */}
          <img
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66864533566fcb42ef955aad_Testimonial-Riley-Lemon.webp"
            alt="Testimonial"
            className="relative w-200 h-auto object-cover "
          />
        </div>

        {/* Testimonial Quote */}
        <p className="text-2xl md:text-3xl font-extrabold max-w-3xl text-[#0a0a23] mb-4">
          BitTree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”
        </p>

        {/* Person Info */}
        <p className="text-sm text-[#5c5c7b]">
          Riley Lemon,
          <br />
          Youtuber, Content Cretor
        </p>
      </section>


       {/* ----------- sec 6: Got Ques ----------- */}
       <section className="bg-[#780017] text-[#e5bdf0]">
        <FAQSection />
       </section>


 {/* ----------- sec 7: last section ----------- */}
      <section className="bg-violet-600 text-pink-300 flex flex-col items-center justify-center pt-30 flex items-center ">
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
              disabled={isEmpty}
              className={`box2 bg-[#d5f831] text-black font-bold py-4 px-2 rounded-full w-2/5 ${
                isEmpty ? "cursor-not-allowed opacity-80" : "hover:cursor-pointer"
              }`}
            >
              Create your BitTree
            </button>
          </div>
          <div className="mt-6">
            <HandleSearch
              inputClass={`box1 bg-white text-black rounded-md py-4 px-3 w-3/5`}
              buttonClass={`box2 bg-[#d5f831] text-black font-bold py-4 px-2 rounded-full w-2/5`}
              placeholderText="Enter your handle"
            />
          </div>
        </div>
              <Footer/>
      </section>

    </main>
  );
}