import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Resimm from "@/public/kitap.webp";
import Image from "next/image";
import { GoLaw } from "react-icons/go";

const aboutCards = [
  {
    id: "yayin-1",
    title: "Kamulaştırma Davasının Koşulları ve Yasal Süreci",
    description: "Borç tahsilatı ve iflas süreçlerinde hukuki destek",
    content: "Müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.",
    imageUrl: "/can.jpg", // Görsel ekledim
  },
  {
    id: "yayin-2",
    title: "Tasarrufun İptali Davasının Yasal Koşulları",
    description: "Her türlü sözleşme hazırlama ve danışmanlık hizmetleri",
    content: "Sektörümüzde lider konuma gelmeyi hedefliyoruz.",
    imageUrl: "/can.jpg", // Görsel ekledim
  },
  {
    id: "tutuklanma-kosul",
    title: "Tutuklama Tedbirinin Koşulları ve Tutuklulukta Süre",
    description:
      "Şirket kuruluşu, birleşme ve satın alma süreçlerinde hukuki destek",
    content: "Dürüstlük, şeffaflık ve müşteri memnuniyeti önceliklerimizdir.",
    imageUrl: "/can.jpg", // Görsel ekledim
  },
];

export default function Yayinlarimiz() {
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
              YAYINLARIMIZ
            </h1>
            <p className="text-md py-8 italic text-white text-center">
              Bilgi Güçtür. Hukuki Yayınlarımızla Kendinizi Güçlendirin.{" "}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <br />
          <h2 className="flex gap-4">
            {" "}
            <span className="text-green-900 font-bold">
              ABATAY & İŞERİ
            </span>{" "}
            <GoLaw className="text-green-950" />
            Avukatlık Bürosu
          </h2>
          <br />
          <h1 className="text-4xl ">Yayınlarımız</h1>
          <br />
          <p className="text-gray-600">
            Müvekkillerimizin talepleri doğrultusunda, konusunda uzman
            Avukatlarımız ile hizmet verdiğimiz çalışma alanlarımız;
          </p>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutCards.map((card) => (
              <Link
                href={`yayinlarimiz/${card.id}`}
                key={card.id}
                className=" transition-transform delay-75 hover:scale-105"
              >
                <Card className="h-full border-none bg-gray-50 shadow-gray-50 hover:bg-green-950 hover:text-white delay-75">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        width={200}
                        height={200}
                        className="object-cover h-full w-full rounded-l-lg"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <p>{card.description}</p>
                      </CardHeader>
                      <CardContent>
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
