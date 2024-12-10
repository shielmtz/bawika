import React, { useState } from "react";

function Quiz4() {
  const questions = [
    {
      question: "1. Aksara Jawa yang digunakan untuk menulis vokal 'a' adalah?",
      options: [
        { id: "A", text: "ꦲ" },
        { id: "B", text: "ꦯ" },
        { id: "C", text: "ꦒ" },
      ],
      correct: "A",
    },
    {
      question: "2. Aksara Jawa yang digunakan untuk menulis vokal 'i' adalah?",
      options: [
        { id: "A", text: "ꦲꦶ" },
        { id: "B", text: "ꦤꦶ" },
        { id: "C", text: "ꦏꦶ" },
      ],
      correct: "A",
    },
    {
      question: "3. Aksara Jawa yang digunakan untuk menulis vokal 'u' adalah?",
      options: [
        { id: "A", text: "ꦸ" },
        { id: "B", text: "ꦆ" },
        { id: "C", text: "ꦄ" },
      ],
      correct: "A",
    },
    {
      question: "4. Aksara Jawa yang digunakan untuk menulis vokal 'e' adalah?",
      options: [
        { id: "A", text: "ꦺ" },
        { id: "B", text: "ꦱ" },
        { id: "C", text: "ꦆ" },
      ],
      correct: "A",
    },
    {
      question: "5. Aksara Jawa yang digunakan untuk menulis konsonan 'ka' adalah?",
      options: [
        { id: "A", text: "ꦏ" },
        { id: "B", text: "ꦠ" },
        { id: "C", text: "ꦯ" },
      ],
      correct: "A",
    },
    {
      question: "6. Aksara Jawa yang digunakan untuk menulis konsonan 'nga' adalah?",
      options: [
        { id: "A", text: "ꦔ" },
        { id: "B", text: "ꦥ" },
        { id: "C", text: "ꦩ" },
      ],
      correct: "A",
    },
    {
      question: "7. Aksara Jawa yang digunakan untuk menulis konsonan 'sa' adalah?",
      options: [
        { id: "A", text: "ꦱ" },
        { id: "B", text: "ꦔ" },
        { id: "C", text: "ꦡ" },
      ],
      correct: "A",
    },
    {
      question: "8. Aksara Jawa yang digunakan untuk menulis konsonan 'ta' adalah?",
      options: [
        { id: "A", text: "ꦠ" },
        { id: "B", text: "ꦡ" },
        { id: "C", text: "ꦦ" },
      ],
      correct: "A",
    },
    {
      question: "9. Aksara Jawa yang digunakan untuk menulis konsonan 'ra' adalah?",
      options: [
        { id: "A", text: "ꦫ" },
        { id: "B", text: "ꦩ" },
        { id: "C", text: "ꦲ" },
      ],
      correct: "A",
    },
    {
      question: "10. Aksara Jawa yang digunakan untuk menulis konsonan 'ma' adalah?",
      options: [
        { id: "A", text: "ꦩ" },
        { id: "B", text: "ꦮ" },
        { id: "C", text: "ꦭ" },
      ],
      correct: "A",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleNext = () => {
    if (selected === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setSelected(null);
    setIsSubmitted(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleSubmit = () => {
    if (selected) {
      setIsSubmitted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelected(null);
    setScore(0);
    setIsSubmitted(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-yellow-100">
        <div className="text-center max-w-md bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Kuis Selesai!</h2>
          <p className="text-lg mb-4">Skor Anda: {score} / {questions.length}</p>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Mulai Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-100">
      <div className="max-w-md bg-white rounded shadow-lg p-5">
        <h2 className="text-lg font-bold mb-4">
          {questions[currentQuestion].question}
        </h2>
        <div className="flex flex-col space-y-2">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`p-2 border rounded ${
                selected === option.id
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {option.id}. {option.text}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700"
        >
          Submit
        </button>
        {isSubmitted && (
          <div className="mt-4 text-center">
            {selected === questions[currentQuestion].correct ? (
              <p className="text-green-600 font-bold">Benar!</p>
            ) : (
              <p className="text-red-600 font-bold">Salah!</p>
            )}
            <button
              onClick={handleNext}
              className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700"
            >
              Lanjut
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz4;