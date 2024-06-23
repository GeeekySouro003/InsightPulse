import React from 'react';
import Chart from 'react-apexcharts';

const RadarChart = () => {
  // Dummy data for radar chart
  const series = [{
    name: 'Series 1',
    data: [3, 5, 1, 6, 7],
  }];

  const options = {
    chart: {
      type: 'radar',
    },
    xaxis: {
      categories: ['Product feedback', 'Customer service', 'Website experience', 'Test type-1', 'Test type-2'],
    },
  };

  return (
    <>
      <h2 className='text-xl sm:text-2xl text-sky-700'>Distribution of feedback categories</h2>
      <Chart options={options} series={series} type="radar" height={350} />
    </>
  );
};

export default RadarChart;