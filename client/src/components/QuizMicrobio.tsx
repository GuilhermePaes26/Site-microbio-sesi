import { useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    id: 1,
    question: "O que são microrganismos?",
    options: [
      "Organismos visíveis a olho nu",
      "Organismos microscópicos como bactérias, fungos e vírus",
      "Apenas células do corpo humano",
      "Apenas plantas aquáticas",
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    question:
      "Qual destes é um exemplo de microrganismo benéfico ao ser humano?",
    options: [
      "Bactéria da pneumonia",
      "Fungos que causam micoses",
      "Bactérias da flora intestinal",
      "Vírus da gripe",
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    question: "Por que lavar as mãos é tão importante em microbiologia?",
    options: [
      "Porque deixa as mãos mais perfumadas",
      "Porque remove e reduz microrganismos que podem causar doenças",
      "Porque deixa a pele mais fria",
      "Porque aumenta a quantidade de microrganismos",
    ],
    correctIndex: 1,
  },
  {
    id: 4,
    question: "O que é uma doença infecciosa?",
    options: [
      "Doença causada apenas por fatores genéticos",
      "Doença causada por microrganismos como bactérias, vírus ou fungos",
      "Doença causada apenas por acidentes",
      "Doença que nunca é transmitida entre pessoas",
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    question:
      "Qual é uma forma simples de evitar a proliferação de microrganismos em alimentos?",
    options: [
      "Deixar o alimento fora da geladeira por mais tempo",
      "Armazenar corretamente e respeitar a temperatura adequada",
      "Lavar com água sem sabão",
      "Evitar cozinhar o alimento",
    ],
    correctIndex: 1,
  },
];

export function QuizMicrobio() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = questions[current];

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelected(index);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    const correct = selected === question.correctIndex;
    if (correct) {
      setScore(score + 1);
    }
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setCurrent(current + 1);
    setSelected(null);
    setShowFeedback(false);
    setIsCorrect(null);
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowFeedback(false);
    setIsCorrect(null);
  };

  if (finished) {
    return (
      <section className="quiz-container">
        <h2 className="quiz-title">Quiz de Microbiologia</h2>
        <p className="quiz-result">
          Você acertou {score} de {questions.length} perguntas.
        </p>
        <button className="quiz-button" onClick={handleRestart}>
          Jogar novamente
        </button>
      </section>
    );
  }

  return (
    <section className="quiz-container">
      <h2 className="quiz-title">Quiz de Microbiologia</h2>
      <p className="quiz-question">
        Pergunta {current + 1} de {questions.length}
      </p>
      <h3 className="quiz-question-text">{question.question}</h3>

      <ul className="quiz-options">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              className={[
                "quiz-option",
                selected === index ? "quiz-option-selected" : "",
                showFeedback && index === question.correctIndex
                  ? "quiz-option-correct"
                  : "",
                showFeedback &&
                selected === index &&
                selected !== question.correctIndex
                  ? "quiz-option-wrong"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => handleSelect(index)}
              disabled={showFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>

      {!showFeedback && (
        <button
          className="quiz-button"
          onClick={handleConfirm}
          disabled={selected === null}
        >
          Confirmar resposta
        </button>
      )}

      {showFeedback && isCorrect === true && (
        <>
          <p className="quiz-feedback quiz-feedback-correct">
            Resposta correta! Muito bem.
          </p>
          <button className="quiz-button" onClick={handleNext}>
            Próxima pergunta
          </button>
        </>
      )}

      {showFeedback && isCorrect === false && (
        <>
          <p className="quiz-feedback quiz-feedback-wrong">
            Resposta incorreta. A alternativa correta está destacada em verde.
          </p>
          <button className="quiz-button" onClick={handleNext}>
            Próxima pergunta
          </button>
        </>
      )}
    </section>
  );
}
