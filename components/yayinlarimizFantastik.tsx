"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon } from "lucide-react";

const articles = [
  {
    title: "Tasarrufun İptali Davalarında Güncel Yaklaşımlar",
    description:
      "Yargıtay'ın son kararları ışığında tasarrufun iptali davalarındaki yeni hukuki perspektifler.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "tasarrufun-iptali-davalari-guncel-yaklasimlar",
    category: "İcra ve İflas Hukuku",
  },
  {
    title: "İş Hukukunda Yeni Düzenlemeler ve Etkileri",
    description:
      "Son yasal değişikliklerin iş ilişkileri ve çalışma koşulları üzerindeki etkileri.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "is-hukukunda-yeni-duzenlemeler",
    category: "İş Hukuku",
  },
  {
    title: "Kişisel Verilerin Korunması: Güncel Uygulamalar",
    description:
      "KVKK kapsamında şirketlerin uyması gereken yeni yükümlülükler ve veri güvenliği önlemleri.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "kisisel-verilerin-korunmasi-guncel-uygulamalar",
    category: "Veri Koruma Hukuku",
  },
  {
    title: "Ticaret Hukukunda Dijitalleşme ve Hukuki Sonuçları",
    description:
      "E-ticaret ve dijital platformların ticaret hukuku açısından değerlendirilmesi.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ticaret-hukukunda-dijitallesme",
    category: "Ticaret Hukuku",
  },
];

export default function ProfesyonelYazilarimiz() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Güncel Hukuki Makalelerimiz
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/makaleler/${article.slug}`} className="block group">
                <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
                      <Badge className="absolute top-4 left-4 bg-white text-gray-800">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {article.description}
                      </p>
                      <motion.div
                        className="flex items-center text-green-700 font-semibold"
                        initial={{ x: 0 }}
                        animate={{ x: hoveredIndex === index ? 5 : 0 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                      >
                        <span className="mr-2">Makaleyi Oku</span>
                        <ChevronRightIcon size={18} />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
