import react from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

const Projects = () => {

    return (
    <div className="projects">
    
      <Splide aria-label="..." data-splide='{"perPage":1,"arrows":false,"wheel":true,"releaseWheel":true,"flickPower":600}'>
  <SplideSlide>
      <div class="projects-container">

          <div class="project-details">
              <h1>City Online Market</h1>
              <p>A e-commerce website for buying essentials good within the City. This is a Capstone Project and also participated in a Start-up competition.</p> 
          
             <button className="project-btn">View Project</button>
        </div>

        <div class="project-image">
        <img src={process.env.PUBLIC_URL + 'images/projects/projectcom.jpg'} alt="Image 1"/>
        </div>
      </div>
   
  </SplideSlide>
  <SplideSlide>
      <div class="projects-container">

          <div class="project-details">
              <h1>Tracking The Crown</h1>
              <p>This Website is to track the covid in every country. This Web-application using API from the Api.covid19api. 
             </p>
             <button className="project-btn">View Project</button>
        </div>

        <div class="project-image">
        <img src={process.env.PUBLIC_URL + 'images/projects/projectcovid.jpg'} alt="Image 1"/>
        </div>
      </div>
   
  </SplideSlide>

  <SplideSlide>
      <div class="projects-container">

          <div class="project-details">
              <h1>KeyCode Generator </h1>
              <p>This is a simple keycode generator. It is a simple project to detect key code in any key pressed. 
             </p>
             <button className="project-btn">View Project</button>
        </div>

        <div class="project-image">
        <img src={process.env.PUBLIC_URL + 'images/projects/projectkey.jpg'} alt="Image 1"/>
        </div>
      </div>
   
  </SplideSlide>

  
</Splide>
    </div>)

}
export default Projects;