import heroBgDesktop from "@/assets/hero-bg-desktop.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";

const words = [
  "оборудования",
  "автомобилей",
  "спецтехники",
  "запчастей",
  "товаров",
  "огнеупоров",
  "ферросплавов",
  "сырья",
  "пресс форм",
  "оборудования",
  "автомобилей",
  "спецтехники",
  "запчастей",
  "товаров",
  "огнеупоров",
  "ферросплавов",
  "сырья",
  "пресс форм",
];

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-14 md:pb-20 overflow-hidden">
      <img
        src={heroBgDesktop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src={heroBgMobile}
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
            ООО «ЕТРЕЙД»
          </h1>

          {/* Animated word scroller */}
          <div className="word-scroller-loader">
            <span className="word-scroller-title">Ваш надёжный поставщик</span>
            <div className="word-scroller-words">
              <div className="word-scroller-track">
                {words.map((word, i) => (
                  <span key={i} className="word-scroller-word">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 mt-6">
            Промышленные поставки, логистика и таможенное оформление — полный цикл импорта из Китая
          </p>

          <button
            onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
            className="cta-gradient cta-gradient-hover animate-pulse-glow text-primary-foreground font-bold px-8 py-3 rounded-lg text-lg transition-all"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
