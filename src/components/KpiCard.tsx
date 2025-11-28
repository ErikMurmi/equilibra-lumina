"use client";

import React from "react";
import clsx from "clsx";

type Props = {
  label: string;
  value: string;
  unit?: string;
  color?: "green" | "coral";
};

export default function KpiCard({
  label,
  value,
  unit,
  color = "green",
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-xl shadow-md p-6 transition-all duration-300",
        color === "green" && "bg-brand-green text-white",
        color === "coral" && "bg-brand-coral text-white"
      )}
    >
      <p className="text-sm uppercase tracking-wide font-semibold">{label}</p>
      <div className="text-4xl font-bold mt-2">
        {value}
        {unit && <span className="text-xl font-normal ml-1">{unit}</span>}
      </div>
    </div>
  );
}
