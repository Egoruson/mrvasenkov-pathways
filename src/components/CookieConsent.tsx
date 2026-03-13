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
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-2xl p-5 shadow-2xl border border-primary"
      style={{ backgroundColor: "hsl(213 60% 15% / 0.7)", backdropFilter: "blur(12px)" }}
    >
      <div className="flex flex-col gap-3">
        <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.9)" }}>
          Продолжая пользоваться сайтом, вы даете согласие на обработку файлов cookie и других пользовательских данных в соответствии с{" "}
          <a
            href="https://moclients.com/quiz/6bb7812c?type=frame"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Политикой защиты персональной информации
          </a>.
        </p>
        <button
          onClick={handleAccept}
          className="self-end shrink-0 rounded-lg px-5 py-2 text-sm font-semibold transition-colors hover:opacity-90"
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
