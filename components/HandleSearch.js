"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HandleSearch({ 
  placeholderText = "Search your handle", 
  inputClass = "bg-white text-black rounded-md p-3 w-full", 
  buttonClass = "bg-[#34d399] text-black font-bold rounded-full" 
}) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState(placeholderText);
  const [isPlaceholderError, setIsPlaceholderError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const searchHandle = async () => {
    const handle = text.trim();
    if (!handle) return;
    setIsSearching(true);
    try {
      const res = await fetch(`/api/check?handle=${encodeURIComponent(handle)}`);
      if (!res.ok) {
        setPlaceholder("Error checking handle");
        setIsPlaceholderError(false);
        setText("");
        setTimeout(() => setPlaceholder(placeholderText), 2500);
        setIsSearching(false);
        return;
      }
      const data = await res.json();
      if (data.exists) {
        router.push(`/${handle}`);
      } else {
        setText("");
        setPlaceholder("Handle not exists");
        setIsPlaceholderError(true);
        setTimeout(() => {
          setPlaceholder(placeholderText);
          setIsPlaceholderError(false);
        }, 3000);
      }
    } catch (err) {
      setPlaceholder("Network error");
      setIsPlaceholderError(false);
      setTimeout(() => setPlaceholder(placeholderText), 2500);
    } finally {
      setIsSearching(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchHandle();
    }
  };

  return (
    <div className="boxes flex flex-col md:flex-row gap-4 w-full max-w-xl items-stretch">
      <input
        value={text}
        onChange={(e) => { setText(e.target.value); setIsPlaceholderError(false); }}
        onKeyDown={onKeyDown}
        type="text"
        placeholder={placeholder}
        className={`${inputClass} ${isPlaceholderError ? 'placeholder:text-red-500 placeholder:italic placeholder:text-sm' : ''}`}
      />
      <button
        onClick={searchHandle}
        disabled={isSearching}
        className={`${buttonClass} py-3 px-5 w-full ${isSearching ? "opacity-70 cursor-wait" : "hover:scale-105 cursor-pointer"} transition-transform duration-200`}
      >
        {isSearching ? "Searching..." : "Search"}
      </button>
    </div>
  );
}