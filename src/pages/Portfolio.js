import React from 'react';

export default function Portfolio() {
  return (
    <main>
      <div class="jumbotron">
          <h1 class="display-4">Portfolio</h1>
          <hr />
          <p class="lead">A sample of recent work, with a focus on Node.js app development.</p>
      </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="card">
                <img src="assets/images/portfolio08-cangaroo.png" class="card-img-top" alt="cangaroo" />
                <div class="card-body">
                  <h5 class="card-title">Cangaroo</h5>
                  <p class="card-text">Cangaroo is a Food Bank inventory management system.</p>
                  <p class="card-text">This application was created by Andy J Chen, Ian Johnson, Max Lemieux and Corey Walker.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Express.js/Node.js</li>
                  <li class="list-group-item">Handlebars/Bulma</li>
                  <li class="list-group-item">Heroku/JawsDB/MySQL</li>
                  <li class="list-group-item">Verifalia</li>
                </ul>
                <div class="card-body">
                  <a href="https://github.com/cwalker226/cangaroo" class="card-link">Browse code</a>
                  <br/>
                  <a href="https://cangaroo.herokuapp.com/">cangaroo demo</a>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="card">
                <img src="assets/images/portfolio07-mvcheezburger.png" class="card-img-top" alt="mvcheezburger" />
                <div class="card-body">
                  <h5 class="card-title">mvcheezburger</h5>
                  <p class="card-text">mvcheezburger is a status tracking app built with Express.js, Node.js, MySQL and Handlebars.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Express.js</li>
                  <li class="list-group-item">Node.js</li>
                  <li class="list-group-item">MySQL</li>
                  <li class="list-group-item">Handlebars</li>
                </ul>
                <div class="card-body">
                  <a href="https://github.com/maxlemieux/mvcheezburger" class="card-link">Browse code</a>
                  <br/>
                  <a href="https://mvcheezburger.herokuapp.com/">mvcheezburger demo</a>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="card">
                <img src="assets/images/portfolio05-nodeemployeedb.png" class="card-img-top" alt="node-employee-db" />
                <div class="card-body">
                  <h5 class="card-title">node-employee-db</h5>
                  <p class="card-text">node-employee-db is a CLI app built in Node.js. Stores organizational structure in a MySQL database.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Node.js</li>
                  <li class="list-group-item">Inquirer.js</li>
                  <li class="list-group-item">MySQL</li>
                </ul>
                <div class="card-body">
                  <a href="https://github.com/maxlemieux/node-employee-db" class="card-link">Browse code</a>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="card">
                <img src="assets/images/portfolio06-expressnotepad.png" class="card-img-top" alt="express-notepad" />
                <div class="card-body">
                  <h5 class="card-title">express-notepad</h5>
                  <p class="card-text">express-notepad is a note taking app built with Express.js and Node.js. Allows the user to take notes, view them and remove them, in a single page app interface.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Express.js</li>
                  <li class="list-group-item">Node.js</li>
                  <li class="list-group-item">Bootstrap 4</li>
                </ul>
                <div class="card-body">
                  <a href="https://github.com/maxlemieux/express-notepad" class="card-link">Browse code</a>
                  <br/>
                  <a href="https://immense-eyrie-52876.herokuapp.com/">express-notepad demo</a>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="card">
                  <img src="assets/images/portfolio04-engiteamgen.png" class="card-img-top" alt="engi-team-gen" />
                  <div class="card-body">
                    <h5 class="card-title">engi-team-gen</h5>
                    <p class="card-text">engi-team-gen is a CLI app built in Node.js. Creates HTML output visualizing the structure of workplace teams.</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Node.js</li>
                    <li class="list-group-item">Inquirer.js</li>
                    <li class="list-group-item">Bootstrap 4</li>
                  </ul>
                  <div class="card-body">
                    <a href="https://github.com/maxlemieux/engi-team-gen" class="card-link">Browse code</a>
                    <br/>
                    <a href="https://raw.githubusercontent.com/maxlemieux/engi-team-gen/master/demo/engi-team-gen-demo.gif" class="card-link">engi-team-gen demo</a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="card">
                    <img src="assets/images/portfolio01-wallaby.png" class="card-img-top" alt="Wallaby" />
                    <div class="card-body">
                      <h5 class="card-title">Wallaby</h5>
                      <p class="card-text">Wallaby is a single-page application which leverages MealDB and Nutritionix to display nutritional information in the context of a recipe search website.</p>
                      <p class="card-text">This application was created by Corey Walker, Ian Johnson and Max Lemieux. We used Kanban for project management, while relying heavily on atomic commits and feature branching in Git to coordinate the work.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">JavaScript/AJAX</li>
                      <li class="list-group-item">MealDB</li>
                      <li class="list-group-item">Nutritionix</li>
                    </ul>
                    <div class="card-body">
                      <a href="https://github.com/ianbenjohn/Project-1" class="card-link">Browse code</a>
                      <br/>
                      <a href="https://ianbenjohn.github.io/Project-1/" class="card-link">Wallaby demo</a>
                    </div>
                  </div>
                </div>
         
                <div class="col-sm-6 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="assets/images/portfolio02-devquiz.png" class="card-img-top" alt="Developer Quiz" />
                        <div class="card-body">
                          <h5 class="card-title">Developer Quiz</h5>
                          <p class="card-text">A single-page application using jQuery, which times the user's ability to answer a series of questions.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">JavaScript</li>
                          <li class="list-group-item">Bootstrap</li>
                          <li class="list-group-item">jQuery</li>
                        </ul>
                        <div class="card-body">
                          <a href="https://github.com/maxlemieux/devquiz" class="card-link">Browse code</a>
                          <br/>
                          <a href="https://maxlemieux.github.com/devquiz/" class="card-link">Developer Quiz demo</a>
                        </div>
                      </div>
                </div>
         
                <div class="col-sm-6 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="assets/images/portfolio03-jsweather.png" class="card-img-top" alt="jsweather" />
                        <div class="card-body">
                          <h5 class="card-title">jsweather</h5>
                          <p class="card-text">jsweather is a weather dashboard to quickly browse weather for any city, implemented as a single-page application in JavaScript. It uses the OpenWeatherMap API to fetch data.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">JavaScript</li>
                          <li class="list-group-item">OpenWeatherMap</li>
                          <li class="list-group-item">moment.js</li>
                        </ul>
                        <div class="card-body">
                          <a href="https://github.com/maxlemieux/jsweather" class="card-link">Browse code</a>
                          <br/>
                          <a href="https://maxlemieux.github.com/jsweather/" class="card-link">jsweather demo</a>
                        </div>
                    </div>
                </div>

                
          </div>
            </div>
        </main>
  )
};