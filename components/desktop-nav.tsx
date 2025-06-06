"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenu } from "./ClientOnlyNavigationMenu";
import { ListItem } from "./list-item";
import { ContactButton } from "./contact-button";
import coverImage from "@/app/asset/images/dia-danh-noi-tieng.jpg";
import foodCover from "@/app/asset/images/am-thuc-viet-nam-all.jpg";
import cultureCover from "@/app/asset/images/van-hoa-3-mien.png";

export const DesktopNav = () => {
  return (
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
                        Khám phá tất cả các địa điểm du lịch nổi tiếng tại Việt Nam
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/destinations?category=tamLinh"
                  title="Du lịch tâm linh"
                >
                  Các địa điểm tâm linh nổi tiếng
                </ListItem>
                <ListItem
                  href="/destinations?category=bien"
                  title="Du lịch biển"
                >
                  Những bãi biển đẹp nhất Việt Nam
                </ListItem>
                <ListItem
                  href="/destinations?category=tuNhien"
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
                  href="/cuisine?region=mienBac"
                  title="Ẩm thực miền Bắc"
                >
                  Những món ăn đặc trưng miền Bắc
                </ListItem>
                <ListItem
                  href="/cuisine?region=mienTrung"
                  title="Ẩm thực miền Trung"
                >
                  Những món ăn đặc trưng miền Trung
                </ListItem>
                <ListItem
                  href="/cuisine?region=mienNam"
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
                        Khám phá nét đẹp văn hóa đặc sắc của ba miền Bắc - Trung - Nam
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/culture/mienBac" title="Văn hóa miền Bắc">
                  Nét đẹp văn hóa đặc sắc của vùng đất ngàn năm văn hiến
                </ListItem>
                <ListItem
                  href="/culture/mienTrung"
                  title="Văn hóa miền Trung"
                >
                  Nét đẹp văn hóa đặc sắc của vùng đất cố đô và di sản
                </ListItem>
                <ListItem href="/culture/mienNam" title="Văn hóa miền Nam">
                  Nét đẹp văn hóa đa dạng, phóng khoáng của vùng đất phương Nam
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

      {/* <div className="flex items-center space-x-4">
        <ContactButton />
      </div> */}
    </div>
  );
}; 