import React from 'react'
import {Bar} from "react-chartjs-2"
import { Chart as ChartJs, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend, plugins, elements } from 'chart.js'
ChartJs.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)
function DemoGraph() {
    const data={
        labels:["Basics","Arrays","Strings","Linked List","Stack & Queue","Hashing","Recursion & Backtracking","Trees","Graphs","Dynamic Programming"],
        datasets: [
            {
                labels:"Topics",
                data:[4,5,3,2,1,8,9,6,4,7],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                barThickness:8,
                
            },
        ],
    }
    const options={
        indexAxis:"y",
        response:true,
        plugins:{
            legend: { position: "top" },
      title: { display: true, text: "Horizontal Bar Chart" },
        },
        
        elements:{
            bar:{
                borderwidth:1,
                borderSkipped:false,
                barThickness:10,
                    
            }
        }
    }
  return (
    <Bar data={data} options={options}></Bar>
  )
}

export default DemoGraph