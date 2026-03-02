import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { toast } from "sonner";

interface Step {
  title: string;
  type: "multi" | "text" | "contact";
  options?: string[];
  multiSelect?: boolean;
}

const steps: Step[] = [
  {
    title: "Что нужно привезти из Китая?",
    type: "multi",
    multiSelect: true,
    options: [
      "Товары для маркетплейсов",
      "Товары народного потребления",
      "Спецтехника и транспортные средства",
      "Оборудование",
      "Электроника и микроэлектроника",
      "Свой вариант",
    ],
  },
  {
    title: "Нужна помощь с поставщиком?",
    type: "multi",
    options: [
      "У меня прямой контакт с поставщиком",
      "Нужна услуга контрактодержателя",
      "Нужна услуга поиска поставщика или товара",
    ],
  },
  {
    title: "Куда доставить груз?",
    type: "text",
  },
  {
    title: "Какие дополнительные услуги нужны?",
    type: "multi",
    multiSelect: true,
    options: [
      "Помощь с оплатой",
      "Таможенное оформление",
      "Склад временного хранения",
      "Сертификация товара",
      "Дополнительная упаковка",
      "Свой вариант",
    ],
  },
  {
    title: "Нужна проверка товара перед отправкой?",
    type: "multi",
    options: [
      "Проверка не нужна",
      "Нужна инспекция товара/производства",
      "Нужны образцы",
      "Нужна пробная партия",
    ],
  },
  {
    title: "Поможем с импортом из Китая — просто оставьте заявку",
    type: "contact",
  },
];

const QuizSection = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [textInput, setTextInput] = useState("");
  const [contact, setContact] = useState({ name: "", surname: "", phone: "", email: "" });
  const [agreed, setAgreed] = useState(false);

  const step = steps[current];

  const toggleOption = (opt: string) => {
    const cur = answers[current] || [];
    if (step.multiSelect) {
      setAnswers({ ...answers, [current]: cur.includes(opt) ? cur.filter((o) => o !== opt) : [...cur, opt] });
    } else {
      setAnswers({ ...answers, [current]: [opt] });
    }
  };

  const next = () => {
    if (step.type === "text") {
      setAnswers({ ...answers, [current]: [textInput] });
      setTextInput("");
    }
    setCurrent((c) => Math.min(c + 1, steps.length - 1));
  };

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  const submit = () => {
    if (!contact.name || !contact.phone || !contact.email) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }
    if (!agreed) {
      toast.error("Необходимо дать согласие на обработку данных");
      return;
    }
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setCurrent(0);
    setAnswers({});
    setContact({ name: "", surname: "", phone: "", email: "" });
    setAgreed(false);
  };

  return (
    <section id="quiz" className="py-20 bg-muted">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
          Отправить запрос
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Поможем с импортом из Китая — просто оставьте заявку
        </p>

        <div className="bg-card rounded-xl shadow-lg p-6 md:p-8">
          {/* Progress */}
          <div className="flex gap-1 mb-8">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-muted-foreground mb-2">Шаг {current + 1} из {steps.length}</p>
          <h3 className="text-lg font-semibold text-foreground mb-6">{step.title}</h3>

          {step.type === "multi" && step.options && (
            <div className="space-y-3">
              {step.options.map((opt) => {
                const selected = (answers[current] || []).includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggleOption(opt)}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                      selected
                        ? "border-primary bg-primary/5 text-foreground font-medium"
                        : "border-border bg-background text-foreground hover:border-primary/50"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {step.type === "text" && (
            <Input
              placeholder="Введите город или адрес"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="bg-background"
            />
          )}

          {step.type === "contact" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Имя *" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="bg-background" />
                <Input placeholder="Фамилия" value={contact.surname} onChange={(e) => setContact({ ...contact, surname: e.target.value })} className="bg-background" />
              </div>
              <Input placeholder="Телефон *" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className="bg-background" />
              <Input placeholder="Электронная почта *" type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="bg-background" />
              <div className="flex items-start gap-2 pt-2">
                <Checkbox id="agree" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} className="mt-0.5" />
                <label htmlFor="agree" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  Я даю ООО «ЕТРЕЙД» согласие на обработку указанных данных на условиях Политики конфиденциальности для целей рассмотрения заявки и обратной связи.
                </label>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prev} disabled={current === 0} size="sm">
              <ChevronLeft className="w-4 h-4 mr-1" /> Назад
            </Button>
            {step.type === "contact" ? (
              <Button onClick={submit} size="sm" className="bg-primary text-primary-foreground">
                <Send className="w-4 h-4 mr-1" /> Отправить
              </Button>
            ) : (
              <Button onClick={next} size="sm" className="bg-primary text-primary-foreground">
                Далее <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
