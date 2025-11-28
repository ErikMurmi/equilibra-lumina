"use client";

import React from "react";

type Props = {
  question: string;
  index: number;
  value: number | null;
  onChange: (value: number) => void;
};

export default function LikertQuestion({
  question,
  index,
  value,
  onChange,
}: Props) {
  const scale = [1, 2, 3, 4, 5];

  return (
    <div className="mb-6">
      <p className="text-brand-dark font-medium mb-3">
        {index + 1}. {question}
      </p>
      <div className="flex space-x-2 justify-center">
        {scale.map((num) => (
          <button
            key={num}
            type="button" // ✅ Esto evita el submit accidental
            className={`w-10 h-10 rounded-full border-2 text-sm font-semibold transition ${
              value === num
                ? "bg-brand-dark text-white border-brand-dark"
                : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => onChange(num)} // ✅ Asegúrate que este se dispara
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
