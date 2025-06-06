"use client";

import React from "react";
import { MessageCircle, Phone, Share2 } from "lucide-react";

export const FixedContactBar = () => {
  const handleMessengerClick = () => {
    window.open("https://m.me/your-page-id", "_blank");
  };

  const handleZaloClick = () => {
    window.open("https://zalo.me/0965073926", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+84965073926");
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
      {/* Facebook Messenger */}
      <button
        onClick={handleMessengerClick}
        className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-gray-800">Chat Facebook</span>
          <span className="text-xs text-gray-500">(8h-24h)</span>
        </div>
      </button>

      {/* Zalo */}
      <button
        onClick={handleZaloClick}
        className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
          <Share2 className="h-6 w-6 text-white" /> {/* Using Share2 for Zalo icon */}
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-gray-800">Chat Zalo</span>
          <span className="text-xs text-gray-500">(8h-24h)</span>
        </div>
      </button>

      {/* Phone */}
      <button
        onClick={handlePhoneClick}
        className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-full">
          <Phone className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-gray-800">096 5073 926</span>
          <span className="text-xs text-gray-500">(8h-24h)</span>
        </div>
      </button>
    </div>
  );
}; 