import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

function Chart (props) {

  return (
    <div className="chart">
      <Bar
        data={props.chartData}
        options={{ 
          title:{
            display: props.displayTitle,
            text: 'Cidades da Região Noroeste Paulista',
            fontSize: 25
          },
          legend:{
            display: props.displayLegend,
            position: props.legendPosition
          },
          maintainAspectRatio: true
        }}
      />

      <Line
        data={props.chartData}
        options={{
          title:{
            display:props.displayTitle,
            text: 'Cidades da Região Noroeste Paulista',
            fontSize:25
          },
          legend:{
            display:props.displayLegend,
            position:props.legendPosition
          }
        }}
      />

      <Pie
        data={props.chartData}
        options={{
          title:{
            display:props.displayTitle,
            text: 'Cidades da Região Noroeste Paulista',
            fontSize:25
          },
          legend:{
            display:props.displayLegend,
            position:props.legendPosition
          }
        }}
      />
    </div>
  );
}

export default Chart;
