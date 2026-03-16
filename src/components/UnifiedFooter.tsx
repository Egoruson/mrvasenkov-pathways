import { useState, FormEvent } from "react";
import { MapPin, Mail, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UnifiedFooter = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Введите корректный e-mail";
    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim() || digits.length < 10)
      e.phone = "Введите корректный номер (минимум 10 цифр)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mqeyyznn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          _replyto: form.email,
          _subject: "Новая заявка с сайта",
        }),
      });
      if (res.ok) {
        toast({ title: "Спасибо! Заявка отправлена", className: "bg-green-600 text-white border-green-700" });
        setForm({ name: "", email: "", phone: "" });
        setErrors({});
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Ошибка, попробуйте позже", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:bg-white/15 transition-colors";

  return (
    <footer id="contacts" className="footer-gradient text-white">
      {/* ── Top: heading + form ── */}
      <div className="container py-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight break-words">
              Поможем с&nbsp;импортом из&nbsp;Китая&nbsp;— просто оставьте заявку
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-md">
              Зададим правильные вопросы, опишем возможности и&nbsp;наметим план действий
            </p>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:ml-auto md:w-full md:max-w-md" noValidate>
            <div>
              <input
                className={inputClass}
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                className={inputClass}
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                className={inputClass}
                placeholder="+7 (000) 000-00-00"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full cta-gradient cta-gradient-hover rounded-lg py-3 text-white font-semibold text-sm transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              Оставить заявку
            </button>

            <p className="text-white/40 text-xs text-center leading-snug">
              Нажимая &quot;Оставить заявку&quot; вы соглашаетесь с{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                политикой обработки персональных данных
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="container">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Bottom ── */}
      <div className="container py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — contacts + copyright */}
          <div className="flex flex-col">
            <p className="text-white/50 text-sm font-medium">Или свяжитесь с нами самостоятельно</p>
            <div className="flex items-start gap-2 mt-3 flex-1">
              <MapPin className="w-4 h-4 text-cta mt-0.5 shrink-0" />
              <span className="text-white/70 text-sm">
                690069, Приморский край, г.&nbsp;Владивосток, ул.&nbsp;Давыдова, д.&nbsp;14
              </span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Mail className="w-4 h-4 text-cta shrink-0" />
              <a href="mailto:gm@etradeiss.ru" className="text-white/70 text-sm hover:text-white transition-colors">
                gm@etradeiss.ru
              </a>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Send className="w-4 h-4 text-cta shrink-0" />
              <a
                href="https://t.me/vasenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                Написать в Telegram
              </a>
            </div>
            <p className="text-white/40 text-xs mt-3 hidden md:block">
              © {new Date().getFullYear()} ООО «ЕТРЕЙД». Все права защищены.
            </p>
          </div>

          {/* Right — legal */}
          <div className="md:text-right flex flex-col">
            <p className="text-white/80 text-sm font-semibold">ООО «ЕТРЕЙД»</p>
            <p className="text-white/50 text-xs mt-3 flex-1"><span className="text-white/70">ИНН:</span> 2543174349</p>
            <p className="text-white/50 text-xs mt-3"><span className="text-white/70">КПП:</span> 254301001</p>
            <p className="text-white/50 text-xs mt-3"><span className="text-white/70">ОГРН:</span> 1232500008454</p>
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-xs underline underline-offset-2 hover:text-white/80 transition-colors mt-3"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>

        {/* Mobile-only copyright */}
        <p className="text-white/40 text-xs mt-6 md:hidden">
          © {new Date().getFullYear()} ООО «ЕТРЕЙД». Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default UnifiedFooter;
