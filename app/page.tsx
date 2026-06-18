"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            DIGIT Roles Designer Portal
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Compare the two implementations of the Roles Designer dashboard side by side.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {/* Link to Digit Route */}
          <Link
            href="/digit"
            className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all flex flex-col text-left"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="3" y="3" width="7" height="9" />
                <rect x="14" y="3" width="7" height="5" />
                <rect x="14" y="12" width="7" height="9" />
                <rect x="3" y="16" width="7" height="5" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
              Official DIGIT UI
            </h2>
            <p className="mt-2 text-sm text-slate-500 line-height-relaxed flex-grow">
              Roles Designer built using standard components imported from <code>@egovernments/digit-ui-components</code>.
            </p>
            <div className="mt-6 flex items-center text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
              Open Route
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>

          {/* Link to Custom Route */}
          <Link
            href="/custom"
            className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-600 transition-all flex flex-col text-left"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
              Custom Scratch UI
            </h2>
            <p className="mt-2 text-sm text-slate-500 line-height-relaxed flex-grow">
              Roles Designer built entirely from scratch utilizing clean CSS classes designed to match the DIGIT design spec.
            </p>
            <div className="mt-6 flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-800">
              Open Route
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
