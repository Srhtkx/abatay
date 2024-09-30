import ContactPage from "@/components/iletişim";
import Image from "next/image";
import Resimm from "@/public/heykel.avif";
import { GoLaw } from "react-icons/go";

export default function Iletşim() {
  return (
    <div className="font-serif">
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
          <h1 className=" text-4xl md:text-5xl font-bold text-white text-center">
            İLETİŞİM
          </h1>
          <p className="text-md py-8 italic text-white text-center">
            Sorularınızı Bize Bırakın, Çözümleri Biz Üretelim.
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
          İletişim
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
      <ContactPage />
    </div>
  );
}
