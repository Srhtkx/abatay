"use client";
import Link from "next/link";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Scale,
  FileText,
  Building2,
  Briefcase,
  Gavel,
  Globe,
  Package,
} from "lucide-react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Hukuk alanları verisi
const hukukAlanlari = [
  {
    baslik: "İcra & İflas Hukuku",
    icon: Scale,
    link: "/icra-iflas",
    aciklama:
      "Borçların tahsili, alacaklı haklarının korunması ve iflas süreçlerinin yönetimi konusunda danışmanlık hizmeti sunuyoruz.",
  },
  {
    baslik: "Sözleşmeler Hukuku",
    icon: FileText,
    link: "/sozlesmeler",
    aciklama:
      "Sözleşmelerin hazırlanması, incelenmesi ve hukuki süreçlerde kapsamlı danışmanlık sunuyoruz.",
  },
  {
    baslik: "Ticaret & Şirketler Hukuku",
    icon: Building2,
    link: "/ticaret-sirketler",
    aciklama:
      "Şirket kuruluşları, birleşme ve devralmalar, ortaklık anlaşmaları gibi ticari konularda destek sağlıyoruz.",
  },
  {
    baslik: "İş Hukuku & Sosyal Güvenlik",
    icon: Briefcase,
    link: "/is-sosyal-guvenlik",
    aciklama:
      "İş sözleşmeleri, kıdem ve ihbar tazminatları, işçi hakları ve sosyal güvenlik konularında hizmet sunuyoruz.",
  },
  {
    baslik: "Ceza Hukuku",
    icon: Gavel,
    link: "/ceza",
    aciklama:
      "Ceza davalarında etkin bir savunma sağlayarak müvekkillerimize hukuki danışmanlık veriyoruz.",
  },
  {
    baslik: "Bilişim & E-ticaret Hukuku",
    icon: Globe,
    link: "/bilisim-eticaret",
    aciklama:
      "E-ticaret ve bilişim suçlarına karşı çözüm odaklı danışmanlık hizmeti veriyoruz.",
  },
  {
    baslik: "Gümrük Hukuku",
    icon: Package,
    link: "/gumruk",
    aciklama:
      "Uluslararası ticaret ve gümrük işlemlerinde müvekkillerimize hukuki danışmanlık sunuyoruz.",
  },
];

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });

  useEffect(() => {
    if (emblaApi) {
      // Otomatik kaydırma işlevini başlat
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // 5 saniyede bir slayt değişimi

      return () => clearInterval(intervalId); // Temizlik için interval'ı temizle
    }
  }, [emblaApi]);

  return (
    <Carousel className="w-full max-w-5xl mx-auto mt-10" ref={emblaRef}>
      <CarouselContent className="flex">
        {hukukAlanlari.map((alan, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 lg:basis-1/3 p-4"
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {/* Icon Component */}
                  <alan.icon className="w-6 h-6 mr-2 text-green-900" />
                  <span className="text-green-900">{alan.baslik}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{alan.aciklama}</CardDescription>
              </CardContent>
              <CardContent className="pt-2">
                <Link
                  href={alan.link}
                  className="text-sm font-medium text-green-600 hover:underline"
                >
                  Daha fazla bilgi
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
}
