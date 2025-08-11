import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {Bar} from "react-chartjs-2"
import { Chart as ChartJs, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend, plugins, elements } from 'chart.js'
import axios from "axios"
ChartJs.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)

function ActualGraph() {
    const {role}=useParams()
    const [chartdata,setChartData]=useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:3000/admin-api/contributeddata/${role}`)
        .then((res)=>{
            const data = res.data;
            const tags=[]
            const count =[]
            data.payload.forEach(roleObj=>{
                roleObj.tag.forEach(tagObj=>{
                    tags.push(tagObj.tag);
                    count.push(tagObj.count)
                })
            })
            setChartData({
                labels:tags,
                datasets:[{
                    label:"Topics",
                    data:count,
                     backgroundColor: "rgba(75, 192, 192, 0.6)",
                barThickness:8,
                    }
                ]
            })
            

        })
        
        .catch((err)=>{
          console.log(err)
        })
    },[role])
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
    if (!chartdata) {
  return <div>Loading chart...</div>;
}
  return (
    <div className='home-graph container'>
        <Bar data={chartdata} options={options}></Bar>
    </div>
  )
}

export default ActualGraph