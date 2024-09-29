import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Scale,
  Briefcase,
  UserCheck,
  Gavel,
  Globe,
  Package,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "İcra & İflas Hukuku",
    icon: Scale,
    description: "Borç tahsilatı ve iflas süreçlerinde uzman destek.",
  },
  {
    title: "Ticaret & Şirketler Hukuku",
    icon: Briefcase,
    description:
      "Şirket kuruluşu, birleşme ve satın almalar konusunda danışmanlık.",
  },
  {
    title: "İş Hukuku & Sosyal Güvenlik Hukuku",
    icon: UserCheck,
    description:
      "İşçi-işveren ilişkileri ve sosyal güvenlik konularında hukuki destek.",
  },
  {
    title: "Ceza Hukuku",
    icon: Gavel,
    description: "Ceza davalarında savunma ve hukuki temsil.",
  },
  {
    title: "Bilişim & E-ticaret Hukuku",
    icon: Globe,
    description: "Dijital dünyada hukuki koruma ve danışmanlık.",
  },
  {
    title: "Gümrük Hukuku",
    icon: Package,
    description: "Gümrük işlemleri ve uyuşmazlıklarında uzman destek.",
  },
  {
    title: "Fikri Mülkiyet Hukuku",
    icon: AlertTriangle,
    description: "Patent, marka ve telif hakları konusunda hukuki koruma.",
  },
];

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Hizmetlerimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            layout
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <service.icon className="w-6 h-6 text-primary" />
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href="#"
                  className={`text-muted-foreground transition-all duration-300 ${
                    expandedIndex === index
                      ? "max-h-40"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {service.description}
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
