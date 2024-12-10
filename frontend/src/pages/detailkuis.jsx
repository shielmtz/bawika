import React, { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "1. Apa arti kata 'Sugeng' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Selamat" },
        { id: "B", text: "Terima kasih" },
        { id: "C", text: "Siang" },
      ],
      correct: "A",
    },
    {
      question: "2. Bagaimana cara mengatakan 'Apa kabar?' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Piye kabarmu?" },
        { id: "B", text: "Kulo matur nuwun" },
        { id: "C", text: "Sampun dhahar?" },
      ],
      correct: "A",
    },
    {
      question: "3. Apa arti kata 'Matur nuwun' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Selamat tinggal" },
        { id: "B", text: "Terima kasih" },
        { id: "C", text: "Maaf" },
      ],
      correct: "B",
    },
    {
      question: "4. Apa arti kata 'Sampun' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Belum" },
        { id: "B", text: "Sudah" },
        { id: "C", text: "Siap" },
      ],
      correct: "B",
    },
    {
      question: "5. Bagaimana cara mengatakan 'Selamat pagi' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Sugeng siang" },
        { id: "B", text: "Sugeng enjang" },
        { id: "C", text: "Sugeng dalu" },
      ],
      correct: "B",
    },
    {
      question: "6. Apa arti kata 'Nyuwun' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Meminta" },
        { id: "B", text: "Memberi" },
        { id: "C", text: "Menjaga" },
      ],
      correct: "A",
    },
    {
      question: "7. Bagaimana cara mengatakan 'Terima kasih' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Kulo nuwun" },
        { id: "B", text: "Nuwun sewu" },
        { id: "C", text: "Matur nuwun" },
      ],
      correct: "C",
    },
    {
      question: "8. Apa arti kata 'Dahar' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Minum" },
        { id: "B", text: "Makan" },
        { id: "C", text: "Tidur" },
      ],
      correct: "B",
    },
    {
      question: "9. Apa arti kata 'Kulo' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Kamu" },
        { id: "B", text: "Saya" },
        { id: "C", text: "Mereka" },
      ],
      correct: "B",
    },
    {
      question: "10. Bagaimana cara mengatakan 'Selamat malam' dalam bahasa Jawa?",
      options: [
        { id: "A", text: "Sugeng siang" },
        { id: "B", text: "Sugeng enjang" },
        { id: "C", text: "Sugeng dalu" },
      ],
      correct: "C",
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

export default Quiz;