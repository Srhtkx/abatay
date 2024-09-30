import React from "react";
import { Button } from "@/components/ui/button";
import { Scale, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-serif">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/renkl.jpg')",
          filter: "",
        }}
      >
        <div className="min-h-screen bg-green-950 bg-opacity-35 flex flex-col justify-between">
          {/* Hero Section */}
          <section className="mt-44 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className=" sm:text-4xl md:text-5xl text-white tracking-tight">
                <span className="block ">Adalet ve Mükemmellik </span>
                <span className="block">Yolculuğumuz</span>
              </h1>

              <p className="mt-28 text-xl text-gray-300 max-w-2xl mx-auto">
                {
                  "'Da yer alan ofisimizle, bireysel ve kurumsal hukuki ihtiyaçlarınız   için yanınızdayız. Profesyonel ekibimizle, her türlü hukuki süreçte güvenilir çözümler sunmaktayız."
                }
              </p>

              <div className="mt-4 flex justify-center space-x-4">
                <Link href="/iletisim">
                  <Button
                    variant="outline"
                    className="px-8 py-3 text-lg font-semibold rounded-full text-white border-white hover:bg-green-900 hover:text-white transition duration-300"
                  >
                    İletişim
                  </Button>
                </Link>
                <Link href="/hakkimizda">
                  <Button
                    variant="outline"
                    className="px-8 py-3 text-lg font-semibold rounded-full text-white border-white hover:bg-green-900 hover:text-white transition duration-300"
                  >
                    Daha Fazla Bilgi
                  </Button>
                </Link>
                <div className="mb-32"></div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-90 ">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-12">
                Uzmanlık Alanlarımız
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  {
                    name: "Aile Hukuku",
                    description:
                      "Boşanma, velayet ve nafaka davalarında uzman desteği.",
                    icon: Users,
                  },
                  {
                    name: "Ticaret Hukuku",
                    description:
                      "Şirket kurulumları, sözleşmeler ve ticari anlaşmazlıklar.",
                    icon: Scale,
                  },
                  {
                    name: "Ceza Hukuku",
                    description:
                      "Ceza davalarında savunma ve müdafilik hizmetleri.",
                    icon: BookOpen,
                  },
                  {
                    name: "İş Hukuku",
                    description:
                      "İşçi-işveren anlaşmazlıkları ve iş sözleşmeleri.",
                    icon: Scale,
                  },
                  {
                    name: "Aile Hukuku",
                    description:
                      "Boşanma, velayet ve nafaka davalarında uzman desteği.",
                    icon: Users,
                  },
                  {
                    name: "Ticaret Hukuku",
                    description:
                      "Şirket kurulumları, sözleşmeler ve ticari anlaşmazlıklar.",
                    icon: Scale,
                  },
                  {
                    name: "Ceza Hukuku",
                    description:
                      "Ceza davalarında savunma ve müdafilik hizmetleri.",
                    icon: BookOpen,
                  },
                  {
                    name: "İş Hukuku",
                    description:
                      "İşçi-işveren anlaşmazlıkları ve iş sözleşmeleri.",
                    icon: Scale,
                  },
                ].map((service) => (
                  <div key={service.name} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <service.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-base text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <br />
          {/* CTA Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                <span className="block">Bize Ulaşın</span>
              </h2>
              <span className="block mt-8 text-white">
                Hukuki danışmanlık veya sorularınız için bizimle iletişime
                geçin. Ekibimiz, hukuki ihtiyaçlarınıza yönelik profesyonel
                destek ve çözümler sunmaya hazırdır.
              </span>
              <div className="">
                <Button
                  variant="outline"
                  className="mt-8 px-8 py-3 text-lg font-semibold rounded-full text-white border-white hover:bg-green-900 hover:text-white transition duration-300"
                >
                  İletişime Geç
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
