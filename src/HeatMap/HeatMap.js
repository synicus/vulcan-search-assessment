import React from 'react'
import './HeatMap.css'
import heatMapData from './../dummyData/heatMapData.js'

const max = Math.max(...heatMapData.map( row => Math.max(...row)))
const min = Math.min(...heatMapData.map( row => Math.min(...row)))
console.log('max',max, min);

const buildRowLabels = () => {
  let rowLabels = [];
  for (let i = 0; i < 24; i++) {
    rowLabels.push(<div><span>{i}</span></div>)
  }
  return rowLabels
}

/* Calculate lightness for HSL color model. 
   The resulting value will be in a range from 50-100.
   A value of 50 results in a fully saturated color,
   and a value of 100 results in white.
*/
const calcBrightness = (num) => (max - num) / (max - min) * 50 + 50

export default () => (
  <div className="heatmap-container">
    <div className="heatmap-header">
      <div>DAY</div>
      <div>Sunday</div>
      <div>Monday</div>
      <div>Tuesday</div>
      <div>Wednesday</div>
      <div>Thursday</div>
      <div>Friday</div>
      <div>Sunday</div>
    </div>
    <div className="heatmap-hours">
      <div>HOUR OF THE DAY</div>
      {buildRowLabels()}
    </div>
    <div className="heatmap">
      {heatMapData.map( row => row.map( cell => <div className="heatmap-cell" style={{backgroundColor: "hsl(120,100%," + calcBrightness(cell) + "%)"}}>{cell}</div>))}
    </div>
    <div className="heatmap-gradient">
      <div>{ max }</div>
      <div>{ Math.round((max - min) * 0.75 + min) }</div>
      <div>{ Math.round((max - min) * 0.50 + min) }</div>
      <div>{ Math.round((max - min) * 0.25 + min) }</div>
      <div>{ min }</div>
    </div>
  </div>
)