import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  // Dummy data for star-rating donut chart
  const series = [50, 30, 20, 10, 5]; // Example data for star ratings in %

  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'], // Label for each segment with star ratings
  };

  return (
    <div>
      <h2 className='text-xl sm:text-2xl text-sky-700 mb-4'>Star Rating Distribution</h2>
      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;