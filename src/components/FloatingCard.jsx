"use client";
import React from "react";

export default function FloatingCard({
  label,
  icon: Icon,
  color,
  rotation = 0,
  className = "",
  variant = "default",
  children,
  delay = "0s",
}) {
  return (
    <div
      className={`
        absolute
        rounded-full
        px-20 py-7
        flex items-center gap-4
        font-semibold text-2xl
        shadow-[0_30px_60px_rgba(0,0,0,0.15)]
        float
        ${color}
        ${className}
      `}
      style={{
        "--rotate": `${rotation}deg`,
        animationDelay: delay,
      }}
    >
      {variant === "default" && (
        <>
          {Icon && <Icon size={28} />}
            <span className={label === "Documents" || label === "Tasks" ? "text-yellow-600" : "text-white"}>
            {label}
            </span>
        </>
      )}

      {variant === "portal" && (
        <div className="flex items-center gap-4 text-black">
          {children}
        </div>
      )}
    </div>
  );
}