import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Roads', count: 24 },
  { name: 'Waste', count: 31 },
  { name: 'Water', count: 12 },
  { name: 'Lights', count: 18 }
];

export function AnalyticsChart() {
  return (
    <div className="card h-72">
      <h3 className="font-semibold mb-2">Complaints by Category</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3182CE" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
