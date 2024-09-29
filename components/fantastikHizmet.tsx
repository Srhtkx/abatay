"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ScaleIcon,
  FileTextIcon,
  BuildingIcon,
  UserIcon,
  GavelIcon,
  GlobeIcon,
  PackageIcon,
} from "lucide-react";

const services = [
  {
    title: "İcra & İflas Hukuku",
    description:
      "Borç tahsilatı ve iflas süreçlerinde hızlı ve etkili hukuki destek",
    icon: ScaleIcon,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Sözleşmeler Hukuku",
    description: "Güvenli ve şeffaf sözleşme yönetimi için uzman danışmanlık",
    icon: FileTextIcon,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Ticaret & Şirketler Hukuku",
    description:
      "Şirket kuruluşu ve birleşme süreçlerinde kapsamlı hukuki rehberlik",
    icon: BuildingIcon,
    color: "from-emerald-400 to-green-600",
  },
  {
    title: "İş Hukuku & Sosyal Güvenlik",
    description: "İşçi-işveren ilişkilerinde adil ve güvenli çözümler",
    icon: UserIcon,
    color: "from-green-600 to-emerald-700",
  },
  {
    title: "Ceza Hukuku",
    description: "Adil yargılama ve etkili savunma stratejileri",
    icon: GavelIcon,
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "Bilişim & E-ticaret Hukuku",
    description: "Dijital çağda hak ve menfaatlerinizin korunması",
    icon: GlobeIcon,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Gümrük Hukuku",
    description: "Sınır ötesi ticaret ve gümrük işlemlerinde uzman destek",
    icon: PackageIcon,
    color: "from-emerald-600 to-green-800",
  },
];

export default function YesilHizmetlerimiz() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br  from-green-950 to-emerald-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Hukuki Çözümlerimiz
        </h2>
        <p className="text-xl text-green-100 mb-12">
          Uzman kadromuzla, her alanda hukuki ihtiyaçlarınıza yönelik çözümler
          sunuyoruz.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card className="h-full bg-white bg-opacity-10 backdrop-blur-lg border-none overflow-hidden">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${service.color}`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-100">
                    {service.title}
                  </h3>
                  <p className="text-green-200">{service.description}</p>
                </div>
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-green-300 text-green-100 hover:bg-green-700 hover:text-white transition-colors duration-300"
                  >
                    Detaylı Bilgi
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16"
      >
        <Button className="bg-white text-green-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition-all duration-300 shadow-lg hover:shadow-xl">
          Tüm Hizmetlerimizi Keşfedin
        </Button>
      </motion.div>
    </div>
  );
}
