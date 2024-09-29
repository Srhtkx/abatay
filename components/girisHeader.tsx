import Image from "next/image";
import Resimm from "@/public/download.webp";

export default function GirisHeader() {
  <div className="relative h-80 bg-gray-500">
    <Image
      src={Resimm}
      alt="Hukuk bürosu ekip çalışması"
      layout="fill"
      objectFit="cover"
      className="mix-blend-overlay"
    />
    <div className="absolute inset-0 bg-green-950 bg-opacity-75" />
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
        Hizmetlerimiz
      </h1>
    </div>
  </div>;
}
