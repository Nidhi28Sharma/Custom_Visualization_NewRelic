import React from 'react';
import PropTypes from 'prop-types';
import {LineChart, SparklineChart, PieChart} from "nr1";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from 'recharts';
import {Card, CardBody, HeadingText, NrqlQuery, Spinner, AutoSizer} from 'nr1';

export default class NidhisharmaVisualization extends React.Component {
     render() {
    return <>
    <p style={{color: "red", padding:"10px", alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is LineChart</p>
    <LineChart style={{width:"90%", height:"95%"}}
    accountId = {3931788}
    query = "SELECT average(host.memoryUsedPercent) AS 'Memory used %' FROM Metric WHERE `entityGuid` = 'MzkzMTc4OHxJTkZSQXxOQXwyNTg3ODg5Nzc4NjI5Mjk5NzI4' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    
    <p style={{color: "red", padding:"10px" , alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is Pie-Chart</p>
    <PieChart
    accountId = {3931788}
    query = "SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'MzkzMTc4OHxJTkZSQXxOQXwyNTg3ODg5Nzc4NjI5Mjk5NzI4' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    {/* <NRQL/> */}
    </>;
  }
}