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
    <section id="quiz" className="py-20 bg-muted">
      <div className="container max-w-2xl">
        <iframe
          src="https://moclients.com/quiz/6bb7812c?type=frame"
          frameBorder="0"
          width="100%"
          height="500"
          title="Quiz"
        />
      </div>
    </section>
  );
};

export default QuizSection;
