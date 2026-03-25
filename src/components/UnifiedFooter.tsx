import { useState, useRef, FormEvent } from "react";
import { MapPin, Mail, Send, Loader2, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UnifiedFooter = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [phoneDigits, setPhoneDigits] = useState("");
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const phoneRef = useRef<HTMLInputElement>(null);

  const formatPhone = (digits: string): string => {
    const d = digits.slice(0, 10);
    if (d.length === 0) return "+7 (___) ___-__-__";
    let result = "+7 (";
    for (let i = 0; i < 10; i++) {
      if (i === 3) result += ") ";
      if (i === 6 || i === 8) result += "-";
      result += i < d.length ? d[i] : "_";
    }
    return result;
  };

  const handlePhoneChange = (value: string) => {
    const raw = value.replace(/\D/g, "");
    const cleaned = raw.startsWith("7") ? raw.slice(1) : raw.startsWith("8") ? raw.slice(1) : raw;
    setPhoneDigits(cleaned.slice(0, 10));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      setPhoneDigits((prev) => prev.slice(0, -1));
    }
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Введите корректный e-mail";
    if (phoneDigits.length < 10)
      e.phone = "Введите полный номер телефона (10 цифр после +7)";
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
          phone: "+7" + phoneDigits,
          _replyto: form.email,
          _subject: "Новая заявка с сайта",
        }),
      });
      if (res.ok) {
        toast({ title: "Спасибо! Заявка отправлена", className: "bg-green-600 text-white border-green-700" });
        setForm({ name: "", email: "" });
        setPhoneDigits("");
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
              <div className={`relative flex items-center rounded-lg border bg-white/10 transition-all ${phoneFocused ? "border-white/40 bg-white/15" : "border-white/20"} ${errors.phone ? "border-red-400/60" : ""}`}>
                <Phone className="w-4 h-4 text-cta ml-4 shrink-0" />
                <input
                  ref={phoneRef}
                  type="tel"
                  className="w-full bg-transparent px-3 py-3 min-h-[48px] text-sm text-white font-mono placeholder:text-white/50 outline-none"
                  placeholder="+7 (___) ___-__-__"
                  value={phoneFocused || phoneDigits.length > 0 ? formatPhone(phoneDigits) : ""}
                  onFocus={() => setPhoneFocused(true)}
                  onBlur={() => setPhoneFocused(false)}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  onKeyDown={handlePhoneKeyDown}
                />
              </div>
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
          {/* Left column */}
          <div className="flex flex-col md:justify-between">
            {/* Top — contacts */}
            <div className="space-y-3">
              <p className="text-white/50 text-sm font-medium">Или свяжитесь с нами самостоятельно</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cta mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  690069, Приморский край, г.&nbsp;Владивосток, ул.&nbsp;Давыдова, д.&nbsp;14
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cta shrink-0" />
                <a href="mailto:gm@etradeiss.ru" className="text-white/70 text-sm hover:text-white transition-colors">
                  gm@etradeiss.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
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
            </div>
            {/* Bottom — copyright */}
            <p className="text-white/40 text-xs mt-6 hidden md:block">
              © {new Date().getFullYear()} ООО «ЕТРЕЙД». Все права защищены.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col md:justify-between md:text-right">
            {/* Top — requisites */}
            <div className="space-y-3">
              <p className="text-white/80 text-sm font-semibold">ООО «ЕТРЕЙД»</p>
              <p className="text-white/50 text-sm"><span className="text-white/70">ИНН:</span> 2543174349</p>
              <p className="text-white/50 text-sm"><span className="text-white/70">КПП:</span> 254301001</p>
              <p className="text-white/50 text-sm"><span className="text-white/70">ОГРН:</span> 1232500008454</p>
            </div>
            {/* Bottom — privacy */}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-xs underline underline-offset-2 hover:text-white/80 transition-colors mt-6"
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
