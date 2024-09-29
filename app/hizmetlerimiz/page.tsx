"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Resimm from "@/public/kitap.webp";
import Image from "next/image";
import { GoLaw } from "react-icons/go";

const aboutCards = [
  {
    id: "icra-iflas-hukuk",
    title: "İcra & İflas Hukuku",
    description: "Borç tahsilatı ve iflas süreçlerinde hukuki destek",
    content: "Müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.",
  },
  {
    id: "sozlesmeler-hukuku",
    title: "Sözleşmeler Hukuku",
    description: "Her türlü sözleşme hazırlama ve danışmanlık hizmetleri",
    content: "Sektörümüzde lider konuma gelmeyi hedefliyoruz.",
  },
  {
    id: "ticaret-sirketler-hukuku",
    title: "Ticaret & Şirketler Hukuku",
    description:
      "Şirket kuruluşu, birleşme ve satın alma süreçlerinde hukuki destek",
    content: "Dürüstlük, şeffaflık ve müşteri memnuniyeti önceliklerimizdir.",
  },
  {
    id: "is-sosyal-hukuku",
    title: "İş Hukuku & Sosyal Güvenlik Hukuku",
    description:
      "İşçi-işveren ilişkileri ve sosyal güvenlik konularında danışmanlık",
    content:
      "2005 yılında küçük bir ofiste başladık, bugün global bir şirketiz.",
  },
  {
    id: "ceza-hukuku",
    title: "Ceza Hukuku",
    description: "Ceza davalarında savunma ve danışmanlık hizmetleri",
    content: "Uzman kadromuzla size en iyi hizmeti sunuyoruz.",
  },
  {
    id: "bilisim-eticaret-hukuku",
    title: "Bilişim & E-ticaret Hukuku",
    description: "Dijital dünyada hukuki sorunlara çözümler",
    content:
      "Çevre dostu projelerle sürdürülebilir bir gelecek için çalışıyoruz.",
  },
  {
    id: "gumruk-hukuku",
    title: "Gümrük Hukuku",
    description: "Gümrük işlemleri ve uyuşmazlıklarında hukuki destek",
    content: "Sorularınız için her zaman buradayız.",
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {aboutCards.map((card) => (
              <Link
                href={`/hizmetlerimiz/${card.id}`}
                key={card.id}
                className=" transition-transform delay-75 hover:scale-105"
              >
                <Card className="h-full border-none bg-gray-50 shadow-gray-50 hover:bg-green-950 hover:text-white delay-75">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    {card.description}
                  </CardHeader>
                  <CardContent>
                    <p>{card.content}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
