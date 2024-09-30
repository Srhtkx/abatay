/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "lucide-react";
import Ozgecmis from "@/components/özgeçmiş";
import Resimm from "@/public/download.webp";
import Image from "next/image";
import { GoLaw } from "react-icons/go";

interface TeamMember {
  name: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  twitter?: string;
  key: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Hande Nazan ABATAY",
    key: "nazan",
    bio: "Hande Nazan ABATAY, Kadir Has Üniversitesi Hukuk Fakültesi’nden 2022 yılında mezun olmuştur. Yüksek lisans eğitimini Kadir Has Üniversitesi’nde Özel Hukuk alanında tamamlamıştır. ABATAY, 12 Şubat 2024 tarihinde Av. Hande Nazan ABATAY ile birlikte ABATAY & İŞERİ AVUKATLIK BÜROSU’nu kurmuştur.",
    imageUrl: "/nazan.jpg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/hande-nazan-abatay-952a331a5/",
    twitter: "https://twitter.com/nazankx",
  },
  {
    name: "Can İŞERİ",
    key: "can",
    bio: "Can İşeri, Kadir Has Üniversitesi Hukuk Fakültesi’nden 2022 yılında mezun olmuştur. Yüksek lisans eğitimini Kadir Has Üniversitesi’nde Kamu Hukuku alanında tamamlamıştır. İŞERİ, 12 Şubat 2024 tarihinde Av. Hande Nazan ABATAY ile birlikte ABATAY & İŞERİ AVUKATLIK BÜROSU’nu kurmuştur.",
    imageUrl: "/Can.jpg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/caniseri/",
    twitter: "https://twitter.com/caniserii",
  },
];

export default function TeamCards() {
  return (
    <div className="font-serif">
      <div>
        {/* Üst Kısım */}
        <div className="relative h-72 bg-gray-500">
          <Image
            src={Resimm}
            alt="Hukuk bürosu ekip çalışması"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-green-950 bg-opacity-75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <br />
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              EKİBİMİZ
            </h1>
            <p className="text-md py-8 italic text-white text-center">
              Uzman Kadro, Güçlü Hukuki Destek.{" "}
            </p>
          </div>
        </div>
        <br />

        <div className="bg-white ">
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
              Ekibimiz
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
                {"Profesyonel avukat ekibimizle, her alanda yanınızdayız."}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-60 justify-center items-start p-2 py-10">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="w-full md:w-80 bg-gray-50 border-none shadow-gray-50 hover:scale-105 hover:rounded-sm duration-300"
              >
                <CardContent className="p-6">
                  <div className="aspect-square overflow-hidden rounded-full mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl text-green-950 font-bold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {member.bio}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center space-x-2 pb-6">
                  {member.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a
                        className="bg-green-950 border-none hover:bg-green-900 text-white hover:text-white"
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    </Button>
                  )}

                  <Ozgecmis description={description[member.key]} />
                </CardFooter>
              </Card>
            ))}
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

const description = {
  nazan: {
    name: "Hande Nazan ABATAY",
    job: "Avukat",

    hakkinda:
      "Hande Nazan ABATAY, Kadir Has Üniversitesi Hukuk Fakültesi’nden 2022 yılında mezun olmuştur. Yüksek lisans eğitimini Kadir Has Üniversitesi’nde Özel Hukuk alanında tamamlamıştır. ABATAY, 12 Şubat 2024 tarihinde Av. Hande Nazan ABATAY ile birlikte ABATAY & İŞERİ AVUKATLIK BÜROSU’nu kurmuştur.",
    akademi: "Kadir Has Üniversitesi, lisans derecesi Hukuk",
    akademi1:
      "Kadir Has Üniversitesi, Yüksek Lisans, Tezli Özel Hukuk Lisansüstü Programı",
    yuksek: " Tadil Sözleşmesi",
    calismalar: "Gelir Paylaşımlı İnşaat Sözleşmelerinin Hukuki Niteliği",
    calismaşar1:
      "Geçerli Fesih Nedeni Olarak İşletme, İşyeri ve İşin Gereklilikleri",
    calismaşar2:
      "Bir Kusursuz Sorumluluk Hali Olarak Yapı Malikinin Sorumluluğunun Nedensellik Bağı ve Yargıtay’ın Konuya İlişkin Kararlarının Değerlendirilmesi",
    calismaşar3:
      "Zehirli Haksız Fiil (Toxic Tort) İçin Çıkış Yolu: Nedensellik Teorileri Yapay Zekanın Hukuki Statüsü ve Sorumluluğu",
    calismaşar4:
      "İşverenin İşçinin İşe Davet Etmesinin İşe İade Davasına Etkisine İlişkin Yargıtay Kararı İncelemesi",
    calismaşar5: "Yeniden Müzakere Yükümlülüğü ve CISG Kapsamında Dayanakları",
    calismaşar6: "Yapay Zekanın Hukuki Statüsü ve Sorumluluğu",
    dil: "İngilizce",
    dil2: "Almanca",
    src: "/nazan.jpg",
  },
  can: {
    src: "/Can.jpg",
    name: "Can İŞERİ",
    job: "Avukat",

    hakkinda:
      "Can İşeri, Kadir Has Üniversitesi Hukuk Fakültesi’nden 2022 yılında mezun olmuştur. Yüksek lisans eğitimini Kadir Has Üniversitesi’nde Kamu Hukuku alanında tamamlamıştır. İŞERİ, 12 Şubat 2024 tarihinde Av. Hande Nazan ABATAY ile birlikte ABATAY & İŞERİ AVUKATLIK BÜROSU’nu kurmuştur.",
    akademi: "Kadir Has Üniversitesi, lisans derecesi Hukuk",
    akademi1:
      "Kadir Has Üniversitesi, Yüksek Lisans, Tezli Özel Hukuk Lisansüstü Programı",
    yuksek: "Tutuklama Tedbiri ve Tutuklulukta Süre",
    calismalar: "Sendika Yöneticisinin Güvencesi",
    calismaşar1: "Ötanazi Uygulaması ve Ötanazinin Uygulanabilirliği Sorunu",
    calismaşar2:
      "Avrupa İnsan Hakları Mahkemesinin Geliştirdiği Yargılama Kriterleri",
    calismaşar3:
      "Avrupa İnsan Hakları Sözleşmesi ve Devletin Pozitif Yükümlülükleri",
    calismaşar4: "Ceza ve Hukuk Muhakemesinde İstinaf Yargılaması",
    calismaşar5: "Tutuklama Tedbiri ve Hükme Bağlı Tutukluluk Kavramı",
    calismaşar6:
      "Devlet Memurunun Sendikal Faaliyetleri Nedeniyle Disiplin Cezası Almasına İlişkin Anayasa Mahkemesi Kararının Değerlendirilmesi",
    dil: "İngilizce",
    dil2: "Almanca",
  },
} as any;
