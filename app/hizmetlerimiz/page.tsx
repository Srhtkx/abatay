"use client";
import Link from "next/link";
import { GiScales } from "react-icons/gi";
import Resimm from "@/public/kitap.webp";
import Image from "next/image";
import { GoLaw } from "react-icons/go";
import { PiScalesFill } from "react-icons/pi";
import {
  Scale,
  Building2,
  Briefcase,
  Gavel,
  Globe,
  Package,
} from "lucide-react";

const aboutCards = [
  {
    id: "icra-iflas-hukuk",
    title: "İcra & İflas Hukuku",
    description:
      " İcra & İflas Hukuku'nda size özel, hızlı ve etkin çözümlerle destek sağlıyoruz.",

    icon: GiScales,
  },
  {
    id: "sozlesmeler-hukuku",
    title: "Sözleşmeler Hukuku",
    description:
      "Sözleşmeler Hukuku'nda, anlaşmalarınızın güvenli ve sağlam temeller üzerine inşa edilmesini sağlıyoruz.",
    icon: PiScalesFill,
  },
  {
    id: "ticaret-sirketler-hukuku",
    title: "Ticaret & Şirketler Hukuku",
    description:
      "Şirketler Hukuku'nda, işletmenizin hukuki yapılanmasını güçlendirerek sürdürülebilir başarıya katkıda bulunuyoruz.",
    icon: Building2,
  },
  {
    id: "is-sosyal-hukuku",
    title: "İş Hukuku & Sosyal Güvenlik Hukuku",
    description:
      "İş ve Sosyal Güvenlik Hukuku'nda, çalışma yaşamınızı güvence altına alıyoruz.",
    icon: Briefcase,
  },
  {
    id: "ceza-hukuku",
    title: "Ceza Hukuku",
    description:
      "Ceza Hukuku'nda, sizlere güçlü ve etkili destek sağlayarak, haklarınızın kararlı bir şekilde savunulmasını üstleniyoruz.",
    icon: Gavel,
  },
  {
    id: "bilisim-eticaret-hukuku",
    title: "Bilişim & E-ticaret Hukuku",
    description:
      "Bilişim ve E-Ticaret Hukuku'nda, dijital işlerinizi güvence altına alıyoruz.",
    icon: Globe,
  },
  {
    id: "gumruk-hukuku",
    title: "Gümrük Hukuku",
    description:
      "Gümrük Hukuku'nda, uluslararası ticaret işlemlerinizi kolaylaştıracak güvenilir rehberlik ve destek sağlıyoruz.",
    icon: Package,
  },
  {
    id: "Aile Hukuku",
    title: "Aile Hukuku",
    description: "Boşanma nafaka ve miras ilişkilerinde hukuki danışmanlık.",
    icon: Scale,
  },
];

export default function AboutPage() {
  return (
    <div className="font-serif">
      <div className="bg-white">
        <div className="relative h-72 bg-gray-500">
          <Image
            src={Resimm}
            alt="Hukuk bürosu ekip çalışması"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
            objectPosition="top"
          />
          <div className="absolute inset-0 bg-green-950 bg-opacity-75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <br />
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              HİZMETLERİMİZ
            </h1>
            <p className="text-md py-8 italic text-white text-center">
              Hukuki Çözümlerle Yanınızdayız: Her Alanda Güvenilir Hizmetler.{" "}
            </p>
          </div>
        </div>
        <br />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          {/* Başlık */}
          <h2 className="flex gap-3 items-center text-xl md:text-2xl">
            <span className="text-green-900 font-semibold uppercase tracking-widest text-lg md:text-xl">
              ABATAY & İŞERİ
            </span>
            <GoLaw className="text-gray-500 text-sm md:text-lg" />
            <span className="text-gray-500 font-light text-sm md:text-base">
              Avukatlık Bürosu
            </span>
          </h2>

          {/* Ana Başlık */}
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mt-10 mb-6 tracking-wider leading-tight">
            Hizmetlerimiz
          </h1>

          {/* İnce Yeşil Çizgi */}
          <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-green-500 to-green-900 mb-10"></div>

          {/* Açıklama */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl italic">
            Müvekkillerimizin talepleri doğrultusunda, konusunda uzman
            avukatlarımız ile hizmet verdiğimiz çalışma alanlarımız;
          </p>

          {/* Sağ tarafa slogan; sadece masaüstünde göster */}
          <div className="hidden md:block absolute right-0 top-12">
            <p className="text-gray-500 text-sm italic">
              {"İstanbul'un Kalbinde, Sizin Yanınızda..."}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutCards.map((card) => (
              <Link
                href={`/hizmetlerimiz/${card.id}`}
                key={card.id}
                className="transition-transform delay-75 hover:scale-105"
              >
                <div className="bg-gray-50 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 w-84 h-48">
                  <div className="p-5">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-transparent text-green-900 ">
                          <card.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {card.title}
                      </h3>
                    </div>
                    <br />
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
