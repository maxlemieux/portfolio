import React from 'react';

import Project from '../components/Project';
import Projects from '../utils/projects.json';

const Portfolio = () => {
  const projects = Projects.projects;
  return (
    <main>
      <div className="jumbotron">
        <h1 className="display-4">Portfolio</h1>
        <hr />
        <p className="lead">A sample of recent work, with a focus on React and Node.js app development.</p>
      </div>
      <div className="container">
        <div className="row">
          {projects.map((item, key) => {
            return (
              <Project project={item} key={item.name} />
            )
          })}
        </div>
      </div>
    </main>
  )
};

export default Portfolio;
