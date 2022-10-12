import React, { useState, useContext } from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { Series } from 'highcharts';
import { DataContext } from "../Context";


function Chart() {
    const dataContext = useContext(DataContext);
    const categories = dataContext.data.map((value : any) => value.model);
    const series = dataContext.data.map((value : any) => value.price);

    const setHoverData = (e : any)  => {
        setHover(e.target.category);
    }

    const chartOptions = {
        xAxis: {
          categories: categories
        },
        series: [
          { data: series }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: setHoverData
              }
            }
          }
        }
      };
    const [hoverData, setHover] = useState(null);
    
    console.log(chartOptions)
  return (
    <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      <h3>Hovering over {hoverData}</h3>
      </div>
  )
}

export default Chart