import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

const rangeData = [
  { day: 'Ratings', temperature: 30 },
  { day: 'Users', temperature: 32 },
  { day: 'Comments', temperature: 28 },
  // Add more data points as needed
];

function Chart() {
  return (
    <BarChart width={730} height={250} data={rangeData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="temperature" fill="#8884d8" />
    </BarChart>
  );
}

export default Chart;
