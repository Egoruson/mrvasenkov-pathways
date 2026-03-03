const QuizSection = () => {
  return (
    <section id="quiz" className="py-20 bg-muted">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
          Отправить запрос
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Поможем с импортом из Китая — просто оставьте заявку
        </p>
        <div className="w-full" style={{ minHeight: 600 }}>
          <iframe
            src="https://moclients.com/quiz/6bb7812c?type=frame"
            frameBorder="0"
            width="100%"
            height="600"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
