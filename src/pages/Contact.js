import React from 'react';

export default function Contact() {
  return (
    <main>
      <div class="jumbotron">
        <h1 class="display-4">Contact</h1>
      </div>
      <div class="row">
        <div class="col-lg-7 offset-lg-1 col-sm-12">
          <div class="border container rounded bg-light mt-3 p-3 mx-auto">  
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