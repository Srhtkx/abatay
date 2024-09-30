import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import Resimm from "@/public/download.webp";
import { GoLaw } from "react-icons/go";

const cardData = {
  "yayin-1": {
    mainTitle: "Kamulaştırma Davasının Koşulları ve Yasal Süreci",
    mainContent:
      "Tutuklama, ceza muhakemesi sürecinde sanık veya şüphelinin özgürlüğünü en ağır şekilde sınırlayan koruma tedbiridir. Tutuklama kararı, sadece belirli koşullar ve yasal süreler dâhilinde alınabilir. Bu çalışmamızda, Ceza Muhakemesi Kanunu (CMK) çerçevesinde tutuklama tedbirinin koşulları ve tutukluluk süreleri ayrıntılı olarak ele alınacaktır.",
    kosul: "Tutuklama Tedbirinin Koşulları",
    kosul1:
      "Tutuklama kararı verilebilmesi için öncelikle şüpheli veya sanığın suç işlediğine dair kuvvetli şüphenin varlığı gereklidir. Bu şüphe, somut delillere dayanmalı ve hukuki değerlendirmeyi haklı kılacak nitelikte olmalıdır. (CMK m.100/1).",
    kosul2:
      "Tutuklama kararı verilebilmesi için kuvvetli suç şüphesinin yanı sıra, CMK m.100/2’de belirtilen tutuklama nedenlerinin de bulunması gerekmektedir. Bu nedenler şunlardır:",
    kosul21:
      "Kaçma Şüphesi: Şüpheli veya sanığın kaçacağına dair somut olguların varlığı halinde tutuklama kararı verilebilir. Kaçma şüphesinin varlığı, şüpheli veya sanığın tutuklanmasını meşru kılacak derecede olmalıdır.",
    kosul22:
      "Delilleri Karartma Tehlikesi: Şüpheli veya sanığın delilleri yok etme, gizleme veya değiştirme ihtimalinin bulunduğu durumlarda tutuklama kararı verilebilir. Delil karartma tehlikesi somut olayla desteklenmelidir.",
    kosul23:
      "Tutuklama tedbiri uygulanırken, ölçülülük ilkesi gözetilmelidir. Bu ilkeye göre, tutuklama tedbiri, uygulanacak diğer tedbirlerin yetersiz kaldığı durumlarda ve amaca uygun düşecek şekilde uygulanmalıdır (CMK m.100/1). Daha hafif koruma tedbirleri yeterli olabilecekse, tutuklama tedbirine başvurulmamalıdır.",
    whyUs: "Tutukluluk Süreleri",
    contactUs:
      "Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesi (AİHM), tutukluluk sürelerinin uzunluğu ve tutuklama tedbirinin uygulanmasına ilişkin önemli kriterler ortaya koymuştur. AİHM, tutukluluk süresinin makul olup olmadığının her somut olayın özelliklerine göre değerlendirilmesi gerektiğini belirtmiş olup uzun tutukluluk süreleri, makul sürede yargılanma hakkının ihlali olarak değerlendirilebilir.",
    baslik: "Borçlunun Aciz Hali :",
    baslik1: "Tasarruf İşlemi :",
    baslik3: "Zarar Şartı :",
    baslik4: "Aciz Vesikası :",
    baslik5: "Dava Süreci :",
    sonuc:
      "Sonuç Olarak; Sonuç olarak; tutuklama tedbiri, bireyin özgürlüğünü ciddi şekilde kısıtladığı için yalnızca yasal koşullar altında ve belirli sürelerle uygulanmalıdır. Kuvvetli suç şüphesinin varlığı, tutuklama nedenlerinin bulunması ve ölçülülük ilkesi, tutuklama kararı verilmesinde temel şartlardır. Ayrıca soruşturma ve kovuşturma evresinde tutukluluk sürelerinin makul olması, hukukun üstünlüğü ve insan hakları açısından büyük önem taşımaktadır. Anayasa Mahkemesi ve AİHM kararları, bu konuda yol gösterici niteliktedir ve tutuklama tedbirinin uygulanmasında dikkate alınmalıdır.",
  },
  "yayin-2": {
    mainTitle: "Tasarrufun İptali Davasının Yasal Koşulları",
    mainContent:
      "Tasarrufun iptali davası, borçlunun malvarlığını üçüncü kişilere devretmesi veya zarara yol açan tasarruf işlemlerinin, alacaklıların haklarını korumak amacıyla iptal edilmesini sağlayan bir hukuk müessesesidir. Bu dava, borçluların mal kaçırma girişimlerine karşı alacaklıları koruma amacı taşır. Türk hukukunda, bu davanın düzenlendiği temel kaynak İcra ve İflas Kanunu madde 277 ve devamı hükümleridir. Bu hükümler, borçlunun malvarlığında yaptığı tasarrufların, alacaklıların haklarını ihlal etmesi halinde iptal edilebilmesine olanak tanır. Özellikle borçlunun ödeme güçlüğü içinde olduğu durumlarda bu davalar büyük önem taşır.",
    kosul: "Tasarrufun İptali Davasının Yasal Koşulları",
    baslik: "Borçlunun Aciz Hali :",

    kosul1:
      "Borçlunun borçlarını ödeyemeyecek durumda olması, yani ödeme güçlüğü içinde bulunması gerekir. Bu durum, aciz vesikası ile belgelenebilir.",
    baslik1: "Tasarruf İşlemi :",
    kosul2:
      "Tutuklama kararı verilebilmesi için kuvvetli suç şüphesinin yanı sıra, CMK m.100/2’de belirtilen tutuklama nedenlerinin de bulunması gerekmektedir. Bu nedenler şunlardır:",
    baslik3: "Zarar Şartı :",
    kosul21:
      "Borçlunun malvarlığını azaltıcı nitelikte bir tasarruf işlemi yapmış olması gereklidir. Bu işlemler, mal devri, bağış veya satış gibi işlemleri kapsayabilir.",
    baslik4: "Aciz Vesikası :",
    kosul22:
      " Borçlunun yaptığı tasarruf işleminin, alacaklının alacağına kavuşmasını engelleyecek veya zorlaştıracak nitelikte olması gereklidir.",
    baslik5: "Dava Süreci :",
    kosul23:
      "Tutuklama tedbiri uygulanırken, ölçülülük ilkesi gözetilmelidir. Bu ilkeye göre, tutuklama tedbiri, uygulanacak diğer tedbirlerin yetersiz kaldığı durumlarda ve amaca uygun düşecek şekilde uygulanmalıdır (CMK m.100/1). Daha hafif koruma tedbirleri yeterli olabilecekse, tutuklama tedbirine başvurulmamalıdır.",
    sonuc:
      "Sonuç Olarak; Sonuç olarak; tutuklama tedbiri, bireyin özgürlüğünü ciddi şekilde kısıtladığı için yalnızca yasal koşullar altında ve belirli sürelerle uygulanmalıdır. Kuvvetli suç şüphesinin varlığı, tutuklama nedenlerinin bulunması ve ölçülülük ilkesi, tutuklama kararı verilmesinde temel şartlardır. Ayrıca soruşturma ve kovuşturma evresinde tutukluluk sürelerinin makul olması, hukukun üstünlüğü ve insan hakları açısından büyük önem taşımaktadır. Anayasa Mahkemesi ve AİHM kararları, bu konuda yol gösterici niteliktedir ve tutuklama tedbirinin uygulanmasında dikkate alınmalıdır.",
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  "tutuklanma-kosul": {
    mainTitle: "Tutuklama Tedbirinin Koşulları ve Tutuklulukta Süre",
    mainContent:
      "Tutuklama, ceza muhakemesi sürecinde sanık veya şüphelinin özgürlüğünü en ağır şekilde sınırlayan koruma tedbiridir. Tutuklama kararı, sadece belirli koşullar ve yasal süreler dâhilinde alınabilir. Bu çalışmamızda, Ceza Muhakemesi Kanunu (CMK) çerçevesinde tutuklama tedbirinin koşulları ve tutukluluk süreleri ayrıntılı olarak ele alınacaktır.",
    kosul: "Tutuklama Tedbirinin Koşulları",
    kosul1:
      "Tutuklama kararı verilebilmesi için öncelikle şüpheli veya sanığın suç işlediğine dair kuvvetli şüphenin varlığı gereklidir. Bu şüphe, somut delillere dayanmalı ve hukuki değerlendirmeyi haklı kılacak nitelikte olmalıdır. (CMK m.100/1).",
    kosul2:
      "Tutuklama kararı verilebilmesi için kuvvetli suç şüphesinin yanı sıra, CMK m.100/2’de belirtilen tutuklama nedenlerinin de bulunması gerekmektedir. Bu nedenler şunlardır:",
    kosul21:
      "Kaçma Şüphesi: Şüpheli veya sanığın kaçacağına dair somut olguların varlığı halinde tutuklama kararı verilebilir. Kaçma şüphesinin varlığı, şüpheli veya sanığın tutuklanmasını meşru kılacak derecede olmalıdır.",
    kosul22:
      "Delilleri Karartma Tehlikesi: Şüpheli veya sanığın delilleri yok etme, gizleme veya değiştirme ihtimalinin bulunduğu durumlarda tutuklama kararı verilebilir. Delil karartma tehlikesi somut olayla desteklenmelidir.",
    kosul23:
      "Tutuklama tedbiri uygulanırken, ölçülülük ilkesi gözetilmelidir. Bu ilkeye göre, tutuklama tedbiri, uygulanacak diğer tedbirlerin yetersiz kaldığı durumlarda ve amaca uygun düşecek şekilde uygulanmalıdır (CMK m.100/1). Daha hafif koruma tedbirleri yeterli olabilecekse, tutuklama tedbirine başvurulmamalıdır.",
    whyUs:
      "Abatay & İşeri Avukatlık Bürosu'nun müvekkillerimize İcra ve İflas Hukuku kapsamında profesyonel olarak verdiğimiz başlıca hizmetlerimiz",
    contactUs:
      "Her türlü sorularınız ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
    baslik: "Borçlunun Aciz Hali :",
    baslik1: "Tasarruf İşlemi :",
    baslik3: "Zarar Şartı :",
    baslik4: "Aciz Vesikası :",
    baslik5: "Dava Süreci :",
    sonuc:
      "Sonuç Olarak; Sonuç olarak; tutuklama tedbiri, bireyin özgürlüğünü ciddi şekilde kısıtladığı için yalnızca yasal koşullar altında ve belirli sürelerle uygulanmalıdır. Kuvvetli suç şüphesinin varlığı, tutuklama nedenlerinin bulunması ve ölçülülük ilkesi, tutuklama kararı verilmesinde temel şartlardır. Ayrıca soruşturma ve kovuşturma evresinde tutukluluk sürelerinin makul olması, hukukun üstünlüğü ve insan hakları açısından büyük önem taşımaktadır. Anayasa Mahkemesi ve AİHM kararları, bu konuda yol gösterici niteliktedir ve tutuklama tedbirinin uygulanmasında dikkate alınmalıdır.",
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
              <p className="text-gray-600">{card.mainContent}</p>
              <p className="text-gray-600">{card.mainContent}</p>
              <p className="text-gray-600">{card.mainContent}</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 text-black border-none shadow-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl">{card.kosul} </CardTitle>
              <CardContent>
                <p>
                  <span className="font-bold"> {card.baslik}</span> <br />
                  {card.kosul1}{" "}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">{card.baslik1}</span> <br />
                  {card.baslik3}
                  {card.kosul21}
                  {card.baslik4}
                  <li>{card.kosul21}</li>
                  <li>{card.kosul22}</li>
                  <li>{card.kosul23} </li>
                </p>
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="bg-gray-50 text-black border-none shadow-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl">{card.whyUs} </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {" "}
                Soruşturma evresinde tutukluluk süreleri, suçun niteliğine göre
                farklılık gösterir:
              </p>
              <li>
                Ağır Ceza Mahkemesinin Görev Alanına Girmeyen Suçlar: Bu suçlar
                için tutukluluk süresi en fazla 6 aydır. Ancak, zorunlu hallerde
                bu süre 1 kez uzatılabilir (CMK m.102/2).
              </li>
              <li>
                Ağır Ceza Mahkemesinin Görev Alanına Giren Suçlar: Bu suçlar
                için tutukluluk süresi en fazla 1 yıldır. Zorunlu hallerde bu
                süre, 6 ayı geçmemek üzere uzatılabilir (CMK m.102/3).
              </li>
            </CardContent>
            <CardHeader>
              <CardTitle>Kovuşturma Evresinde Tutukluluk Süreleri</CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                Kovuşturma evresinde tutukluluk süreleri, davanın görüldüğü
                mahkemeye göre değişir:
              </p>
              <li>
                Asliye Ceza Mahkemesi: Bu mahkemelerde yargılanan sanıklar için
                tutukluluk süresi en fazla 1 yıldır. Zorunlu hallerde bu süre, 6
                ayı geçmemek üzere uzatılabilir (CMK m.102/4).
              </li>
              <li>
                Ağır Ceza Mahkemesi: Ağır ceza mahkemelerinde yargılanan
                sanıklar için tutukluluk süresi en fazla 2 yıldır. Zorunlu
                hallerde 3 yılı geçmemek üzere tutuklama tedbiri uzatılabilir
                (CMK m.102/5).
              </li>
            </CardContent>
          </Card>

          <Card className="bg-green-950 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">
                Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesi Kararları
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{card.contactUs}</p>
              <p>{card.sonuc}</p>
            </CardContent>
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
}
