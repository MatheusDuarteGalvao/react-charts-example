import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart';

function App() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Penápolis', 'Araçatuba', 'Birigui', 'São José do Rio Preto'],
      datasets: [
        {
          label: 'População',
          data: [
            63407,
            197016,
            108728,
            460671,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206,86, 0.6)',
            'rgba(125,224,151, 0.6)'
          ]
        }
      ]
    });
  }, [])

  return (
    <div className="App">
      <Chart chartData={chartData} displayTitle displayLegend legendPosition="bottom" />
    </div>
  );
}

export default App;
