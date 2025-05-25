import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {cultures} from "@/data/cultures"

export function RegionalCulture() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Văn Hóa Ba Miền</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Khám phá nét đẹp văn hóa đặc sắc của ba miền Bắc - Trung - Nam
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cultures.map((region:any) => (
          <Card key={region.id} className="overflow-hidden">
            <div className="relative h-60">
              <Image
                src={region.image || `/placeholder.svg?height=240&width=400`}
                alt={region.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{region.name}</CardTitle>
              <CardDescription>{region.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {region?.features.map((feature:any, index:any) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={`/culture/${region.id}`}>
                <Button>Khám phá thêm</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
