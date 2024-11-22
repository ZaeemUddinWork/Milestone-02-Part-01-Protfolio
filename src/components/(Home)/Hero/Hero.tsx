"use client";
import React, { useState } from "react";

const HeroSection = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoEnded(true); 
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        src="/images/bg_video.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div
        className="relative z-10"
        style={{
          opacity: isVideoEnded ? 1 : 0, 
          transition: "opacity 1s ease-in-out",
        }}
      >
        <div className="text-center bg-[rgba(255,255,255,0.5)] w-full h-[100vh] p-10 flex flex-col justify-center">
          <h1 className="text-[#333333] text-8xl font-bold font-serif">
            Welcome to WeboraTech
          </h1>
          <p className="text-[#4e4e4e] text-4xl font-semibold mt-20">
            Here We Provide All Kinds of Computer Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
