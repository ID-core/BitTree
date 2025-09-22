/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from "react";

const faqData = [
  {
    question: "Why do I need a link in bio tool?",
    answer: `Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated — making it so much harder to keep everything up to date.

A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.`,
  },
  {
    question: "Is BitTree the original link in bio tool?",
    answer:
      "Yes, BitTree is the easy tool created to solve this specific problem and has since evolved with more features and tools.",
  },
  {
    question: "Is BitTree safe to use on all of my social media profiles?",
    answer:
      "BitTree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because BitTree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.",
  },
  {
    question: "How can I drive more traffic to and through my BitTree?",
    answer: `Sharing your BitTree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.

Once visitors arrive on your BitTree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your BitTree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!`,
  },
  {
    question: "How many links should I have on my BitTree?",
    answer: `This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your BitTree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.

That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.

You can use features on BitTree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.`,
  },
  {
    question: "Do I need a website to use BitTree?",
    answer:
      "No, you don’t! BitTree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your BitTree.\n\nBitTree is a great way to share your website with your audience, and you can even use it to drive traffic to specific pages on your site.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#880022] py-14 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FCDDFE] mb-10 leading-tight">
        Got questions?
      </h2>

      <div className="max-w-6xl mx-auto space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`bg-[#780017] rounded-2xl px-5 sm:px-6 md:px-8 py-5 sm:py-6 transition-all duration-500 ease-in-out cursor-pointer`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-start gap-3 text-[#e5bdf0]">
                <span className="font-bold sm:font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl">
                  {item.question}
                </span>
                <img
                  src={isOpen ? "/top-icon.svg" : "/down-icon.svg"}
                  alt="Toggle Icon"
                  className={`w-4 sm:w-5 h-4 sm:h-5 transform transition-transform duration-500 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-all ease-in-out duration-500 origin-top ${
                  isOpen
                    ? "scale-y-100 max-h-[1000px] opacity-100 mt-3 sm:mt-4"
                    : "scale-y-0 max-h-0 opacity-0 mt-0"
                }`}
                style={{
                  transformOrigin: "top",
                }}
              >
                <p className="text-[#e5bdf0] whitespace-pre-line font-medium text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
