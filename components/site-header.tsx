import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/asset/images/logo-Vivu.png";
import coverImage from "@/app/asset/images/dia-danh-noi-tieng.jpg";
import foodCover from "@/app/asset/images/am-thuc-viet-nam-all.jpg";
import cultureCover from "@/app/asset/images/van-hoa-3-mien.png";


import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src={Logo}
            priority
            alt="ViVu Viet Nam Logo"
            width={84}
            height={84}
            className="rounded-full object-cover hidden sm:inline-block"
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export { SiteHeader };
