import React from 'react'
import {Carousel} from 'react-bootstrap'
function HomeSlider() {
  return (
    <div className='top-div ' style={{minHeight:'400px'}}>
        <div className='small-div '>
        <Carousel>
            <Carousel.Item>
                <div className='d-flex align-items-center  ' style={{paddingLeft:'150px'}}>
                    <div className=''>
                <h1 style={{color:'white',paddingBottom:'0px'}}>Why you should use</h1>
               
                <div>
                <p style={{color:'white',paddingBottom:'60px'}} className='w-75'>In today’s fast-paced world, efficiency and reliability are crucial. Our platform helps you save time, reduce effort, and get accurate results every time. Whether you’re a beginner or an expert, the intuitive design ensures a smooth experience. By using our service, you unlock powerful features that work seamlessly in the background, letting you focus on what really matters. It’s not just a tool—it’s your partner in achieving more.</p>
                </div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className=''>
                <div className='d-flex  align-items-center'  style={{paddingLeft:'150px'}}>
                    <div>
                <h1 style={{color:'white'}}>How you should use</h1>
                <p style={{color:'white',paddingBottom:'60px'}}  className='w-75'>Getting started is simple—just sign up, explore the features, and start using the tools that best fit your needs. You can contribute by filling out the contribution form to share your ideas, feedback, or resources with the community. Every small input helps improve the platform for everyone. By actively engaging and collaborating, you not only enhance your own experience but also help others benefit from a better, richer toolset.</p>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className=''>
                <div className='d-flex  align-items-center'  style={{paddingLeft:'150px'}}>
                    <div>
                <h1 style={{color:'white'}}>How to use Contribute Form</h1>
                <p style={{color:'white',paddingBottom:'60px'}} className='w-75'>Getting started is simple—just sign up, explore the features, and start using the tools that best fit your needs. You can contribute by filling out the contribution form to share your ideas, feedback, or resources with the community. Every small input helps improve the platform for everyone. By actively engaging and collaborating, you not only enhance your own experience but also help others benefit from a better, richer toolset.</p>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className=''>
                <div className='d-flex  align-items-center'  style={{paddingLeft:'150px'}}>
                    <div>
                <h1 style={{color:'white'}}>What does Graph Indicate</h1>
                <p style={{color:'white',paddingBottom:'60px'}} className='w-75'>This graph represents the most frequently asked interview questions across various topics, collected from contributions by users like you. It highlights which subject areas interviewers tend to focus on the most, helping you understand where to concentrate your preparation efforts. By analyzing these trends, you can create a personalized learning roadmap, focus on high-impact topics, and practice relevant model questions to increase your chances of success in upcoming interviews.</p>
                </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
    </div>
  )
}

export default HomeSlider