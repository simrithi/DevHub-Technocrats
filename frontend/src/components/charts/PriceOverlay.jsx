"use client";
import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function PriceOverlay({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart data={data}>
        <XAxis dataKey="time" stroke="#71717a" />
        <YAxis yAxisId="left" stroke="#71717a" />
        <YAxis yAxisId="right" orientation="right" stroke="#71717a" />
        <Tooltip />
        <Bar yAxisId="right" dataKey="volume" fill="#3f3f46" />
        <Line yAxisId="left" type="monotone" dataKey="price" stroke="#a855f7" dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
