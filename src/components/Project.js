import React from 'react';

const Project = (props) => {
  const { description, image, name, technologies, repo, demo } = props.project;
  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          {technologies.map(item => {
            return (
            <li className="list-group-item">{item}</li>
            )
          })}
        </ul>
        <div className="card-body">
          <a href={repo} className="card-link">Browse code</a>
          <br/>
          <a href={demo}>{name} demo</a>
        </div>
      </div>
    </div>
  )
}

export default Project;