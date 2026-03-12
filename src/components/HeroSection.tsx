import heroBgDesktop from "@/assets/hero-bg-desktop.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-14 md:pb-20 overflow-hidden">
      {/* Desktop background */}
      <img
        src={heroBgDesktop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      {/* Mobile background */}
      <img
        src={heroBgMobile}
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          ООО «ЕТРЕЙД»: Ваш надежный мост в Китай
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
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
