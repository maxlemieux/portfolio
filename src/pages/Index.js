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
                  <h5>About Max</h5>
                  <p>Max is a software developer who works with people to build dynamic websites.</p>
                  <p>Max believes code should be beautiful, as well as useful.</p>
                  <p>Max has supported emerging industries with tailored solutions for understanding customer needs.</p>
                  <p>Max is a trained JavaScript programmer with a background in database-driven applications.</p>
              </div>
              <div className="col-lg-4">
                  <div className="card m-2">
                      <div className="card-body">
                          <h2 className="card-title">C.V.</h2>
                          <a href="https://drive.google.com/open?id=1NjjBtJaCl-zi9U1oK6hShtT3L6sAS7-j">Max Lemieux</a>
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