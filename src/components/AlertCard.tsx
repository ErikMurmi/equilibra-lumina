"use client";

import React from "react";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  level: "alto" | "medio" | "bajo";
};

export default function AlertCard({ title, description, level }: Props) {
  const color = {
    alto: "bg-brand-coral",
    medio: "bg-brand-beige",
    bajo: "bg-brand-green",
  };

  return (
    <div className={clsx("p-4 rounded-lg shadow-md text-white", color[level])}>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
