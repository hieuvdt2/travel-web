"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-1 items-center justify-end md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4 pt-6">
            <Link
              href="/"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/destinations"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Địa điểm du lịch
            </Link>
            <Link
              href="/cuisine"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ẩm thực
            </Link>
            <div className="flex flex-col space-y-2 pl-4">
              <Link
                href="/culture/mienBac"
                className="text-base"
                onClick={() => setIsOpen(false)}
              >
                Văn hóa miền Bắc
              </Link>
              <Link
                href="/culture/mienTrung"
                className="text-base"
                onClick={() => setIsOpen(false)}
              >
                Văn hóa miền Trung
              </Link>
              <Link
                href="/culture/mienNam"
                className="text-base"
                onClick={() => setIsOpen(false)}
              >
                Văn hóa miền Nam
              </Link>
            </div>
            <Link
              href="/about"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Về chúng tôi
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Liên hệ
            </Link>
            <Button className="mt-4" onClick={() => setIsOpen(false)}>
              Đặt tour
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}; 