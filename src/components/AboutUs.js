import React, { Component } from 'react'


class AboutUs extends Component {
  render() {
    return (
      <div>
      <div className = 'aboutUsDiv'>
      <section className = 'aboutPaolo'>
        <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH2U28Z1N-62a68e9133e7-1024`} alt={`Paolo`}/>
        <h2>Paolo</h2>
            <p className = 'paoloPara'>I started my career working in the military as an intelligence analyst. After the military I started working for Google as a Team lead for a specialized team that would map out not the outside world, but the “inside” world. My team mapped out inside malls, best buys, home depots, airports etc. Then I started working for Microsoft first as a Data Analyst and then worked my way into a Project Manager role. Where it involved quite a bit of data mining, SQL Querying, Report Generating for senior leadership. I led projects that involved process improvements which cut process-oriented work in half. Soon after, I was invited to come join Amazon Instant Video team (known now as Prime Video) and work with the metadata team as a Program Manager. I left Amazon to pursue a once in a lifetime opportunity to caddie for my brother-in-law on the PGA tour. When I decided to come back to corporate, I wanted to come back to where my passion lies and that’s in Software Development</p>
      </section>

       <section className = 'aboutJen'>
        <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH4UY1JBD-b0f5e8bd4702-1024`} alt={`Jen`}/>
          <h2>Jen</h2>
            <p className = 'jenPara'>I am a curious, problem-solver whose diverse background in broadcasting and teaching exposed me to a broad range of different personalities. Living abroad helped me develop interesting perspectives when I am presented with puzzles. I adapt well and have a love of learning; I believe every moment is a teachable one, and am continuously striving to understand more about the world. I studied software development and love how I am constantly challenged to grow. I would love to be part of a team that values quality and writes back-end programs.</p>
       </section>
       
        
        <section className = 'aboutLiz'>
          <img className = 'ourImage' src= {`https://ca.slack-edge.com/T039KG69K-UC6083WFP-62d0a3f3d5b2-512`} alt={`Liz`}/>
            <h2>Liz</h2>
            <p className = 'LizPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident nulla ratione, porro possimus consequuntur vitae cum voluptates amet laboriosam. Iste dolores modi molestias nihil harum suscipit maxime eum mollitia!</p>
        </section>
        

        <section className = 'aboutJorie'>
          <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH2KYU924-9ca25c3b8dfe-512`} alt={`Jorie`}/>
            <h2>Jorie</h2>
            <p className = 'JoriePara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit facilis quo, quas voluptas porro nam architecto ipsam saepe? Aperiam officia delectus deserunt deleniti blanditiis minima? Dolore optio expedita sunt tenetur!</p>
        </section>        
      </div>
      </div>
    )
  }
}


export default AboutUs;