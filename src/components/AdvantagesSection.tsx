import { Handshake, ThumbsUp, Warehouse, HelpCircle, ShieldCheck, Scale, Clock, FileText } from "lucide-react";

const advantages = [
  { icon: Handshake, title: "Представительство в Китае", desc: "Прямое присутствие наших специалистов в Китае гарантирует оперативное решение любых вопросов и полное сопровождение сделок." },
  { icon: ThumbsUp, title: "Проверка производителя / поставщика", desc: "Детальная проверка надёжности партнёра или товара гарантирует безопасность сделки и соответствие качества." },
  { icon: Warehouse, title: "Склад в Китае", desc: "Наличие собственного склада обеспечивает гибкость в логистике и минимизацию расходов на хранение и доставку." },
  { icon: HelpCircle, title: "Полезные консультации", desc: "Оказываем информационную поддержку — подробно отвечаем на вопросы и предлагаем эффективные решения." },
  { icon: ShieldCheck, title: "Минимизация рисков", desc: "Делаем всё необходимое, чтобы вы могли ввозить товары из Китая, не ставя под угрозу собственный бизнес." },
  { icon: Scale, title: "Соблюдение законов", desc: "Отслеживаем любые изменения в законодательстве, что гарантирует юридическую безопасность поставок." },
  { icon: Clock, title: "Экономия времени", desc: "Обеспечиваем быстрое оформление документов и таможенную очистку грузов, ускоряя доставку продукции." },
  { icon: FileText, title: "Прозрачные условия", desc: "Фиксируем все аспекты сотрудничества с нашей компанией, чтобы избежать каких-либо разногласий." },
];

const AdvantagesSection = () => (
  <section className="py-14 bg-background">
    <div className="container">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
        Преимущества импорта с нашей компанией
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {advantages.map((a) => (
          <div key={a.title} className="card-dark rounded-xl p-5">
            <a.icon className="w-8 h-8 mb-3 text-card-dark-foreground/80" />
            <h3 className="text-sm md:text-base font-semibold text-card-dark-foreground mb-2">{a.title}</h3>
            <p className="text-xs md:text-sm text-card-dark-foreground/60 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
