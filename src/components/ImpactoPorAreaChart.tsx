"use client";

import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { area: "Ventas", impacto: 76 },
  { area: "Ingeniería", impacto: 63 },
  { area: "RRHH", impacto: 58 },
  { area: "Operaciones", impacto: 72 },
  { area: "Marketing", impacto: 49 },
];

export default function ImpactoPorAreaChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="area" type="category" />
          <Tooltip />
          <Bar dataKey="impacto" fill="#d97706" radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
