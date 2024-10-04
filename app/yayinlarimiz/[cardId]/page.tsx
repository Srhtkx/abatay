import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Resimm from "@/public/download.webp";
import { GoLaw } from "react-icons/go";

const cardData = {
  "yayin-1": {
    mainTitle: "Kamulaştırma Davasının Koşulları ve Yasal Süreci",
    mainContent:
      "Kamulaştırma, kamu yararının gerektirdiği durumlarda, taşınmaz malların bedelinin ödenerek devlet veya kamu tüzel kişileri tarafından zorla mülkiyet devrinin sağlanması sürecidir. Bu süreç, kamu hizmetlerinin etkin bir şekilde yürütülebilmesi için zorunlu olabilir. Kamulaştırma davaları ise, kamulaştırma işlemlerine karşı taşınmaz mal sahiplerinin haklarını korumak amacıyla açılan davalardır. Bu makalede, kamulaştırma davasının hukuki dayanağı, şartları ve dava süreci ele alınacaktır.",
    hukukiDayanak: {
      title: "Kamulaştırma Davasının Hukuki Dayanağı",
      content:
        "Kamulaştırma işlemleri, 2942 sayılı Kamulaştırma Kanunu'nda düzenlenmiştir. Bu Kanun, kamulaştırma sürecinin usul ve esaslarını belirler. Ayrıca, Anayasa'nın 46. maddesi de kamulaştırmanın kamu yararı gözetilerek yapılabileceğini ve bedelinin peşin ödeneceğini hükme bağlamaktadır.",
    },
    yasalSartlar: {
      title: "Kamulaştırma Davasının Yasal Şartları",
      content:
        "Kamulaştırma davasının açılabilmesi için belirli şartların sağlanması gerekmektedir:",
      items: [
        "Kamu Yararı Kararı: Kamulaştırma işleminin başlatılabilmesi için kamu yararı kararı alınmalıdır. Bu karar, kamulaştırmayı gerçekleştirecek olan idare tarafından alınır.",
        "Kamulaştırma Bedelinin Tespiti ve Ödenmesi: Kamulaştırılacak taşınmazın bedeli, idare tarafından belirlenir ve taşınmaz mal sahibine ödenir. Taşınmaz mal sahibi, bedelin yeterli olmadığını düşündüğü takdirde, kamulaştırma bedelinin artırılması talebiyle dava açabilir.",
        "İdari İşlemlere Uyulması: Kamulaştırma işlemlerinin hukuka uygun olarak gerçekleştirilmesi gerekmektedir. İdari işlemlerde usul hatası veya yetki aşımı gibi durumlar, kamulaştırma davasına konu olabilir.",
      ],
    },
    davaSureci: {
      title: "Dava Süreci",
      content:
        "Kamulaştırma davası, taşınmaz mal sahibi tarafından idareye karşı açılan bir davadır. Dava süreci şu şekilde işlemektedir:",
      items: [
        "Dava Dilekçesi: Taşınmaz mal sahibi, kamulaştırma işleminin iptali veya bedelin artırılması talebiyle dava dilekçesi hazırlayarak ilgili idare mahkemesine başvurur.",
        "İlk İnceleme: Mahkeme, dava dilekçesini inceler ve dava şartlarının mevcut olup olmadığını değerlendirir. Dava şartlarının mevcut olduğu kanaatine varırsa, davayı esastan incelemeye başlar.",
        "Keşif ve Bilirkişi İncelemesi: Mahkeme, kamulaştırılan taşınmazın değerinin tespiti için keşif yapabilir ve bilirkişi incelemesi yaptırabilir. Bilirkişi raporu, taşınmazın gerçek değerinin belirlenmesinde önemli bir delildir.",
        "Karar: Mahkeme, davayı değerlendirerek kararını verir. Kararda, kamulaştırma bedelinin artırılması, kamulaştırma işleminin iptali veya davanın reddi yönünde hüküm kurulabilir.",
      ],
    },
    sonuc:
      "Sonuç olarak; kamulaştırma davaları, taşınmaz mal sahiplerinin haklarını koruma amacı taşır ve kamulaştırma işlemlerinin hukuka uygunluğunu denetler. 2942 sayılı Kamulaştırma Kanunu ve ilgili mevzuat çerçevesinde, kamu yararının gerektirdiği hallerde gerçekleştirilen kamulaştırma işlemleri hukuki denetime tabidir. Taşınmaz mal sahipleri, kamulaştırma bedelinin yeterli olmadığını düşündüklerinde veya kamulaştırma işlemlerinde hukuka aykırılık tespit ettiklerinde dava açabilirler. Mahkemeler, kamulaştırma davalarında taşınmazın gerçek değerinin tespiti ve işlemlerin hukuka uygunluğunu değerlendirerek karar verirler.",
  },
  "yayin-2": {
    mainTitle: "Tasarrufun İptali Davasının Yasal Koşulları",
    mainContent:
      "Tasarrufun iptali davası, borçlunun malvarlığını üçüncü kişilere devretmesi veya zarara yol açan tasarruf işlemlerinin, alacaklıların haklarını korumak amacıyla iptal edilmesini sağlayan bir hukuk müessesesidir. Bu dava, borçluların mal kaçırma girişimlerine karşı alacaklıları koruma amacı taşır. Türk hukukunda, bu davanın düzenlendiği temel kaynak İcra ve İflas Kanunu madde 277 ve devamı hükümleridir. Bu hükümler, borçlunun malvarlığında yaptığı tasarrufların, alacaklıların haklarını ihlal etmesi halinde iptal edilebilmesine olanak tanır. Özellikle borçlunun ödeme güçlüğü içinde olduğu durumlarda bu davalar büyük önem taşır.",
    hukukiDayanak: {
      title: "Tasarrufun İptali Davasının Yasal Koşulları",
      content:
        "Tasarrufun iptali davası açılabilmesi için bazı yasal koşulların mevcut olması gerekmektedir:",
    },
    yasalSartlar: {
      title: "Yasal Koşullar",
      content:
        "Tasarrufun iptali davası için gerekli yasal koşullar şunlardır:",
      items: [
        "Borçlunun Aciz Hali: Borçlunun borçlarını ödeyemeyecek durumda olması, yani ödeme güçlüğü içinde bulunması gerekir. Bu durum, aciz vesikası ile belgelenebilir.",
        "Tasarruf İşlemi: Borçlunun malvarlığını azaltıcı nitelikte bir tasarruf işlemi yapmış olması gereklidir. Bu işlemler, mal devri, bağış veya satış gibi işlemleri kapsayabilir.",
        "Zarar Şartı: Borçlunun yaptığı tasarruf işleminin, alacaklının alacağına kavuşmasını engelleyecek veya zorlaştıracak nitelikte olması gereklidir.",
      ],
    },
    davaSureci: {
      title: "Aciz Vesikası ve Dava Süreci",
      content: "Aciz vesikası ve dava süreci hakkında önemli bilgiler:",
      items: [
        "Aciz Vesikası: Aciz vesikası, borçlunun ödeme güçlüğü içinde olduğunu gösteren ve icra takibinin sonuçsuz kaldığını belgeleyen bir belgedir. Bu vesika, tasarrufun iptali davalarında önemli bir delil niteliğindedir.",
        "Dava Süreci: Tasarrufun iptali davası, borçlunun tasarruf işlemini gerçekleştirdiği tarihten itibaren belirli süreler içinde açılmalıdır. Bu süreler, işlemin türüne göre değişiklik gösterebilir.",
        "Dava Açma Süresi: Genel olarak, iptal davası açma süresi tasarrufun yapıldığı tarihten itibaren beş yıldır.",
      ],
    },
    sonuc:
      "Sonuç olarak; tasarrufun iptali davası, borçlunun mal kaçırma girişimlerine karşı alacaklıları korumak amacıyla düzenlenmiş önemli bir hukuki mekanizmadır. Bu dava, alacaklıların haklarını koruyarak, borçlunun malvarlığında yaptığı haksız tasarrufların iptal edilmesini sağlar. İcra ve İflas Kanunu'nun ilgili hükümleri çerçevesinde, borçlunun aciz hali ve yapılan tasarruf işlemlerinin alacaklıların haklarını ihlal etmesi durumunda bu dava açılabilir. Aciz vesikası, bu davalarda önemli bir delil olarak kullanılır ve yargılamanın her aşamasında mahkemeye sunulabilir.",
  },
  "yayin-3": {
    mainTitle: "Tutuklama Tedbirinin Koşulları ve Tutuklulukta Süre",
    mainContent:
      "Tutuklama, ceza muhakemesi sürecinde sanık veya şüphelinin özgürlüğünü en ağır şekilde sınırlayan koruma tedbiridir. Tutuklama kararı, sadece belirli koşullar ve yasal süreler dâhilinde alınabilir. Bu çalışmamızda, Ceza Muhakemesi Kanunu (CMK) çerçevesinde tutuklama tedbirinin koşulları ve tutukluluk süreleri ayrıntılı olarak ele alınacaktır.",
    hukukiDayanak: {
      title: "Tutuklama Tedbirinin Koşulları",
      content:
        "Tutuklama kararı verilebilmesi için öncelikle şüpheli veya sanığın suç işlediğine dair kuvvetli şüphenin varlığı gereklidir. Bu şüphe, somut delillere dayanmalı ve hukuki değerlendirmeyi haklı kılacak nitelikte olmalıdır. (CMK m.100/1).",
    },
    yasalSartlar: {
      title: "Tutuklama Nedenleri ve Ölçülülük İlkesi",
      content:
        "Tutuklama kararı verilebilmesi için kuvvetli suç şüphesinin yanı sıra, CMK m.100/2'de belirtilen tutuklama nedenlerinin de bulunması gerekmektedir:",
      items: [
        "Kaçma Şüphesi: Şüpheli veya sanığın kaçacağına dair somut olguların varlığı halinde tutuklama kararı verilebilir.",
        "Delilleri Karartma Tehlikesi: Şüpheli veya sanığın delilleri yok etme, gizleme veya değiştirme ihtimalinin bulunduğu durumlarda tutuklama kararı verilebilir.",
        "Ölçülülük İlkesi: Tutuklama tedbiri uygulanırken, ölçülülük ilkesi gözetilmelidir. Bu ilkeye göre, tutuklama tedbiri, uygulanacak diğer tedbirlerin yetersiz kaldığı durumlarda ve amaca uygun düşecek şekilde uygulanmalıdır (CMK m.100/1).",
      ],
    },
    davaSureci: {
      title: "Tutukluluk Süreleri",
      content:
        "Tutukluluk süreleri, soruşturma ve kovuşturma evrelerine göre farklılık gösterir:",
      items: [
        "Soruşturma Evresinde: Ağır ceza mahkemesinin görev alanına girmeyen suçlar için en fazla 6 ay, ağır ceza mahkemesinin görev alanına giren suçlar için en fazla 1 yıldır.",
        "Kovuşturma Evresinde: Asliye ceza mahkemesinde yargılanan sanıklar için en fazla 1 yıl, ağır ceza mahkemesinde yargılanan sanıklar için en fazla 2 yıldır.",
        "Uzatma Süreleri: Zorunlu hallerde, belirtilen süreler uzatılabilir. Ancak, uzatma süreleri de kanunda belirtilen sınırlar içinde olmalıdır.",
      ],
    },
    sonuc:
      "Sonuç olarak; tutuklama tedbiri, bireyin özgürlüğünü ciddi şekilde kısıtladığı için yalnızca yasal koşullar altında ve belirli sürelerle uygulanmalıdır. Kuvvetli suç şüphesinin varlığı, tutuklama nedenlerinin bulunması ve ölçülülük ilkesi, tutuklama kararı verilmesinde temel şartlardır. Ayrıca soruşturma ve kovuşturma evresinde tutukluluk sürelerinin makul olması, hukukun üstünlüğü ve insan hakları açısından büyük önem taş ımaktadır. Anayasa Mahkemesi ve AİHM kararları, bu konuda yol gösterici niteliktedir ve tutuklama tedbirinin uygulanmasında dikkate alınmalıdır.",
  },
};

