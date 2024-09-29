import ContactPage from "@/components/iletişim";
import Image from "next/image";
import Resimm from "@/public/heykel.avif";

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
      <ContactPage />
    </div>
  );
}
