"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageCircle, Phone, Share2 } from "lucide-react";

export const ContactButton = () => {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
          Liên hệ
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2">
        <DropdownMenuItem
          className="flex items-center gap-2 p-3 cursor-pointer hover:bg-blue-50 rounded-md transition-colors"
          onClick={handleMessengerClick}
        >
          <MessageCircle className="h-5 w-5 text-blue-500" />
          <div className="flex flex-col">
            <span className="font-medium">Messenger</span>
            <span className="text-sm text-gray-500">Chat trực tiếp</span>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem
          className="flex items-center gap-2 p-3 cursor-pointer hover:bg-blue-50 rounded-md transition-colors"
          onClick={handleZaloClick}
        >
          <Share2 className="h-5 w-5 text-blue-500" />
          <div className="flex flex-col">
            <span className="font-medium">Zalo</span>
            <span className="text-sm text-gray-500">Kết nối Zalo</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-2 p-3 cursor-pointer hover:bg-blue-50 rounded-md transition-colors"
          onClick={handlePhoneClick}
        >
          <Phone className="h-5 w-5 text-blue-500" />
          <div className="flex flex-col">
            <span className="font-medium">Gọi điện</span>
            <span className="text-sm text-gray-500">096 5073 926</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}; 