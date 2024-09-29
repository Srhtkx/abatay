import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-regal-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Şirket Adı ve Logo */}
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col items-center">
              {" "}
              <Link
                style={{
                  fontFamily: "Cormorant_Garamond",
                  letterSpacing: "6px",
                }}
                href="/"
                className="text-3xl text-white-900  no-underline"
              >
                ABATAY & İŞERİ
              </Link>
              <Link
                style={{
                  fontFamily: "Cormorant_Garamond",
                  letterSpacing: "4px",
                }}
                href="/"
                className="font-serif text-xl text-white-900 tracking-wider no-underline"
              >
                AVUKATLIK BÜROSU
              </Link>
            </div>
            <p className=" mt-2 text-gray-400">
              Hukuki çözümler ve danışmanlık hizmetleri
            </p>

            {/* Sosyal Medya İkonları */}
            <div className="flex justify-center mt-6 space-x-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 transform hover:scale-110 hover:text-pink-500"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 transform hover:scale-110 hover:text-black hover:bg-white"
              >
                <FaXTwitter size={28} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 transform hover:scale-110 hover:text-blue-600"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          {/* Yayınlarımız Alanları */}

          <div className=" mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">HİZMET ALANLARIMIZ</h3>
            <div className="flex space-x-6">
              <div className="">
                <ul className="text-gray-400 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      İcra & İflas Hukuku
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      Ticaret & Şirketler Hukuku
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      İş & Sosyal Güvenlik Hukuku
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300 "
                    >
                      Ceza Hukuku
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      Bilişim & E-Ticaret Hukuku
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      Gümrük Hukuku
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">YAYINLARIMIZ</h3>
            <div className="flex space-x-6">
              <div className="">
                <ul className="text-gray-400 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      Tasarrufun İptali Davasının Yasal Koşulları
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      İş Hukukunda Yeni Düzenlemeler
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/yayinlarimiz/1"
                      className="hover:text-white transition duration-300"
                    >
                      Kişisel Verilerin Korunması Kanununun Etkileri
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/yayinlarimiz"
                      className="hover:text-white transition "
                    >
                      Daha Fazla...
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-4">İLETİŞİM</h3>

            <p className="text-gray-400">Telefon: +90 (123) 456-7890</p>

            <p className="text-gray-400">E-posta: info@abatayiseri.com</p>
            <p className="text-gray-400">
              Adres: Grand Pera, İstiklal Cd. <br />
              No: 56/58 K:3 D:5 Beyoğlu/İstanbul
            </p>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="mt-10 text-center text-gray-500">
          <p>
            &copy; 2024 Abatay & İşeri Avukatlık Bürosu. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
