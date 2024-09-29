import Hakkimizda from "@/components/hakkimizda";

export default function About() {
  return (
    //   {/* Üst Kısım */}
    //   <header
    //     style={{
    //       position: "relative",
    //       height: "40vh",
    //       color: "white",
    //       overflow: "hidden",
    //     }}
    //   >
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: 0,
    //         left: 0,
    //         width: "100%",
    //         height: "100%",
    //         backgroundImage: 'url("/tokmak.avif")',
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         zIndex: 1, // Görsel arka planda kalacak
    //         filter: "brightness(67%)", // Karartma efekti
    //       }}
    //     ></div>

    //     {/* Karartma katmanı */}
    //     {/* <div
    //       style={{
    //         position: "absolute",
    //         top: 0,
    //         left: 0,
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "rgba(0, 0, 0, 0.5)", // Şeffaf siyah katman
    //         zIndex: 2, // Bu katman da arka plan görselinin üzerinde olacak
    //       }}
    //     ></div> */}
    //     <main
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         flexDirection: "row",
    //         height: "100%",
    //         zIndex: 3, // İçerik en üstte yer alacak
    //         position: "relative",
    //       }}
    //     >
    //       <div
    //         style={{
    //           padding: "50px",
    //           textAlign: "center",
    //           opacity: "0.8",
    //         }}
    //       >
    //         <h1
    //           style={{
    //             fontFamily: "Cormorant Garamond",
    //             fontSize: "2rem",
    //             margin: "0",
    //             color: "white",
    //           }}
    //         >
    //           ABATAY & İŞERİ
    //         </h1>
    //         <h2
    //           style={{
    //             fontFamily: "Cormorant Garamond",
    //             color: "white",
    //             fontSize: "1.3rem",
    //             margin: "0",
    //           }}
    //         >
    //           AVUKATLIK BÜROSU
    //         </h2>
    //         <p style={{ fontSize: "1rem", color: "white", padding: "10px" }}>
    //           İstanbul'un Kalbinde, Sizin Yanınızda...
    //         </p>
    //       </div>
    //     </main>
    //   </header>

    //   {/* İçerik Kısmı */}
    //   <div className="bg-white">
    //     <div className="container mx-auto p-4">
    //       <div className="container mx-auto p-4">
    //         <div className="flex flex-col md:flex-row gap-4">
    //           {/* İçerik Kartı */}
    //           <Card className="w-full md:w-2/3 order-1 md:order-1 border-none">
    //             <CardContent className="p-6">
    //               <h2 className="text-2xl font-bold mb-4">
    //                 ABATAY & İŞERİ AVUKATLIK BÜROSU
    //               </h2>
    //               <p className="text-gray-600 mb-4">
    //                 ABATAY & İŞERİ AVUKATLIK BÜROSU olarak; deneyimli ve dinamik
    //                 avukat kadromuzla müvekkillerimize geniş bir yelpazede
    //                 hukuki hizmet sunmaktayız. Her bir avukatımız, farklı hukuki
    //                 uzmanlık alanlarına sahip olmanın yanı sıra,
    //                 müvekkillerimizle empati kurmayı ve onların ihtiyaçlarını
    //                 anlayarak çalışmayı prensip haline getirmiştir.
    //               </p>
    //               <p className="text-gray-600 mb-4"></p>
    //             </CardContent>
    //           </Card>

    //           {/* Görsel Kartı */}
    //           <Card className="w-full md:w-1/3 order-2 md:order-2  border-green-900">
    //             <CardContent className="p-0">
    //               <div className="relative w-full h-64 md:h-full">
    //                 <Image
    //                   className="rounded-lg"
    //                   src={grandLogo}
    //                   alt="Örnek Görsel"
    //                 />
    //               </div>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </div>
    //       <br />
    //       <br />
    //       <h1 className="text-center text-2xl font-bold">
    //         Neden{" "}
    //         <span
    //           style={{
    //             fontFamily: "Cormorant Garamond",
    //             letterSpacing: "3px",
    //           }}
    //           className="text-green-900"
    //         >
    //           ABATAY & İŞERİ
    //         </span>{" "}
    //         <br />
    //         Avukatlık Bürosu ?
    //       </h1>
    //       <br />
    //       <div className="container mx-auto p-2">
    //         <div className="flex flex-col md:flex-row gap-4">
    //           {/* İlk İçerik Kartı */}

    //           <Card className="w-full md:w-1/2 border-green-900">
    //             <CardHeader>
    //               <CardTitle className="text-2xl font-bold">
    //                 Misyonumuz
    //               </CardTitle>
    //               <CardDescription></CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p className="text-gray-600 mb-4">
    //                 Müvekkillerimizin hayatlarını kolaylaştırmak, haklarını
    //                 savunmak ve adalete ulaşmalarına yardımcı olmak misyonumuzun
    //                 temelini oluşturmaktadır. Hukuki süreçlerin karmaşıklığı
    //                 karşısında açık iletişim ve etkili çözümlerle
    //                 müvekkillerimize destek olmayı amaçlamaktayız.
    //               </p>
    //               <p className="text-gray-600 mb-4"></p>
    //             </CardContent>
    //           </Card>

    //           {/* İkinci İçerik Kartı */}
    //           <Card className="w-full md:w-1/2  border-green-900">
    //             <CardHeader>
    //               <CardTitle className="text-2xl font-bold">
    //                 Değerlerimiz
    //               </CardTitle>
    //               <CardDescription>Bu kartın kısa açıklaması</CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p className="text-gray-600 mb-4">
    //                 Adalet, dürüstlük, müvekkil memnuniyeti ve uzmanlık
    //                 ofisimizin temel değerleridir. Her bir müvekkilimize özel ve
    //                 dikkatli bir yaklaşım benimserken, etik değerlere
    //                 bağlılığımızı korumaktayız.
    //               </p>
    //               <p className="text-gray-600 mb-4"></p>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </div>

    //       <div className="container mx-auto p-2">
    //         <div className="flex flex-col md:flex-row gap-4">
    //           {/* İlk İçerik Kartı */}
    //           <Card className="w-full md:w-1/2  border-green-900">
    //             <CardHeader>
    //               <CardTitle className="text-2xl font-bold">
    //                 Hukuki İnovasyon & Gelişim
    //               </CardTitle>
    //               <CardDescription>Bu kartın kısa açıklaması</CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p className="text-gray-600 mb-4">
    //                 Hukuki alanındaki sürekli değişimlere ayak uydurarak,
    //                 müvekkillerimize en güncel ve yenilikçi çözümleri sunmak
    //                 için çaba gösteriyoruz. Yaratıcı düşünceyi teşvik ediyor ve
    //                 her dava için özel çözümler üretmeye özen göstermekteyiz.
    //               </p>
    //               <p className="text-gray-600 mb-4"></p>
    //             </CardContent>
    //           </Card>

    //           {/* İkinci İçerik Kartı */}
    //           <Card className="w-full md:w-1/2  border-green-900">
    //             <CardHeader>
    //               <CardTitle className="text-2xl font-bold">
    //                 Neden Abatay & İşeri Avukatlık Bürosu'nu Seçmelisiniz?
    //               </CardTitle>
    //               <CardDescription>Bu kartın kısa açıklaması</CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //               <p className="text-gray-600 mb-4">
    //                 Abatay & İşeri Avukatlık Bürosu olarak, hukuki
    //                 meselelerinizi sadece profesyonel bir bakış açısıyla değil,
    //                 aynı zamanda kişisel bir ilgi ve özenle ele alıyoruz.
    //                 Müvekkillerimizin her biriyle kurduğumuz güçlü ilişkiler,
    //                 bizi hukuk alanında tercih edilen bir ortak yapar.
    //                 İstanbul’un kalbindeki ofisimizden, geniş hizmet
    //                 yelpazemizle, her bir müvekkilimizin benzersiz ihtiyaçlarını
    //                 karşılayacak şekilde özelleştirilmiş hizmetler sunuyoruz.
    //               </p>
    //               <p className="text-gray-600 mb-4"></p>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <Hakkimizda />
  );
}
