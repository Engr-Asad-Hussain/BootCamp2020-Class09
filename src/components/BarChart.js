import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Covid Patients',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [-65, 99, -80, 81, 16, 35, 20]
    },
    {
        label: 'Recodered Patients',
        backgroundColor: 'rgba(25,99,32,0.2)',
        borderColor: 'rgba(25,99,32,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(25,99,32,0.4)',
        hoverBorderColor: 'rgba(25,0,32,1)',
        data: [65, -59, 80, 81, -56, 55, 40]
      }
  ]
};

export default function BarChart() {

    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={450}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
}