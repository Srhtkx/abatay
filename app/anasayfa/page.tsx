import Component from "@/components/anasayfachart";

export default function Anasayfa() {
  return (
    <div className="font-serif">
      <div
        style={{
          position: "relative",
          height: "90vh",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Arka plan görseli */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: 'url("/scale-image.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1, // Görsel arka planda kalacak
            filter: "brightness(50%)", // Karartma efekti
          }}
        ></div>

        {/* Karartma katmanı */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.18)", // Şeffaf siyah katman
            zIndex: 2,
          }}
        ></div>

        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            zIndex: 3, // İçerik en üstte yer alacak
            position: "relative",
          }}
        >
          <br />
          <br />
          <div
            style={{
              padding: "50px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                padding: "10px",
                fontStyle: "italic",
              }}
            >
              İstanbulun Kalbinde, Sizin Yanınızda...
            </p>
            <br />
            <h1
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                margin: "0",
                color: "white",
              }}
            >
              ABATAY & İŞERİ Avukatlık Bürosu
            </h1>
            <br />
            <p>
              Grand Pera’da yer alan ofisimizle, bireysel ve kurumsal hukuki
              ihtiyaçlarınız için yanınızdayız. <br /> Profesyonel ekibimizle,
              her türlü hukuki süreçte güvenilir çözümler sunmaktayız.
            </p>
          </div>
          <br />

          <Component />
        </main>
      </div>
    </div>
  );
}
