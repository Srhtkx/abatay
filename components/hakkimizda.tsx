import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScaleIcon, ShieldIcon, BookOpenIcon } from "lucide-react";
import BaslikResim from "@/public/download.webp";
import Nazan from "@/public/discekim.jpg";
import { GoLaw } from "react-icons/go";
import CN from "@/public/kütüphane.avif";

export default function Hakkimizda() {
  return (
    <div className="font-serif">
      <div className="min-h-screen ">
        <div className="relative h-72 bg-gray-500">
          <Image
            src={BaslikResim}
            alt="Hukuk bürosu ekip çalışması"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-green-950 bg-opacity-75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              HAKKIMIZDA
            </h1>
            <p className="text-md py-8 italic text-white text-center">
              Adaletin İzinde, Çözümün Merkezindeyiz.{" "}
            </p>
          </div>
        </div>
        <br />
        {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <h2 className="flex gap-3 items-center text-xl md:text-2xl">
            <span className="text-green-900 font-semibold uppercase tracking-widest text-lg md:text-xl">
              ABATAY & İŞERİ
            </span>
            <GoLaw className="text-gray-700 text-lg md:text-xl" />
            <span className="text-gray-600 font-light text-sm md:text-base">
              Avukatlık Bürosu
            </span>
          </h2>

       
          <h1 className="text-4xl md:text-4xl font-serif text-gray-900 mt-6 mb-4 tracking-wide">
            Çalışma Alanlarımız
          </h1>

   
          <div className="w-12 md:w-16 h-1 bg-green-900 mb-6"></div>

          <p className="text-gray-500 italic leading-relaxed">
            Müvekkillerimizin talepleri doğrultusunda, konusunda uzman
            avukatlarımız ile hizmet verdiğimiz çalışma alanlarımız;
          </p>
        </div>  */}
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
            Hakkımızda
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
              Etik Değerlere Sıkı Sıkıya Bağlılık.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Card className="mb-8 bg-gray-50 border-none shadow-gray-50 ">
            <CardContent className="p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <h2 className="text-2xl font-bold text-green-950 mb-4">
                  ABATAY & İŞERİ AVUKATLIK BÜROSU
                </h2>
                <p className="text-green-900">
                  ABATAY & İŞERİ AVUKATLIK BÜROSU olarak; deneyimli ve dinamik
                  avukat kadromuzla müvekkillerimize geniş bir yelpazede hukuki
                  hizmet sunmaktayız. Her bir avukatımız, farklı hukuki uzmanlık
                  alanlarına sahip olmanın yanı sıra, müvekkillerimizle empati
                  kurmayı ve onların ihtiyaçlarını anlayarak çalışmayı prensip
                  haline getirmiştir.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={Nazan}
                  alt="Ekip fotoğrafı"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gray-50 border-none shadow-gray-50">
              <CardContent className="p-6 flex flex-col items-center">
                <ScaleIcon className="h-12 w-12 text-green-950 mb-4" />
                <h3 className="text-xl font-semibold text-green-950 mb-2">
                  Misyonumuz
                </h3>
                <p className="text-green-900 text-center">
                  Müvekkillerimizin hayatlarını kolaylaştırmak, haklarını
                  savunmak ve adalete ulaşmalarına yardımcı olmak misyonumuzun
                  temelini oluşturmaktadır. Hukuki süreçlerin karmaşıklığı
                  karşısında açık iletişim ve etkili çözümlerle müvekkillerimize
                  destek olmayı amaçlamaktayız
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none  shadow-gray-50">
              <CardContent className="p-6 flex flex-col items-center">
                <ShieldIcon className="h-12 w-12 text-green-950 mb-4" />
                <h3 className="text-xl font-semibold text-green-950 mb-2">
                  Vizyonumuz
                </h3>
                <p className="text-green-900 text-center">
                  Adalet, dürüstlük, müvekkil memnuniyeti ve uzmanlık ofisimizin
                  temel değerleridir. Her bir müvekkilimize özel ve dikkatli bir
                  yaklaşım benimserken, etik değerlere bağlılığımızı
                  korumaktayız.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none shadow-gray-50">
              <CardContent className="p-6 flex flex-col items-center">
                <BookOpenIcon className="h-12 w-12 text-green-950 mb-4" />
                <h3 className="text-xl font-semibold text-green-950 mb-2">
                  Değerlerimiz
                </h3>
                <p className="text-green-900 text-center">
                  Hukuki alanındaki sürekli değişimlere ayak uydurarak,
                  müvekkillerimize en güncel ve yenilikçi çözümleri sunmak için
                  çaba gösteriyoruz. Yaratıcı düşünceyi teşvik ediyor ve her
                  dava için özel çözümler üretmeye özen göstermekteyiz.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mb-8 bg-gray-50 border-none shadow-gray-50 ">
            <CardContent className="p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <Image
                  src={CN}
                  alt="Ekip fotoğrafı"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <h2 className="text-2xl font-bold text-green-950 mb-4">
                  Neden Biz ?
                </h2>
                <p className="text-green-900">
                  Abatay & İşeri Avukatlık Bürosu olarak, hukuki meselelerinizi
                  sadece profesyonel bir bakış açısıyla değil, aynı zamanda
                  kişisel bir ilgi ve özenle ele alıyoruz. Müvekkillerimizin her
                  biriyle kurduğumuz güçlü ilişkiler, bizi hukuk alanında tercih
                  edilen bir ortak yapar. İstanbul’un kalbindeki ofisimizden,
                  geniş hizmet yelpazemizle, her bir müvekkilimizin benzersiz
                  ihtiyaçlarını karşılayacak şekilde özelleştirilmiş hizmetler
                  sunuyoruz.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="bg-gray-50 border-none shadow-gray-50">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-green-950 text-center mb-4">
              Neden Biz?
            </h2>
            <p className="list-disc list-inside text-green-900 space-y-2">
              Abatay & İşeri Avukatlık Bürosu olarak, hukuki meselelerinizi
              sadece profesyonel bir bakış açısıyla değil, aynı zamanda kişisel
              bir ilgi ve özenle ele alıyoruz. Müvekkillerimizin her biriyle
              kurduğumuz güçlü ilişkiler, bizi hukuk alanında tercih edilen bir
              ortak yapar. İstanbul’un kalbindeki ofisimizden, geniş hizmet
              yelpazemizle, her bir müvekkilimizin benzersiz ihtiyaçlarını
              karşılayacak şekilde özelleştirilmiş hizmetler sunuyoruz.
            </p>
          </CardContent>
        </Card> */}
          <br />
        </div>
      </div>
    </div>
  );
}
