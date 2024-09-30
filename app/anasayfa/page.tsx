"use client";

import { Users, Scale, BookOpen } from "lucide-react";
import Component from "@/components/anasayfachart";
import Link from "next/link";
import Image from "next/image";

export default function Anasayfa() {
  const services = [
    {
      name: "İcra & iflas Hukuku",
      description: "Boşanma, velayet ve nafaka davalarında uzman desteği.",
      icon: Users,
      link: "/hizmetlerimiz/icra-iflas-hukuk",
    },
    {
      name: "Sözleşmeler Hukuku",
      description: "Şirket kurulumları, sözleşmeler ve ticari anlaşmazlıklar.",
      icon: Scale,
      link: "/hizmetlerimiz/sozlesmeler-hukuku",
    },
    {
      name: "Ceza Hukuku",
      description: "Ceza davalarında savunma ve müdafilik hizmetleri.",
      icon: BookOpen,
      link: "/hizmetlerimiz/ceza-hukuku",
    },
    {
      name: "İş Hukuku & Sosyal Güvenlik Hukuku",
      description: "İşçi-işveren anlaşmazlıkları ve iş sözleşmeleri.",
      icon: Scale,
      link: "/hizmetlerimiz/is-sosyal-hukuku",
    },
    {
      name: "Bilişim & E-ticaret Hukuku",
      description: "Emlak alım-satım işlemleri ve kira anlaşmazlıkları.",
      icon: Users,
      link: "/hizmetlerimiz/bilisim-eticaret-hukuku",
    },
    {
      name: "Ticaret & Şirketler Hukuku",
      description: "Patent, marka ve telif hakları konularında danışmanlık.",
      icon: Scale,
      link: "/hizmetlerimiz/fikri-mulkiyet-hukuku",
    },
    {
      name: "İdare Hukuku",
      description: "Kamu kurumlarıyla ilgili hukuki süreçlerde destek.",
      icon: BookOpen,
      link: "/hizmetlerimiz/idare-hukuku",
    },
    {
      name: "Gümrük Hukuku",
      description:
        "Sözleşme hazırlama ve borç ilişkilerinde hukuki danışmanlık.",
      icon: Scale,
      link: "/hizmetlerimiz/gumruk-hukuku",
    },
    {
      name: "Aile Hukuku",
      description: "Boşanma nafaka ve miras ilişkilerinde hukuki danışmanlık.",
      icon: Scale,
      link: "/hizmetlerimiz/borclar-hukuku",
    },
  ];

  return (
    <div className="font-serif">
      <div className="relative h-[90vh] text-white overflow-hidden ">
        <Image
          src="/scale-image.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Adalet terazisi"
          className="z-0"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <main className="relative flex flex-col justify-center items-center h-full z-20 px-4 text-center">
          <div className="text-left px-6 py-8 md:py-12 lg:py-16 md:text-center">
            <p className="text-sm md:text-base italic mb-6 md:mb-4 text-gray-300">
              İstanbulun Kalbinde, Sizin Yanınızda...
            </p>
            <h1 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-4 leading-tight text-white">
              ABATAY & İŞERİ <br />
              Avukatlık Bürosu
            </h1>
            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6 text-gray-200">
              {
                "  Grand Pera'da yer alan ofisimizle, bireysel ve kurumsal hukuki    ihtiyaçlarınız için yanınızdayız. Profesyonel ekibimizle, her               türlü hukuki süreçte güvenilir çözümler sunmaktayız."
              }
            </p>
          </div>
          <div className="hidden md:block mt-8">
            <Component />
          </div>
        </main>
      </div>

      {/* Services Section - Only visible on mobile */}
      <section className="md:hidden py-16 px-4 bg-white bg-opacity-90">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8">
            Uzmanlık Alanlarımız
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <Link href={service.link} key={service.name} className="block">
                <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-green-950 text-white">
                          <service.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
