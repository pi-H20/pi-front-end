import React, { Component } from 'react'

class AboutUs extends Component {
  render() {
    return (
      <div className="main">
      <div className = 'aboutUs'>

      <section className = 'aboutPaolo'>
        <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH2U28Z1N-62a68e9133e7-1024`} alt={`Paolo`}/>
        <h2>Paolo</h2>
        <p className ='description'>AWS SDE</p>
        <p><a href="https://github.com/chidrome/">Github</a></p>
        <p><a href="https://www.linkedin.com/in/paolo-chidrome/">LinkedIn</a></p>
      </section>

        <section className = 'aboutJen'>
            <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH4UY1JBD-b0f5e8bd4702-1024`} alt={`Jen`}/>
            <h2>Jen</h2>
            <p className ='description'>AWS SDE</p>
            <p><a href="https://github.com/jshin83">Github</a></p>
            <p><a href="https://linkedin.com/in/jenshin83/">LinkedIn</a></p>

        </section>
    <section className = 'aboutLiz'>
        <img className = 'ourImage' src= {`https://ca.slack-edge.com/T039KG69K-UC6083WFP-62d0a3f3d5b2-512`} alt={`Liz`}/>
        <h2>Liz</h2>
        <p className ='description'>AWS SDE</p>
        <p><a href="https://www.github.com/emd5">Github</a></p>
        <p><a href="https://linkedin.com/in/lizmahoney/">LinkedIn</a></p>
    </section>
        

        <section className = 'aboutJorie'>
        <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH2KYU924-9ca25c3b8dfe-512`} alt={`Jorie`}/>
        <h2>Jorie</h2>
        <p className ='description'>AWS SDE</p>
        <p><a href="https://github.com/joriefernandez">Github</a></p>
        <p><a href="https://www.linkedin.com/in/joriefernandez/">LinkedIn</a></p>
        </section>
        </div>
      </div>
    )
  }
}


export default AboutUs;