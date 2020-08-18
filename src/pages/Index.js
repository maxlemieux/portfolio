import React from 'react';

const Index = () => {
  return (
    <main>
      <div className="jumbotron">
          <h1 className="display-4">Max Lemieux</h1>
          <h4>
              <span className="badge badge-info"><i className="fab fa-react"></i> React</span>
              <span className="badge badge-primary"><i className="fab fa-js-square"></i> JavaScript</span>
              <span className="badge badge-warning"><i className="fab fa-node"></i> Node/Express</span>
              <span className="badge badge-light"><i className="fas fa-database"></i> MongoDB</span>
              <span className="badge badge-dark"><i className="fas fa-cloud"></i> Heroku</span>
              <span className="badge badge-secondary"><i className="fas fa-layer-group"></i> Django</span>
          </h4>
          <p className="lead">Full Stack Software Engineer - Portland, OR</p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-lg-4 col-sm-12">
                <img className="w-100 mb-3 imgFluid" src="./assets/images/Selfie Small.png" width="100%" alt="..." />
              </div>
              <div className="col-lg-4">
                <h5>About me</h5>
                <p>I am a Full Stack Engineer with a background in systems.  I recently earned a certificate in Full Stack Development from the University of Oregon, where I developed skills in JavaScript, CSS frameworks including Bootstrap and Bulma, MongoDB, Node.js and React.js.</p>
                <p>As a creator, I enjoy building projects from start to finish. Systems engineering has prepared me to consider scale and edge cases in my work.</p>
                <p>Connecting resources to add value is something that interests me. As part of a team of 3, I recently created a location based recommendation service for gardeners to find plants to grow in their climate. I created internal APIs which utilize external services to provide realtime search results for plant data.</p>
                <p>Outside of work time, I’m probably in the garden, hiking on a forest trail, trying a new recipe in the kitchen, or checking out new technologies. </p>
                <p>I look forward to applying my energies towards a better future for all. If you have an opportunity that you think would be a good fit, please reach out here.</p>
              </div>
              <div className="col-lg-4">
                  <div className="card m-2">
                      <div className="card-body">
                          <h2 className="card-title">C.V.</h2>
                          <a href="https://drive.google.com/file/d/1WSzyBHg-IcmDQsnvKuKXAaxUorcNiciy/view?usp=sharing">Max Lemieux</a>
                      </div>
                  </div>
                  <div className="card m-2">
                      <div className="card-body">
                          <h2>Other interests</h2>
                          <ul>
                              <li><strong>Gardening:</strong> <a target="_new" href="https://backyardhabitats.org/">Backyard Habitats</a></li>
                              <li>Restoring a <strong>classic automobile</strong></li>
                          </ul>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
  </main>
  )
}

export default Index;