import { useState, useEffect, useCallback } from "react";

const YM_ID = 107230842;

function loadYandexMetrika() {
  if (typeof window === "undefined") return;
  if ((window as any).ym) return;

  (function (m: any, e: Document, t: string, r: string, i: string) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    (m[i] as any).l = +new Date();
    for (let j = 0; j < e.scripts.length; j++) {
      if (e.scripts[j].src === r) return;
    }
    const k = e.createElement(t) as HTMLScriptElement;
    const a = e.getElementsByTagName(t)[0];
    k.async = true;
    k.src = r;
    a.parentNode?.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  (window as any).ym(YM_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}

const CONSENT_KEY = "cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === "true") {
      loadYandexMetrika();
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "true");
    setVisible(false);
    loadYandexMetrika();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-2xl p-5 shadow-2xl"
      style={{ backgroundColor: "#0F2240" }}
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl leading-none mt-0.5">🍪</span>
        <div className="flex-1">
          <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.9)" }}>
            Оставаясь на сайте, вы соглашаетесь на использование{" "}
            <a
              href="https://ru.wikipedia.org/wiki/Cookie"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              куки
            </a>{" "}
            и передачу данных в Яндекс.Метрику для анализа поведения пользователей.
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="shrink-0 rounded-lg px-5 py-2 text-sm font-semibold transition-colors hover:opacity-90"
          style={{
            backgroundColor: "hsl(0 0% 100%)",
            color: "#0F2240",
          }}
        >
          Хорошо
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
