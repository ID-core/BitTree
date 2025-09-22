"use client";
import React, { useState, Suspense } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) => (i === index ? { link, linktext } : item))
    );
  };

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  const submitLinks = async () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links,
      handle,
      pic,
      desc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const r = await fetch("https://bittree-psi.vercel.app/api/add", requestOptions);
      const result = await r.json();

      if (result.success) {
        toast.success(result.message);
        setLinks([{ link: "", linktext: "" }]);
        setpic("");
        setdesc("");
        sethandle("");
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Redirect to the generated tree page
        setTimeout(() => {
          router.push(`/${handle}`);
        }, 1200);


      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#e8c0e9] pt-[10vh] grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 px-6 pb-8 text-black items-center">
      {/* Left Column */}
      <div className="flex flex-col justify-center items-center h-full sm:pt-12 ">
        <div className="w-full max-w-2xl p-8 lg:pl-12 lg:pr-12 lg:pb-8 lg:mt-13 overflow-y-auto max-h-[80vh] form-scrollbar">
          <h1 className="font-extrabold text-4xl lg:text-4xl text-left underline pb-5 text-center">
            Create your BitTree
          </h1>

          {/* Step 1 */}
          <h2 className="font-bold py-2 text-lg lg:text-xl">
            Step 1: Claim your handle
          </h2>
          <input
            value={handle || ""}
            onChange={(e) => sethandle(e.target.value)}
            type="text"
            placeholder="Choose a handle"
            className="w-full bg-white rounded-full px-5 py-3 text-black border border-pink-200 focus:border-pink-400 outline-none mb-4 text-base lg:text-lg"
          />

          {/* Step 2 */}
          <h2 className="font-bold py-2 mt-4 text-lg lg:text-xl">
            Step 2: Add Links
          </h2>
          {links.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-3 mb-4">
              <input
                value={item.linktext || ""}
                onChange={(e) => handleChange(index, item.link, e.target.value)}
                type="text"
                placeholder="Enter Link Name"
                className="flex-1 bg-white rounded-full px-5 py-3 text-black border border-pink-200 focus:border-pink-400 outline-none text-base lg:text-lg"
              />
              <input
                value={item.link || ""}
                onChange={(e) =>
                  handleChange(index, e.target.value, item.linktext)
                }
                type="text"
                placeholder="Enter Link"
                className="flex-1 bg-white rounded-full px-5 py-3 text-black border border-pink-200 focus:border-pink-400 outline-none text-base lg:text-lg"
              />
            </div>
          ))}
          <button
            onClick={addLink}
            className="font-bold bg-black text-white py-3 rounded-full px-6 mt-1 hover:bg-pink-700 transition w-full lg:w-auto"
          >
            + Add Link
          </button>

          {/* Step 3 */}
          <h2 className="font-bold py-2 mt-6 text-lg lg:text-xl">
            Step 3: Add Picture and Description
          </h2>
          <input
            value={pic || ""}
            onChange={(e) => setpic(e.target.value)}
            type="text"
            placeholder="Link to your Picture"
            className="w-full bg-white rounded-full px-5 py-3 text-black border border-pink-200 focus:border-pink-400 outline-none mb-3 text-base lg:text-lg"
          />
          <input
            value={desc || ""}
            onChange={(e) => setdesc(e.target.value)}
            type="text"
            placeholder="Enter your description"
            className="w-full bg-white rounded-full px-5 py-3 text-black border border-pink-200 focus:border-pink-400 outline-none mb-2 text-base lg:text-lg"
          />

          <button
            disabled={
              loading ||
              !pic.trim() ||
              !handle?.trim() ||
              !desc.trim() ||
              !links[0].linktext?.trim() ||
              !links[0].link?.trim()
            }
            onClick={submitLinks}
            className={`mt-6 font-bold ${
              loading ||
              !pic.trim() ||
              !handle?.trim() ||
              !desc.trim() ||
              !links[0].linktext?.trim() ||
              !links[0].link?.trim()
                ? "bg-black/40 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-pink-700"
            } py-3 rounded-full px-6 transition w-full lg:w-auto text-lg`}
          >
            {loading ? "Creating..." : "Create your BitTree"}
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center items-center h-full lg:pr-5 lg:pt-18">
        <div className="relative w-full max-w-2xl h-[40vh] sm:h-[50vh] lg:h-[70vh] flex items-center justify-center sm:mx-auto">
          <Image
            src="/generate.png"
            alt="Generate image"
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default function GeneratePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Generate />
    </Suspense>
  );
}
