import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-medium mb-4">Khám Phá Việt Nam</h3>
          <p className="text-muted-foreground">
            Khám phá vẻ đẹp tuyệt vời của Việt Nam qua những địa điểm du lịch nổi tiếng và ẩm thực đặc sắc.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="text-muted-foreground hover:text-foreground">
                Địa điểm du lịch
              </Link>
            </li>
            <li>
              <Link href="/cuisine" className="text-muted-foreground hover:text-foreground">
                Ẩm thực
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Danh mục</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/destinations?category=tamLinh" className="text-muted-foreground hover:text-foreground">
                Du lịch tâm linh
              </Link>
            </li>
            <li>
              <Link href="/destinations?category=bien" className="text-muted-foreground hover:text-foreground">
                Du lịch biển
              </Link>
            </li>
            <li>
              <Link href="/destinations?category=tuNhien" className="text-muted-foreground hover:text-foreground">
                Công trình tự nhiên
              </Link>
            </li>
            <li>
              <Link href="/destinations?category=nhanTao" className="text-muted-foreground hover:text-foreground">
                Công trình nhân tạo
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Liên hệ</h3>
          <address className="not-italic text-muted-foreground">
            <p>88 Dịch Vọng, Quận Cầu Giấy</p>
            <p>Thành phố Hà Nội, Việt Nam</p>
            <p className="mt-2">Email: vivu@khamphadulich.vn</p>
            <p>Điện thoại: +84 0965073926</p>
          </address>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Khám Phá Việt Nam. Tất cả các quyền được bảo lưu.
        </p>
      </div>
    </footer>
  )
}
