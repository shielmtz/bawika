import React, { useState } from "react";

function Quiz2() {
  const questions = [
    {
      question: "1. Tarian tradisional dari Yogyakarta yang sering dipentaskan di keraton adalah:",
      options: [
        { id: "A", text: "Tari Gambyong" },
        { id: "B", text: "Tari Serimpi" },
        { id: "C", text: "Tari Bedhaya" },
      ],
      correct: "C",
    },
    {
      question: "2. Tari tradisional Jawa yang menggambarkan gerakan berpasangan dan sering dipentaskan di acara pernikahan adalah:",
      options: [
        { id: "A", text: "Tari Gambyong" },
        { id: "B", text: "Tari Srimpi" },
        { id: "C", text: "Tari Saman" },
      ],
      correct: "B",
    },
    {
      question: "3. Tari yang berasal dari Surakarta dan terkenal dengan gerakan halus serta elegan adalah:",
      options: [
        { id: "A", text: "Tari Pendet" },
        { id: "B", text: "Tari Bedhaya" },
        { id: "C", text: "Tari Reog" },
      ],
      correct: "B",
    },
    {
      question: "4. Tari yang berasal dari daerah Jawa Tengah yang menggambarkan gerakan dengan tangan yang lemah gemulai dan sering dipentaskan di keraton adalah:",
      options: [
        { id: "A", text: "Tari Gambyong" },
        { id: "B", text: "Tari Topeng" },
        { id: "C", text: "Tari Bedhaya" },
      ],
      correct: "C",
    },
    {
      question: "5. Tari tradisional dari Jawa Timur yang biasanya dipentaskan dengan menggunakan topeng adalah:",
      options: [
        { id: "A", text: "Tari Gandrung" },
        { id: "B", text: "Tari Reog" },
        { id: "C", text: "Tari Topeng" },
      ],
      correct: "C",
    },
    {
      question: "6. Tari yang berasal dari daerah Banyumas, Jawa Tengah, dan memiliki gerakan cepat adalah:",
      options: [
        { id: "A", text: "Tari Beksan" },
        { id: "B", text: "Tari Lengger" },
        { id: "C", text: "Tari Saman" },
      ],
      correct: "B",
    },
    {
      question: "7. Tari yang dipentaskan di keraton Yogyakarta untuk menyambut tamu besar adalah:",
      options: [
        { id: "A", text: "Tari Barong" },
        { id: "B", text: "Tari Bedhaya" },
        { id: "C", text: "Tari Gambyong" },
      ],
      correct: "B",
    },
    {
      question: "8. Tari yang menggambarkan perjuangan dan keberanian, berasal dari Ponorogo dan menggunakan atribut seperti bulu burung adalah:",
      options: [
        { id: "A", text: "Tari Jaranan" },
        { id: "B", text: "Tari Reog" },
        { id: "C", text: "Tari Saman" },
      ],
      correct: "B",
    },
    {
      question: "9. Tari yang dipentaskan dalam rangka menyambut pengantin baru, berasal dari Solo dan menampilkan gerakan halus adalah:",
      options: [
        { id: "A", text: "Tari Srimpi" },
        { id: "B", text: "Tari Pendet" },
        { id: "C", text: "Tari Bedhaya" },
      ],
      correct: "C",
    },
    {
      question: "10. Tari yang menggambarkan keindahan alam dan masyarakat Banyumas adalah:",
      options: [
        { id: "A", text: "Tari Lengger" },
        { id: "B", text: "Tari Saman" },
        { id: "C", text: "Tari Topeng" },
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

export default Quiz2;