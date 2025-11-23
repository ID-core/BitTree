/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "@/app/globals.css";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import HandleSearch from "@/components/HandleSearch";

export default async function Page({ params }) {
  const handle = params.handle;
  const client = await clientPromise;

  const db = client.db("BitTree");
  const collection = db.collection("links");

  //if handle is already claimed
  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return notFound();
  }

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center overflow-scroll"
        style={{ backgroundImage: `url('/username_wallpaper.jpg')` }}
      >
        <div className="text-black min-h-screen flex justify-center items-start py-10">
          {item && (
            <div className="data flex flex-col mt-10 items-center max-w-md w-full px-6">
              <div className="w-full mb-6">
                <HandleSearch />
              </div>
              <img
                src={item.pic}
                alt="main pic"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 animate-fadeInUp"
              />
              <span className="font-extrabold text-2xl ">@{item.handle}</span>
              <span className="desc w-80 test-center mt-2 text-gray-700">
                {item.desc}
              </span>

              <div className="links w-full mt-6 space-y-5">
                {item.links.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-md px-6 py-4 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 animate-fadeInUp"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-400 font-semibold text-center"
                    >
                      {item.linktext}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
