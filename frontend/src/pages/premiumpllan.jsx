import React, { useState } from "react";
import PlanCard from "../components/plancard";
import PremiumInfo from "../components/premiuminfo";
import Navbar from "../components/navbar";

const plans = [
  {
    id: 1,
    title: "Mingguan",
    price: 7000,
    isBestValue: false,
    dueDate: "17 Desember 2024",
  },
  { id: 2, title: "Bulanan", price: 17000, isBestValue: true },
  { id: 3, title: "Tahunan", price: 170000, isBestValue: true },
];

const PremiumPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelect = (id) => {
    setSelectedPlan(id);
  };

  return (
    <>
      <Navbar />
      <div className=" container mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
        {/* Bagian kiri untuk pilihan paket */}
     
              <PlanCard
              />
          
         

        {/* Bagian kanan untuk informasi premium */}
        <PremiumInfo />
      </div>
    </>
  );
};

export default PremiumPlan;
