const HeroSection = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 md:pb-28">
      <div className="container text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-6">
          ООО «ЕТРЕЙД»: Ваш надежный мост в Китай
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
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
