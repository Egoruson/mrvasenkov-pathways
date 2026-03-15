import { useEffect, useState } from "react";
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
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

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
      <div className="container text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
          ООО «ЕТРЕЙД»
        </h1>

        {/* Animated word scroller */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 flex-col md:flex-row">
          <span className="text-xl md:text-[clamp(20px,3vw,34px)] font-medium text-primary-foreground whitespace-nowrap">
            Ваш надёжный поставщик
          </span>
          <div
            className="relative overflow-hidden"
            style={{ height: "1.2em", lineHeight: "1.2em" }}
          >
            <div
              className="flex flex-col"
              style={{
                transform: `translateY(-${index * 1.2}em)`,
                transition: "transform 0.5s ease",
                willChange: "transform",
              }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  className="text-xl md:text-[clamp(20px,3vw,34px)] font-medium text-primary-foreground flex items-center"
                  style={{ height: "1.2em" }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
          Промышленные поставки, логистика и таможенное оформление — полный цикл импорта из Китая
        </p>
        <button
          onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
          className="cta-gradient cta-gradient-hover animate-pulse-glow text-primary-foreground font-bold px-8 py-3 rounded-lg text-lg transition-all"
        >
          Оставить заявку
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
