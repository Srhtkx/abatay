"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:info@abatayiseri.av.tr?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(`İsim: ${name}\n\nMesaj: ${message}`)}`;

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 p-4">
          {/* Sol taraf - İletişim Bilgileri ve Harita */}
          <div className="md:w-1/3 space-y-6">
            <h1 className="text-3xl font-bold mb-8">Bize Ulaşın</h1>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h2 className="font-semibold">Adres</h2>
                  <p className="text-sm text-muted-foreground">
                    Grand Pera, İstiklal Cd. No: 56/58 K:3 D:5 Beyoğlu/İstanbul
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <div>
                  <h2 className="font-semibold">Telefon</h2>
                  <p className="text-sm text-muted-foreground">
                    +90 (850) 309 98 74
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="w-5 h-5 text-primary" />
                <div>
                  <h2 className="font-semibold">E-posta</h2>
                  <p className="text-sm text-muted-foreground">
                    info@abatayiseri.av.tr
                  </p>
                </div>
              </div>
            </div>
            {/* Google Maps */}
            <div className="w-full h-52 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.563828254144!2d28.97695761154743!3d41.03479757122726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7611ef98289%3A0xc5448d14e70311fb!2sGrand%20Pera%20AVM!5e0!3m2!1str!2str!4v1726864087629!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Sağ taraf - İletişim Formu */}
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-3xl font-bold">İletişim</h1>

            <div>
              <Label htmlFor="name">İsim</Label>
              <Input
                id="name"
                placeholder="Adınız Soyadınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="subject">Konu</Label>
              <Input
                id="subject"
                placeholder="Mesajınızın konusu"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Mesaj</Label>
              <Textarea
                id="message"
                placeholder="Mesajınızı buraya yazın"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="file">İlgili Dosya (varsa)</Label>
              <Input id="file" type="file" />
            </div>
            <Link href={mailtoLink}>
              <Button className="w-full bg-green-900 hover:bg-green-800">
                Gönder
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
