import { Shield, Globe, Truck } from "lucide-react";

const stages = [
  {
    icon: Globe,
    title: "Поиск и переговоры",
    text: "Берём на себя коммуникацию с китайскими партнёрами, проверяем контрагента и исключаем риски до подписания контракта.",
  },
  {
    icon: Shield,
    title: "Исполнение контракта",
    text: "Контроль платежей, валютного контроля, качества продукции и сроков отгрузки — сопровождение «под ключ».",
  },
  {
    icon: Truck,
    title: "Логистика и таможня",
    text: "Оптимизируем маршруты для снижения издержек и обеспечиваем успешную таможенную очистку грузов.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-14 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-6">
          О компании
        </h2>
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground leading-relaxed mb-16">
          <p>
            В условиях современной экономики успешная работа с Китаем требует не просто посредников, а глубоких экспертных знаний и погружённости в локальную специфику. ООО «ЕТРЕЙД» выступает в роли профессионального «моста», соединяющего российский бизнес с производственными и технологическими возможностями Поднебесной.
          </p>
          <p>
            Наше главное преимущество — команда профильных китаистов. Руководство и менеджмент компании обладают многолетним практическим опытом работы в различных секторах промышленности, ВЭД, организации логистики и таможенном оформлении.
          </p>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-10">
          Наша миссия — безопасность сделки на всех этапах
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {stages.map((s) => (
            <div key={s.title} className="card-dark rounded-xl p-6">
              <s.icon className="w-10 h-10 mb-4 text-cta" />
              <h4 className="text-lg font-semibold text-card-dark-foreground mb-2">{s.title}</h4>
              <p className="text-card-dark-foreground/70 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="max-w-4xl mx-auto mt-10 text-muted-foreground leading-relaxed text-center">
          Международная торговля — это сложный процесс, требующий участия высококлассных специалистов. Представлять интересы клиентов в Китае и обеспечивать надёжные, безопасные поставки — главный приоритет деятельности ООО «ЕТРЕЙД».
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
