"use client";

import Link from "next/link";
import * as React from "react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
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

const hukukAlanlari = [
  {
    baslik: "İş Hukuku & Sosyal Güvenlik",
    icon: Briefcase,
    link: "/hizmetlerimiz/is-sosyal-hukuku",
    aciklama:
      "İşçi ve işveren ilişkilerinde ortaya çıkabilecek uyuşmazlıklarda, iş sözleşmeleri, kıdem ve ihbar tazminatları, işçi hakları ve sosyal güvenlik hukuku kapsamında profesyonel hizmet sunuyoruz.",
  },
  {
    baslik: "Ceza Hukuku",
    icon: Gavel,
    link: "/hizmetlerimiz/ceza-hukuku",
    aciklama:
      "Ceza hukuku alanında, müvekkillerimizin haklarını korumak amacıyla ceza davalarında etkin bir savunma sağlıyor, soruşturma ve kovuşturma aşamalarında hukuki danışmanlık veriyoruz.",
  },
  {
    baslik: "Sözleşmeler Hukuku",
    icon: FileText,
    link: "/hizmetlerimiz/sozlesmeler-hukuku",
    aciklama:
      "Sözleşmeler hukuku, tarafların hak ve yükümlülüklerini düzenleyen anlaşmaların oluşturulması ve uygulanmasını kapsar. Abatay & İşeri Avukatlık Bürosu olarak, sözleşmelerin hazırlanması, incelenmesi ve hukuki süreçlerde müvekkillerimize kapsamlı danışmanlık sunuyoruz.",
  },
  {
    baslik: "Ticaret & Şirketler Hukuku",
    icon: Building2,
    link: "/hizmetlerimiz/ticaret-sirketler-hukuku",
    aciklama:
      "Ticaret ve şirketler hukuku alanında, şirket kuruluşları, birleşme ve devralmalar, ortaklık anlaşmaları gibi konularda müvekkillerimize hukuki destek sağlayarak ticari faaliyetlerin hukuki güvence altında yürütülmesini sağlamaktayız.",
  },
  {
    baslik: "Bilişim & E-ticaret Hukuku",
    icon: Globe,
    link: "/hizmetlerimiz/bilisim-eticaret-hukuku",
    aciklama:
      "Dijital dünyada hızla gelişen e-ticaret ve bilişim hukuku alanlarında, online iş modelleri, veri güvenliği, internet üzerinden ticaret ve bilişim suçlarına karşı müvekkillerimize çözüm odaklı danışmanlık hizmeti veriyoruz.",
  },
  {
    baslik: "Gümrük Hukuku",
    icon: Package,
    link: "/hizmetlerimiz/gumruk-hukuku",
    aciklama:
      "Uluslararası ticaret ve gümrük işlemlerinde, ithalat ve ihracat süreçlerindeki hukuki düzenlemelere uyum sağlamaları için müvekkillerimize hukuki danışmanlık ve temsil hizmetleri sunuyoruz.",
  },
  {
    baslik: "İcra & İflas Hukuku",
    icon: Scale,
    link: "/hizmetlerimiz/icra-iflas-hukuk",
    aciklama:
      "Abatay & İşeri Avukatlık Bürosu olarak, borçların tahsili, alacaklı haklarının korunması ve iflas süreçlerinin yönetimi konusunda müvekkillerimize kapsamlı danışmanlık ve temsil hizmeti sunmaktayız.",
  },
];

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Changed to 5000 milliseconds (5 seconds)

      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  return (
    <Carousel
      className="w-full max-w-6xl"
      opts={{
        loop: true,
      }}
      ref={emblaRef}
    >
      <CarouselContent>
        {hukukAlanlari.map((alan, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Link href={alan.link} className="block h-full">
              <Card className="bg-gray-100 opacity-85 shadow-none rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 h-full">
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-green-950 text-white">
                        <alan.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-green-950">
                      {alan.baslik}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{alan.aciklama}</p>
                </CardContent>
                <p className="text-green-800 hover:text-green-700 flex px-4">
                  daha fazla...
                </p>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
