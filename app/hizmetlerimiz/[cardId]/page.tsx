import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Scale, Key, Building2 } from "lucide-react";
import Image from "next/image";
import Resimm from "@/public/download.webp";
import { GoLaw } from "react-icons/go";
import Link from "next/link";

const cardData = {
  "icra-iflas-hukuk": {
    mainTitle: "İcra ve İflas Hukuku Nedir?",
    mainContent:
      "İcra ve İflas Hukuku, bir ülkenin hukuk sisteminde borç tahsilatı ve borçluların mali sıkıntıları durumunda bu sürecin yönetilmesiyle ilgilenen bir alanı temsil eder. Temeli özel hukuk ilişkilerinden kaynaklanan borçlardan oluşmaktadır. İcra Hukuku, alacaklıların haklarını koruyarak borçluların varlıklarını kullanarak borçlarını tahsil etmelerini sağlar. Bu süreç, genellikle alacaklıların talebi üzerine başlar ve icra memurları veya icra daireleri tarafından yürütülür. İflas Hukuku ise borçlunun mali durumunun iflas noktasına gelmesine durumunda bu durumun yönetilmesiyle ilgilenir. İflas, borçlunun artık ödeyemez hale gelmesini ifade etmektedir. İflas süreci, mahkeme tarafından denetlenir ve borçlunun varlıkları belirli bir düzen içinde alacaklılara dağıtılır, bu şekilde alacaklıların hakları korunur. İflas süreci, borçlunun mevcut varlıklarını satarak borçlarını ödemesi veya borçların belirli bir süre ertelenmesi gibi çeşitli seçenekleri içerebilir. İcra ve İflas Hukuku, alacakların haklarını korurken borçlulara adil bir süreç sağlamayı hedefler. Bu nedenle, icra ve iflas süreçleri genellikle karmaşık ve detaylı hukuki düzenlemelere tabidir.",
    services: [
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
    ],
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  "sozlesmeler-hukuku": {
    mainTitle: "Sözleşmeler Hukuku Nedir ?",
    mainContent:
      "Sözleşmeler hukuku, bireylerin ve işletmelerin arasındaki ilişkilerde temel bir rol oynar ve hemen hemen her yönüyle günlük yaşamın bir parçasıdır. Bu hukuk dalı, birçok farklı türde sözleşmeyi kapsar: mal satışı, hizmet sunumu, kira sözleşmeleri, iş sözleşmeleri gibi. Sözleşmeler hukuku, taraflar arasındaki ilişkileri düzenleyen bir çerçeve sunar ve bu ilişkilerin adil ve etkin bir şekilde yürütülmesini sağlamak için kurallar ve yöntemler belirler. Bu hukuki alan, sözleşmelerin oluşturulmasıyla başlar. Burada, taraflar arasındaki anlaşmanın nasıl yapıldığı, tekliflerin ve kabullerin ne şekilde gerçekleştiği, irade beyanlarının geçerliliği gibi konular ele alınır. Sözleşmenin geçerliliği, tarafların yetkisi, hile veya hata gibi unsurların varlığı gibi faktörlere dayanır. Ayrıca, sözleşmenin imzalanması, yazılı veya sözlü olarak yapılması gibi hususlar da önemlidir. Sözleşmeler hukuku ayrıca, sözleşmenin yorumlanması ve uygulanmasıyla ilgili konuları da ele alır. Sözleşmeler genellikle belirsizlikleri içerebilir veya taraflar arasında farklı yorumlara yol açabilir. Bu durumda, hukuki prensiplere ve mahkeme kararlarına dayanarak sözleşmenin ne anlama geldiği belirlenir. Ayrıca, tarafların sözleşmeyi yerine getirme yükümlülüklerini ve ihlal durumlarında uygulanacak yaptırımları düzenleyen kurallar da sözleşmeler hukuku kapsamındadır. Sonuç olarak, sözleşmeler hukuku, taraflar arasındaki sözleşmelerin oluşturulması, yorumlanması ve uygulanması süreçlerini düzenleyen kapsamlı bir hukuk alanıdır. Bu alan, iş dünyasından kişisel ilişkilere kadar geniş bir yelpazede kullanılır ve hukuki sistemin işleyişinde önemli bir rol oynar.",
    services: [
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
    ],
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  "ticaret-sirketler-hukuku": {
    mainTitle: "Ticaret & Şirketler Hukuku Nedir ?",
    mainContent:
      "Ticaret Hukuku alanındaki faaliyet alanımız, yurt dışında yerleşik şirketlerin Türkiye’de şube ve irtibat bürolarının kurulmasını, ortak teşebbüsler ve adi ortaklıklar oluşturmayı, şirketlerin yabancı ve/veya yerli hissedarları arasındaki hisse devir işlemlerinin yürütülmesini, devir ve birleşmelerde bütün hukuki açılardan danışmanlık hizmeti verilmesini, şirketlerin ve kurumların yeniden yapılandırılmasına ilişkin hukuki konularda destek olunmasını, risk sermayesi projelerini ve sair her türlü ticari işlemleri kapsamaktadır. Şirket ortakları arasında yaşanan uyuşmazlıkların çözümünde vermiş olduğumuz hukuki danışmanlığın yanı sıra ticari ve ekonomik hayatın aktif bir şekilde sürdürülebilmesi özeni müvekkillere hayatın olağan akışına uygun ve pratik önerilerde de bulunmaktayız.",
    services: [
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
    ],
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  "is-sosyal-hukuku": {
    mainTitle: "İş Hukuku & Sosyal Güvenlik Hukuku Nedir ?",
    mainContent:
      "İş Hukuku, başlıca işçi ve işveren arasındaki ilişkileri düzenleyen ve çalışma koşullarını belirleyen bir hukuk dalıdır. Bu alan, işçilerin haklarını, işverenin yükümlülüklerini, işe alım ve işten çıkarma süreçlerini, toplu iş sözleşmelerini ve sendikal hakları içerir. Temel olarak iş hukuku iş ilişkilerini düzenleyerek adil bir çalışma ortamı sağlamayı ve taraflar arasında dengeyi korumayı amaçlamaktadır. Sosyal Güvenlik Hukuku, bireylerin sosyal güvenlik sistemlerinden faydalanmalarını sağlayan yasal düzenlemeleri kapsamaktadır. Bu sistemler, emeklilik, malullük, sağlık sigortası, işsizlik tardımı gibi çeşitli alanlarda destek sunmaktadırlar. Sosyal güvenlik hukuku, çalışanların sosyal haklarına ve güvencelerine odaklanarak, yaşam standartlarını yükseltmeyi ve ekonomik güvenceyi sağlamayı amaçlar. Her iki hukuk dalı da çalışma ilişkilerinin düzenlenmesi ve çalışanların haklarının korunması açısından oldukça önemlidir. İş hukuku, işçi ve işveren arasındaki dengeli bir ilişkiyi sağlamayı amaçlarken; sosyal güvenlik hukuku ise bireylerin sosyal refahını artırmayı hedeflemektedir.",
    services: [
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
    ],
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  "ceza-hukuku": {
    mainTitle: "Ceza Hukuku Nedir ?",
    mainContent:
      "Ceza Hukuku, toplumun güvenliğini korumak ve adil bir şekilde işlemesini sağlamak amacıyla suç işleyen kişilere uygulanacak cezaları belirleyen bir hukuk dalıdır. Suçlar genellikle toplumun genel düzenine zarar veren eylemler olarak kabul edilir ve ceza hukuku bu suçların tanımını yaparak uygun cezaları belirlemektedir. Ceza yargılama süreci, suç işlendiğinde izlenecek yargılama sürecini düzenler. Bu süre., suçlamaların incelenmesi, kanıtların toplanması, sanıkların savunma haklarının korunması ve mahkeme kararlarının verilmesini içerir. Adil bir yargılama süreci, suç işleyenlerin haklarını korur ve doğru kararların verilmesini sağlar. Ceza hukuku ayrıca suçların önlenmesi için önleyici tedbirler almayı da içermektedir. Bu tedbirler, suç işleme olasılığını azaltmayı ve toplumun genel düzenini korumayı amaçlamaktadır. Önleyici tedbirler, eğitim programları, toplumsal farkındalık kampanyaları ve güvenlik önlemleri gibi çeşitli yöntemlerle uygulanabilmektedir. Sanıkların adil bir şekilde yargılanma hakları ve masumiyet karinesi gibi temel hakları, ceza hukuku tarafından korunur. Ceza hukuku, hukuka uygun cezalandırma yöntemlerinin kullanılmasını ve insanlık onurunun korunmasını sağlar. Toparlayacak olursak, ceza hukuku suç işleyen kişilere uygulanacak cezaları belirlemekle birlikte, adil bir yargılama sürecini sağlar, suçların önlenmesi için önleyici tedbirler alır ve temel hakların korunmasını amaçlar. Bu sayede toplumun güvenliği ve huzuru sağlanırken, adaletin tecelli etmesi amaçlanmaktadır.",
    services: [
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
    ],
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  "bilisim-eticaret-hukuku": {
    mainTitle: "Bilişim & E-ticaret Hukuku Nedir ?",
    mainContent:
      "Teknolojinin günümüzde geldiği konum itibariyle, internet artık başlı başına alternatif bir gerçeklik haline gelmiştir. Bunun sonucunda bu gerçekliğin de bazı kurallara tabi olmasına gereksinim duyulmuş ve bilişim hukuku alanıyla hukuk kurallarının sanal âleme uyarlanması gerekliliği hasıl olmuştur. E-ticaret hukuku ise internet üzerinden yapılan ticari işlemlerin yasal düzenlemeleri kapsamaktadır. Çevrimiçi ticaretin tarafları arasındaki hak ve sorumlulukları belirler ve dijital ticaret platformlarının güvenliğini sağlar. Bu alan, çevrimiçi sözleşmelerin oluşturulması, tüketici haklarının korunması, dijital ödeme sistemlerinin yönetilmesi gibi konuları kapsamaktadır. Her iki hukuk dalı da oldukça dinamik, teknolojik gelişmeleri ve dijital dönüşüme uyum sağlayarak sürekli olarak güncellenmektedir.",
    services: [
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
    ],
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  "gumruk-hukuku": {
    mainTitle: "Gümrük Hukuku Nedir ?",
    mainContent:
      "Gümrük hukuku, bir ülkenin sınırları içinde mal ve hizmetlerin uluslararası ticaret yoluyla girişini ve çıkışını düzenleyen kapsamlı bir yasal düzenlemeler bütünüdür. Bu hukuk dalı, ulusal güvenlik, ekonomik politikalar ve uluslararası ticaret anlaşmalarının karmaşıklığıyla derinlemesine bağlantılıdır. Gümrük hukuku, gümrük vergileri, ithalat ve ihracat prosedürleri, lisanslama gereklilikleri ve gümrük denetimleri gibi çeşitli konuları içerir. Temel hedefi, ülkenin gümrük politikalarını etkin bir şekilde yönetmek ve uluslararası ticaretin akışını dengelemektir.",
    services: [
      { icon: Briefcase, text: "İcra takip işlemleri" },
      { icon: Scale, text: "Alacak davaları" },
      { icon: Key, text: "Rehin ve haciz işlemleri" },
      { icon: Building2, text: "İflas işlemleri" },
    ],
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  // Add more card data for other card IDs...
};

export default function AboutCardPage({
  params,
}: {
  params: { cardId: string };
}) {
  const card = cardData[params.cardId as keyof typeof cardData];

  if (!card) {
    notFound();
  }

  return (
    <div className="font-serif">
      <div className="relative h-72 bg-gray-500">
        <Image
          src={Resimm}
          alt="Hukuk bürosu ekip çalışması"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
          objectPosition="top"
        />
        <div className="absolute inset-0 bg-green-950 bg-opacity-75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {card.mainTitle}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <br />
        <h2 className="flex gap-4">
          {" "}
          <span className="text-green-900 font-bold">ABATAY & İŞERİ</span>{" "}
          <GoLaw className="text-green-950" />
          Avukatlık Bürosu
        </h2>
        <br />
        <h1 className="text-4xl ">Yayınlarımız</h1>
        <br />
        <p className="text-gray-600">
          Müvekkillerimizin talepleri doğrultusunda, konusunda uzman
          Avukatlarımız ile hizmet verdiğimiz çalışma alanlarımız;
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white text-black border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl ">{card.mainTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{card.mainContent}</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 text-black border-none shadow-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl">Hizmetlerimiz</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {card.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <service.icon className="h-6 w-6" />
                    <span>{service.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 text-black border-none shadow-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl">Neden Biz ?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.whyUs}</p>
            </CardContent>
          </Card>

          <Card className="bg-green-950 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Bize Ulaşın</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{card.contactUs}</p>
              <Link href="/iletisim">
                <Button className="bg-white flex mx-auto px-12 text-green-950 rounded-md text-lg font-semibold hover:bg-green-800 hover:text-white">
                  Bizimle İletişime Geçin
                </Button>
              </Link>
            </CardContent>
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
}
