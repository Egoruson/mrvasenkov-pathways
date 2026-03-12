import { useEffect } from "react";

const QuizSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://moclients.com/js/iframe.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="quiz" className="py-14 bg-muted">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
          Отправить запрос
        </h2>
        <div className="w-full">
          <iframe
            src="https://moclients.com/quiz/6bb7812c?type=frame"
            frameBorder="0"
            width="100%"
            height="700"
            scrolling="no"
            style={{ border: "none", height: "700px", minHeight: "700px", maxHeight: "700px", overflow: "hidden" }}
          />
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
