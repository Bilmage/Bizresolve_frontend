import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

const rangeData = [
  { day: 'Ratings', temperature: 30 },
  { day: 'Users', temperature: 32 },
  { day: 'Comments', temperature: 28 },
  // Add more data points as needed
];

function Chart() {
  const chartWidth = window.innerWidth >= 768 ? 730 : 300; // Adjust the width based on screen size
  const chartHeight = 250; // You can adjust the height as needed

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <BarChart
        width={chartWidth}
        height={chartHeight}
        data={rangeData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Chart;
