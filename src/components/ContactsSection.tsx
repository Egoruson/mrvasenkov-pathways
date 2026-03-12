import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-14 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
          Контакты
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:flex md:flex-col md:justify-between space-y-6">
            <h3 className="text-xl font-semibold text-foreground">ООО &quot;ЕТРЕЙД&quot;</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm">
                  690069, Приморский край, г. Владивосток, ул. Давыдова, д. 14
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="mailto:gm@etradeiss.ru" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  gm@etradeiss.ru
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Send className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="https://t.me/vasenkov" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Написать в Telegram
                </a>
              </div>
            </div>

            <div className="hero-gradient rounded-xl p-5 space-y-2 text-sm">
              <p className="text-card-dark-foreground/70"><span className="text-card-dark-foreground font-medium">ИНН:</span> 2543174349</p>
              <p className="text-card-dark-foreground/70"><span className="text-card-dark-foreground font-medium">КПП:</span> 254301001</p>
              <p className="text-card-dark-foreground/70"><span className="text-card-dark-foreground font-medium">ОГРН:</span> 1232500008454</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border h-80">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=131.920438,43.172475&z=16&pt=131.920438,43.172475,pm2rdm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              title="Местоположение ЕТРЕЙД"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
