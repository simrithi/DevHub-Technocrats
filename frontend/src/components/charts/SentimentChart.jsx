"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SentimentChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="time" stroke="#71717a" />
        <YAxis stroke="#71717a" domain={[0, 1]} />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#a855f7" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