export default function YayinDetaySayfasi({
  params,
}: {
  params: { cardId: string };
}) {
  const yayin = cardData[params.cardId as keyof typeof cardData];

  if (!yayin) {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {yayin.mainTitle}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="flex items-center gap-4 text-2xl font-bold mb-6">
          <span className="text-green-900">ABATAY & İŞERİ</span>
          <GoLaw className="text-green-950" />
          <span>Avukatlık Bürosu</span>
        </h2>
        <h3 className="text-3xl font-bold mb-4">Yayınlarımız</h3>
        <p className="text-gray-600 mb-8">
          Müvekkillerimizin talepleri doğrultusunda, konusunda uzman
          Avukatlarımız ile hizmet verdiğimiz çalışma alanlarımız;
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-950">
                {yayin.mainTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{yayin.mainContent}</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-950">
                {yayin.hukukiDayanak.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{yayin.hukukiDayanak.content}</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-950">
                {yayin.yasalSartlar.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{yayin.yasalSartlar.content}</p>
              <ul className="list-disc pl-5 space-y-2">
                {yayin.yasalSartlar.items.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-950">
                {yayin.davaSureci.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-950 mb-4">{yayin.davaSureci.content}</p>
              <ul className="list-disc pl-5 space-y-2">
                {yayin.davaSureci.items.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-950 text-white col-span-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Sonuç</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{yayin.sonuc}</p>
            </CardContent>
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
}
