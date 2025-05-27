"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Contact from '@/app/asset/images/lien-he.jpg'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="h-[40vh] bg-auto bg-center"  style={{ backgroundImage: `url(${Contact.src})` }} />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">
              Chúng tôi luôn sẵn sàng hỗ trợ và lắng nghe ý kiến của bạn
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Thông Tin Liên Hệ</h2>
              <p className="text-muted-foreground mb-8">
                Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào về dịch vụ du lịch, đặt tour hoặc cần tư vấn cho
                chuyến đi của mình. Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Địa chỉ</h3>
                    <p className="text-muted-foreground">88 Dịch Vọng, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Điện thoại</h3>
                    <p className="text-muted-foreground">+84 0965073926</p>
                    <p className="text-muted-foreground">+84 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">vivu@khamphadulich.vn</p>
                    <p className="text-muted-foreground">support@khamphavietnam.vn</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Giờ làm việc</h3>
                    <p className="text-muted-foreground">Thứ Hai - Thứ Sáu: 8:00 - 17:30</p>
                    <p className="text-muted-foreground">Thứ Bảy: 8:00 - 12:00</p>
                    <p className="text-muted-foreground">Chủ Nhật: Đóng cửa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800">Cảm ơn bạn đã liên hệ!</h3>
                  <p>Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong thời gian sớm nhất.</p>
                  <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                    Gửi tin nhắn khác
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Nhập họ và tên của bạn"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Nhập địa chỉ email của bạn"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Tiêu đề</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Nhập tiêu đề tin nhắn"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nội dung</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Nhập nội dung tin nhắn của bạn"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Đang gửi...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Gửi tin nhắn
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-center">Vị Trí Của Chúng Tôi</h2>
            <div className="h-[400px] w-full bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966105045075!2d105.84046607596354!3d21.02803198062206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1684123456789!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Câu Hỏi Thường Gặp</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Những câu hỏi phổ biến mà khách hàng thường hỏi
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

const faqs = [
  {
    question: "Làm thế nào để đặt tour du lịch?",
    answer:
      "Bạn có thể đặt tour du lịch trực tiếp trên trang web của chúng tôi, gọi điện thoại hoặc gửi email. Chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ để xác nhận đặt tour.",
  },
  {
    question: "Chính sách hủy tour như thế nào?",
    answer:
      "Nếu bạn hủy tour trước 7 ngày, bạn sẽ được hoàn lại 100% tiền đặt cọc. Nếu hủy trong vòng 3-7 ngày, bạn sẽ được hoàn lại 50%. Nếu hủy trong vòng 3 ngày, chúng tôi sẽ không hoàn lại tiền đặt cọc.",
  },
  {
    question: "Tôi cần chuẩn bị gì khi đi du lịch Việt Nam?",
    answer:
      "Bạn nên chuẩn bị quần áo phù hợp với thời tiết, giấy tờ tùy thân, thuốc men cá nhân, và một số tiền mặt. Chúng tôi sẽ cung cấp danh sách chi tiết sau khi bạn đặt tour.",
  },
  {
    question: "Các tour du lịch có bao gồm bảo hiểm không?",
    answer:
      "Có, tất cả các tour du lịch của chúng tôi đều bao gồm bảo hiểm du lịch cơ bản. Tuy nhiên, chúng tôi khuyến nghị bạn nên mua thêm bảo hiểm du lịch quốc tế nếu bạn là du khách nước ngoài.",
  },
]
