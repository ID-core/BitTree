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
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
      <Link href="/" className="inline-flex items-center p-2 bg-white/90 hover:bg-white rounded-md shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10.707 1.707a1 1 0 00-1.414 0L2 9v8a1 1 0 001 1h5a1 1 0 001-1V13h2v4a1 1 0 001 1h5a1 1 0 001-1V9l-7.293-7.293z" />
        </svg>
        <span className="sr-only">Home</span>
      </Link>

      <button
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center p-2 bg-white/90 hover:bg-white rounded-md shadow"
        aria-expanded={open}
        aria-label="Share"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v.01M12 12v.01M20 12v.01M4 12a8 8 0 0116 0" />
        </svg>
        <span className="sr-only">Share</span>
      </button>

      {open && (
        <div className="ml-2 bg-white/95 shadow-lg rounded-md p-3 w-80 max-w-xs">
          <div className="flex items-start justify-between mb-2">
            <div className="text-sm font-medium">Share</div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-gray-500 hover:text-gray-800">×</button>
          </div>

          <label className="block text-xs text-gray-600 mb-1">Link</label>
          <div className="flex gap-2">
            <input readOnly value={url} className="flex-1 px-2 py-1 rounded border text-sm text-gray-800" />
            <button onClick={handleCopy} className="px-3 py-1 bg-[#34d399] text-black rounded text-sm">
              Copy
            </button>
          </div>
          {copied && <div className="mt-2 text-sm text-green-600">Copied to clipboard</div>}
        </div>
      )}
    </div>
  );
}
