"use client";

import React from "react";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenu } from "./ClientOnlyNavigationMenu";
import Image from "next/image";
import Logo from "@/app/asset/images/logo-Vivu.png";
import coverImage from "@/app/asset/images/dia-danh-noi-tieng.jpg";
import foodCover from "@/app/asset/images/am-thuc-viet-nam-all.jpg";
import cultureCover from "@/app/asset/images/van-hoa-3-mien.png";
export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src={Logo}
            alt="ViVu Viet Nam Logo"
            width={84}
            height={84}
            className="rounded-full object-cover hidden  sm:inline-block"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Trang chủ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Địa điểm du lịch</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                          href="/destinations"
                        >
                          <div className="relative mb-4 h-32 w-full overflow-hidden rounded-md">
                            <Image
                              src={coverImage}
                              alt="Tất cả địa điểm"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="mb-2 text-lg font-medium">
                            Tất cả địa điểm
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Khám phá tất cả các địa điểm du lịch nổi tiếng tại
                            Việt Nam
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/destinations?category=spiritual"
                      title="Du lịch tâm linh"
                    >
                      Các địa điểm tâm linh nổi tiếng
                    </ListItem>
                    <ListItem
                      href="/destinations?category=beach"
                      title="Du lịch biển"
                    >
                      Những bãi biển đẹp nhất Việt Nam
                    </ListItem>
                    <ListItem
                      href="/destinations?category=natural"
                      title="Công trình tự nhiên"
                    >
                      Các kỳ quan thiên nhiên tuyệt đẹp
                    </ListItem>
                    <ListItem
                      href="/destinations?category=nhanTao"
                      title="Công trình nhân tạo"
                    >
                      Các công trình kiến trúc nổi tiếng
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Ẩm thực</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                          href="/cuisine"
                        >
                          <div className="relative mb-4 h-32 w-full overflow-hidden rounded-md">
                            <Image
                              src={foodCover}
                              alt="Tất cả món ăn"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="mb-2 text-lg font-medium">
                            Tất cả món ăn
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Khám phá nền ẩm thực phong phú của Việt Nam
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/cuisine?region=north"
                      title="Ẩm thực miền Bắc"
                    >
                      Những món ăn đặc trưng miền Bắc
                    </ListItem>
                    <ListItem
                      href="/cuisine?region=central"
                      title="Ẩm thực miền Trung"
                    >
                      Những món ăn đặc trưng miền Trung
                    </ListItem>
                    <ListItem
                      href="/cuisine?region=south"
                      title="Ẩm thực miền Nam"
                    >
                      Những món ăn đặc trưng miền Nam
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Văn hóa</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                          href="/culture"
                        >
                          <div className="relative mb-4 h-32 w-full overflow-hidden rounded-md">
                            <Image
                              src={cultureCover}
                              alt="Văn hóa Việt Nam"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="mb-2 text-lg font-medium">
                            Văn hóa Việt Nam
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Khám phá nét đẹp văn hóa đặc sắc của ba miền Bắc -
                            Trung - Nam
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/culture/north" title="Văn hóa miền Bắc">
                      Nét đẹp văn hóa đặc sắc của vùng đất ngàn năm văn hiến
                    </ListItem>
                    <ListItem
                      href="/culture/central"
                      title="Văn hóa miền Trung"
                    >
                      Nét đẹp văn hóa đặc sắc của vùng đất cố đô và di sản
                    </ListItem>
                    <ListItem href="/culture/south" title="Văn hóa miền Nam">
                      Nét đẹp văn hóa đa dạng, phóng khoáng của vùng đất phương
                      Nam
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Về chúng tôi
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Liên hệ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button>Đặt tour</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
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
                    href="/culture/north"
                    className="text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    Văn hóa miền Bắc
                  </Link>
                  <Link
                    href="/culture/central"
                    className="text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    Văn hóa miền Trung
                  </Link>
                  <Link
                    href="/culture/south"
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
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
