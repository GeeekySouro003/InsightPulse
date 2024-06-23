import React from 'react';
import Chart from 'react-apexcharts';

const AreaDTChart = () => {
  // Dummy data for datetime area chart
  const series = [{
    name: 'Series 1',
    data: [
        { x: new Date('2024-03-15'), y: 50 },
        { x: new Date('2024-03-20'), y: 70 },
      { x: new Date('2024-03-27'), y: 60 },
      { x: new Date('2024-04-02'), y: 75 },
      { x: new Date('2024-04-10'), y: 80 },
    ],
  }];

  const options = {
    chart: {
      type: 'area',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <>
      <h2 className='text-xl sm:text-2xl text-sky-700 mb-4'>Feedback trends over time</h2>
      <Chart options={options} series={series} type="area" height={350} />
    </>
  );
};

export default AreaDTChart;