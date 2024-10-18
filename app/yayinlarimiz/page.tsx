import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Resimm from "@/public/kütüphane.avif";
import Image from "next/image";
import { GoLaw } from "react-icons/go";

const aboutCards = [
  {
    id: "yayin-1",
    title: "Kamulaştırma Davasının Koşulları ve Yasal Süreci",
    description: "Borç tahsilatı ve iflas süreçlerinde hukuki destek",
    content:
      "Kamulaştırma, kamu yararının gerektirdiği durumlarda, taşınmaz malların bedelinin ödenerek devlet veya kamu tüzel kişileri tarafınd...",
    imageUrl: "/kütüphane.avif", // Görsel ekledim
  },
  {
    id: "yayin-2",
    title: "Tasarrufun İptali Davasının Yasal Koşulları",
    description: "Her türlü sözleşme hazırlama ve danışmanlık hizmetleri",
    content:
      "Tasarrufun iptali davası, borçlunun malvarlığını üçüncü kişilere devretmesi veya zarara yol açan tasarruf işlemlerinin, alaca...",
    imageUrl: "/discekim.jpg", // Görsel ekledim
  },
  {
    id: "yayin-3",
    title: "Tutuklama Tedbirinin Koşulları ve Tutuklulukta Süre",
    description:
      "Şirket kuruluşu, birleşme ve satın alma süreçlerinde hukuki destek",
    content:
      "Tutuklama, ceza muhakemesi sürecinde sanık veya şüphelinin özgürlüğünü en ağır şekilde sınırlayan koruma tedbiridir. Tutuklama kararı, sad...",
    imageUrl: "/hukuk.jpg", // Görsel ekledim
  },
];

export default function Yayinlarimiz() {
  return (
    <div className="font-serif">
      <div className="bg-white">
        <div className="relative h-72 bg-gray-500">
          <Image
            src={Resimm}
            priority
            alt="Hukuk bürosu ekip çalışması"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
            objectPosition="bottom"
          />
          <div className="absolute inset-0 bg-green-950 bg-opacity-75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <br />
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              YAYINLARIMIZ
            </h1>
            <p className="text-md py-8 italic text-white text-center">
              Bilgi Güçtür. Hukuki Yayınlarımızla Kendinizi Güçlendirin.{" "}
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
            Yayınlarımız
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
              {" İstanbul'un Kalbinde, Sizin Yanınızda..."}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutCards.map((card) => (
              <Link
                href={`yayinlarimiz/${card.id}`}
                key={card.id}
                className=" transition-transform delay-75 hover:scale-105"
              >
                <Card className="h-full border-none bg-gray-50 shadow-gray-50 hover:bg-green-950 hover:text-white">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        width={200}
                        height={200}
                        priority
                        className="object-cover h-full w-full rounded-l-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-gray-600">
                        <p>{card.content}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
