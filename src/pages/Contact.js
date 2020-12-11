import React from 'react';

const Contact = () => {
  return (
    <main>
      <div className="jumbotron">
        <h1 className="display-4">Contact</h1>
      </div>
      <div className="row">
        <div className="col-lg-7 offset-lg-1 col-sm-12">
          <div className="border container rounded mt-3 p-3 mx-auto">  
            <h3>GitHub</h3>
            <p><a href="https://github.com/maxlemieux">https://github.com/maxlemieux</a></p>
            <h3>LinkedIn</h3>
            <p><a href="https://linkedin.com/in/max-lemieux-44b8231a1">
                https://linkedin.com/in/max-lemieux-44b8231a1</a>
            </p>
            <h3>Email</h3>
            <p><a href='mailto:max.lemieux@gmail.com'>max.lemieux@gmail.com</a></p>
            <h3>Phone</h3>
            <p>(503) 278-6796</p>
          </div>
        </div>
      </div>
      <br />
    </main> 
  )
};

export default Contact;
