/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ShareHeader() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setUrl(window.location.href);
  }, [open]);

  // lock page scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="fixed top-4 right-4 md:top-[30px] md:right-[40px] lg:top-[30px] lg:right-[40px] z-50 flex items-center gap-3">
      <Link
        href="/"
        className="inline-flex items-center p-2 bg-white/90 hover:bg-white rounded-md shadow hover:scale-105 transition-transform duration-200"
        aria-label="Home"
      >
        <img
          src="/home_svg.svg"
          alt="Home"
          className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
        />
        <span className="sr-only">Home</span>
      </Link>

      <button
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center p-2 bg-white/90 hover:bg-white rounded-md shadow hover:scale-105 transition-transform duration-200"
        aria-label="Share"
        aria-expanded={open}
      >
        <img
          src="/share-svg.svg"
          alt="Share"
          className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
        />
        <span className="sr-only">Share</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white/95 shadow-lg rounded-md p-6 w-11/12 md:w-4/5 lg:w-3/4 max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-lg font-bold text-black">Share</div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-black hover:text-gray-800 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <label className="block text-sm text-gray-600 mb-2">Link</label>
            <div className="flex gap-3 flex-col sm:flex-col md:flex-row lg:flex-row">
              <input
                readOnly
                value={url}
                className="flex-1 px-3 py-2 rounded border text-sm text-gray-800"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-[#34d399] text-black rounded text-sm"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            {copied && (
              <div className="mt-3 text-sm text-green-600">Copied to clipboard</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
