"use client";

import React from "react";
import FloatingCard from "./FloatingCard";
import { Receipt, Gavel, CheckSquare, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f4f6fb] dark:bg-[#0f0f14] overflow-hidden">

      <ThemeToggle />

      {/* LEFT CONTENT */}
      <div className="absolute top-10 left-[280px] max-w-2xl">
        <h1 className="text-[74px] leading-[1.05] font-medium text-[#6d6f8c] dark:text-gray-300">
          A single platform to
          <br />
          <span className="font-semibold text-[#4f46e5] dark:text-indigo-400">
            manage every part
          </span>{" "}
          of your{" "}
          <span className="font-semibold text-[#6d6f8c] dark:text-gray-300">
            legal work
          </span>
        </h1>

        <p className="mt-10 text-[22px] text-[#4f46e5] dark:text-indigo-300 max-w-xl leading-relaxed">
          Track matters, coordinate schedules, manage<br/> clients,
          centralize documents, and handle <br/> communication
          – all in one system.
        </p>
      </div>

      {/* LEFT BACKGROUND PILLS */}
      <div className="absolute w-[700px] h-[120px] bg-indigo-200 opacity-30 rounded-full bottom-[200px] left-[-320px]"></div>
      <div className="absolute w-[700px] h-[120px] bg-indigo-200 opacity-30 rounded-full bottom-[360px] left-[-350px]"></div>
      <div className="absolute w-[500px] h-[120px] bg-indigo-200 opacity-30 rounded-full bottom-[520px] left-[-300px] -rotate-12"></div>

      {/* RIGHT SIDE FLOATING AREA */}
      <div className="absolute right-0 top-0 w-[55%] h-full">

        {/* RIGHT BACKGROUND PILLS */}
        <div className="absolute w-[700px] h-[120px] bg-indigo-200 opacity-30 rounded-full top-40 right-[-220px]"></div>
        <div className="absolute w-[700px] h-[120px] bg-indigo-200 opacity-30 rounded-full top-[320px] right-[-180px]"></div>
        <div className="absolute w-[700px] h-[120px] bg-indigo-200 opacity-30 rounded-full bottom-[260px] right-[-220px]"></div>

        {/* BILLING */}
        <FloatingCard
          label="Billing"
          icon={Receipt}
          color="bg-gradient-to-r from-blue-500 to-blue-700 w-[350px]"
          rotation={15}
          className="top-74 left-[120px]"
          delay="0s"
        />

        {/* MATTERS */}
        <FloatingCard
          label="Matters"
          icon={Gavel}
          color="bg-orange-500"
          rotation={-18}
          className="top-[520px] left-[-250px] w-[350px]"
          delay="1s"
        />

        {/* TASKS */}
        <FloatingCard
          label="Tasks"
          icon={CheckSquare}
          color="bg-[#3b2c5a]"
          rotation={0}
          className="top-[650px] left-[-120px] w-[350px] text-yellow-600"
          delay="0.6s"
        />

        {/* DOCUMENTS */}
        <FloatingCard
          label="Documents"
          icon={FileText}
          color="bg-[#2f2650]"
          rotation={-8}
          className="bottom-[100px] right-[500px] w-[350px] text-yellow-600"
          delay="1.3s"
        />

        {/* PORTAL */}
        <FloatingCard
          variant="portal"
          rotation={5}
          color="bg-[#c7cafb] dark:bg-[#2a2a3a]"
          className="top-[480px] right-[500px] px-14 py-6"
          delay="0.8s"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1e1e24] 
                flex items-center justify-center text-2xl">
  👨
            </div>
            <div>
              <p className="font-semibold text-sm text-black dark:text-white">
                John Doe - Portal
              </p>
              <p className="text-xs opacity-70 dark:text-gray-300">
                Hey! Could you review MAT-2233?
              </p>
            </div>
          </div>
        </FloatingCard>

      </div>
    </section>
  );
}