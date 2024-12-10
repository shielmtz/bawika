import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PlanCard = () => {
  const [selectedPlan, setSelectedPlan] = useState("mingguan");
  const navigate = useNavigate(); // Inisialisasi navigate

  const plans = [
    { id: "mingguan", label: "Mingguan", price: 7000 },
    { id: "bulanan", label: "Bulanan", price: 17000, bestOffer: true },
    { id: "tahunan", label: "Tahunan", price: 170000, bestOffer: true },
  ];

  const handleNext = () => {
    alert(`Berhasil memilih paket ${selectedPlan}`);
    navigate("/payment"); // Navigasi ke halaman pembayaran
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#fee799] rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-6 ">
        Pilih Paket Premium
      </h2>
      <div className="rounded-lg space-y-4 bg-white">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              selectedPlan === plan.id
                ? "border-yellow-400 bg-yellow-100"
                : "border-gray-300"
            }`}
          >
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="subscription"
                value={plan.id}
                checked={selectedPlan === plan.id}
                onChange={() => setSelectedPlan(plan.id)}
                className="form-radio text-yellow-500 w-5 h-5"
              />
              <span className="ml-3 text-lg">{plan.label}</span>
            </label>

            <div className="text-right">
              {plan.bestOffer && (
                <span className="text-sm text-white bg-yellow-500 px-2 py-1 rounded-lg">
                  Penawaran terbaik
                </span>
              )}
              <p className="text-lg font-semibold">
                Rp {plan.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Jatuh tempo pada <span>17 Desember 2024</span>{" "}
          <span className="font-semibold text-gray-600">
            Rp{" "}
            {plans
              .find((plan) => plan.id === selectedPlan)
              .price.toLocaleString()}
          </span>
        </p>
      </div>
      <button
        className="mt-6 w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-200"
        onClick={handleNext} // Panggil handleNext
      >
        Berikutnya
      </button>
    </div>
  );
};

export default PlanCard;
