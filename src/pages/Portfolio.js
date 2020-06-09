import React from 'react';

import Projects from '../utils/projects.json';

const Portfolio = () => {
  console.log(Projects)
  return (
    <main>
      <div className="jumbotron">
          <h1 className="display-4">Portfolio</h1>
          <hr />
          <p className="lead">A sample of recent work, with a focus on React and Node.js app development.</p>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card">
                <img src="assets/images/portfolio08-cangaroo.png" className="card-img-top" alt="cangaroo" />
                <div className="card-body">
                  <h5 className="card-title">Cangaroo</h5>
                  <p className="card-text">Cangaroo is a Food Bank inventory management system.</p>
                  <p className="card-text">This application was created by Andy J Chen, Ian Johnson, Max Lemieux and Corey Walker.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Express.js/Node.js</li>
                  <li className="list-group-item">Handlebars/Bulma</li>
                  <li className="list-group-item">Heroku/JawsDB/MySQL</li>
                  <li className="list-group-item">Verifalia</li>
                </ul>
                <div className="card-body">
                  <a href="https://github.com/cwalker226/cangaroo" className="card-link">Browse code</a>
                  <br/>
                  <a href="https://cangaroo.herokuapp.com/">cangaroo demo</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card">
                <img src="assets/images/portfolio07-mvcheezburger.png" className="card-img-top" alt="mvcheezburger" />
                <div className="card-body">
                  <h5 className="card-title">mvcheezburger</h5>
                  <p className="card-text">mvcheezburger is a status tracking app built with Express.js, Node.js, MySQL and Handlebars.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Express.js</li>
                  <li className="list-group-item">Node.js</li>
                  <li className="list-group-item">MySQL</li>
                  <li className="list-group-item">Handlebars</li>
                </ul>
                <div className="card-body">
                  <a href="https://github.com/maxlemieux/mvcheezburger" className="card-link">Browse code</a>
                  <br/>
                  <a href="https://mvcheezburger.herokuapp.com/">mvcheezburger demo</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card">
                <img src="assets/images/portfolio05-nodeemployeedb.png" className="card-img-top" alt="node-employee-db" />
                <div className="card-body">
                  <h5 className="card-title">node-employee-db</h5>
                  <p className="card-text">node-employee-db is a CLI app built in Node.js. Stores organizational structure in a MySQL database.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Node.js</li>
                  <li className="list-group-item">Inquirer.js</li>
                  <li className="list-group-item">MySQL</li>
                </ul>
                <div className="card-body">
                  <a href="https://github.com/maxlemieux/node-employee-db" className="card-link">Browse code</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card">
                <img src="assets/images/portfolio06-expressnotepad.png" className="card-img-top" alt="express-notepad" />
                <div className="card-body">
                  <h5 className="card-title">express-notepad</h5>
                  <p className="card-text">express-notepad is a note taking app built with Express.js and Node.js. Allows the user to take notes, view them and remove them, in a single page app interface.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Express.js</li>
                  <li className="list-group-item">Node.js</li>
                  <li className="list-group-item">Bootstrap 4</li>
                </ul>
                <div className="card-body">
                  <a href="https://github.com/maxlemieux/express-notepad" className="card-link">Browse code</a>
                  <br/>
                  <a href="https://immense-eyrie-52876.herokuapp.com/">express-notepad demo</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card">
                  <img src="assets/images/portfolio04-engiteamgen.png" className="card-img-top" alt="engi-team-gen" />
                  <div className="card-body">
                    <h5 className="card-title">engi-team-gen</h5>
                    <p className="card-text">engi-team-gen is a CLI app built in Node.js. Creates HTML output visualizing the structure of workplace teams.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Node.js</li>
                    <li className="list-group-item">Inquirer.js</li>
                    <li className="list-group-item">Bootstrap 4</li>
                  </ul>
                  <div className="card-body">
                    <a href="https://github.com/maxlemieux/engi-team-gen" className="card-link">Browse code</a>
                    <br/>
                    <a href="https://raw.githubusercontent.com/maxlemieux/engi-team-gen/master/demo/engi-team-gen-demo.gif" className="card-link">engi-team-gen demo</a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                    <img src="assets/images/portfolio01-wallaby.png" className="card-img-top" alt="Wallaby" />
                    <div className="card-body">
                      <h5 className="card-title">Wallaby</h5>
                      <p className="card-text">Wallaby is a single-page application which leverages MealDB and Nutritionix to display nutritional information in the context of a recipe search website.</p>
                      <p className="card-text">This application was created by Corey Walker, Ian Johnson and Max Lemieux. We used Kanban for project management, while relying heavily on atomic commits and feature branching in Git to coordinate the work.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">JavaScript/AJAX</li>
                      <li className="list-group-item">MealDB</li>
                      <li className="list-group-item">Nutritionix</li>
                    </ul>
                    <div className="card-body">
                      <a href="https://github.com/ianbenjohn/Project-1" className="card-link">Browse code</a>
                      <br/>
                      <a href="https://ianbenjohn.github.io/Project-1/" className="card-link">Wallaby demo</a>
                    </div>
                  </div>
                </div>
         
                <div className="col-sm-6 col-md-6 col-lg-4">
                    <div className="card">
                        <img src="assets/images/portfolio02-devquiz.png" className="card-img-top" alt="Developer Quiz" />
                        <div className="card-body">
                          <h5 className="card-title">Developer Quiz</h5>
                          <p className="card-text">A single-page application using jQuery, which times the user's ability to answer a series of questions.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">JavaScript</li>
                          <li className="list-group-item">Bootstrap</li>
                          <li className="list-group-item">jQuery</li>
                        </ul>
                        <div className="card-body">
                          <a href="https://github.com/maxlemieux/devquiz" className="card-link">Browse code</a>
                          <br/>
                          <a href="https://maxlemieux.github.com/devquiz/" className="card-link">Developer Quiz demo</a>
                        </div>
                      </div>
                </div>
         
                <div className="col-sm-6 col-md-6 col-lg-4">
                    <div className="card">
                        <img src="assets/images/portfolio03-jsweather.png" className="card-img-top" alt="jsweather" />
                        <div className="card-body">
                          <h5 className="card-title">jsweather</h5>
                          <p className="card-text">jsweather is a weather dashboard to quickly browse weather for any city, implemented as a single-page application in JavaScript. It uses the OpenWeatherMap API to fetch data.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">JavaScript</li>
                          <li className="list-group-item">OpenWeatherMap</li>
                          <li className="list-group-item">moment.js</li>
                        </ul>
                        <div className="card-body">
                          <a href="https://github.com/maxlemieux/jsweather" className="card-link">Browse code</a>
                          <br/>
                          <a href="https://maxlemieux.github.com/jsweather/" className="card-link">jsweather demo</a>
                        </div>
                    </div>
                </div>

                
          </div>
            </div>
        </main>
  )
};

export default Portfolio;
