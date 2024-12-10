import React, { useState } from "react";

function Quiz3() {
  const questions = [
    {
      question: "1. Tembang macapat yang berisi nasihat atau petuah hidup, biasanya dipakai untuk memberikan wejangan adalah:",
      options: [
        { id: "A", text: "Dhandhanggula" },
        { id: "B", text: "Mijil" },
        { id: "C", text: "Asmarandana" },
      ],
      correct: "A",
    },
    {
      question: "2. Tembang macapat yang memiliki irama cepat dan menggambarkan kegembiraan adalah:",
      options: [
        { id: "A", text: "Sinom" },
        { id: "B", text: "Dhandhanggula" },
        { id: "C", text: "Asmarandana" },
      ],
      correct: "A",
    },
    {
      question: "3. Tembang macapat yang digunakan untuk menggambarkan perasaan sedih atau melankolis adalah:",
      options: [
        { id: "A", text: "Pangkur" },
        { id: "B", text: "Mijil" },
        { id: "C", text: "Kinanthi" },
      ],
      correct: "C",
    },
    {
      question: "4. Tembang macapat yang berisi cerita atau kisah hidup seorang tokoh, biasanya digunakan untuk menceritakan sesuatu yang penting adalah:",
      options: [
        { id: "A", text: "Kinanthi" },
        { id: "B", text: "Gambuh" },
        { id: "C", text: "Mijil" },
      ],
      correct: "C",
    },
    {
      question: "5. Tembang macapat yang berisi ungkapan cinta atau asmara dan menggambarkan perasaan rindu adalah:",
      options: [
        { id: "A", text: "Sinom" },
        { id: "B", text: "Asmarandana" },
        { id: "C", text: "Dhandhanggula" },
      ],
      correct: "B",
    },
    {
      question: "6. Tembang macapat yang digunakan untuk menggambarkan kesedihan atau penderitaan adalah:",
      options: [
        { id: "A", text: "Pangkur" },
        { id: "B", text: "Dhandhanggula" },
        { id: "C", text: "Sinom" },
      ],
      correct: "A",
    },
    {
      question: "7. Tembang macapat yang memiliki ciri irama yang lembut dan biasanya digunakan dalam upacara adat adalah:",
      options: [
        { id: "A", text: "Gambuh" },
        { id: "B", text: "Kinanthi" },
        { id: "C", text: "Asmarandana" },
      ],
      correct: "A",
    },
    {
      question: "8. Tembang macapat yang berisi cerita tentang perjuangan atau petualangan biasanya memiliki irama yang cepat adalah:",
      options: [
        { id: "A", text: "Pangkur" },
        { id: "B", text: "Mijil" },
        { id: "C", text: "Gambuh" },
      ],
      correct: "A",
    },
    {
      question: "9. Tembang macapat yang berisi ajaran moral dan digunakan untuk menasihati orang lain adalah:",
      options: [
        { id: "A", text: "Kinanthi" },
        { id: "B", text: "Pangkur" },
        { id: "C", text: "Mijil" },
      ],
      correct: "B",
    },
    {
      question: "10. Tembang macapat yang memiliki struktur puisi dengan bait-bait pendek dan irama yang cepat adalah:",
      options: [
        { id: "A", text: "Asmarandana" },
        { id: "B", text: "Sinom" },
        { id: "C", text: "Kinanthi" },
      ],
      correct: "B",
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

export default Quiz3;