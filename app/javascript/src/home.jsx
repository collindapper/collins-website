import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

import Fade from 'react-reveal/Fade';
import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userProjects: [],
    }
  }

  render () {
    return (
      <Layout>
        {/* HERO SECTION */}
        <div className="HomeBody mb-5">
          <div id="ex1" className="row heroSection container mx-auto mt-5 d-flex align-content-center justify-content-center">
            <Fade left>
            <div id="ex1-layer" className="d-flex col-12 col-md-5 avatar shadow-lg"></div>
            </Fade>

            <Fade right>
            <div className="col-12 col-md-6 my-auto py-4 ms-md-5 introCard">
              <p className="display-1 text-center heading fontPrimary"><strong>Collin Dapper</strong></p>
              <p className="display-6 text-center subHeading fontSecondary mb-auto">Full-Stack Software Developer</p>
              <div className="d-flex justify-content-center mt-2">
                <a className="nav-link text-black display-6 text-center navIcons mx-3 px-3" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank"><i className="fa-brands fa-linkedin homeLink"></i></a>
                <a className="nav-link text-black display-6 text-center navIcons mx-3 px-3" href="https://github.com/collindapper" target="_blank"><i className="fa-brands fa-github homeLink"></i></a>
              </div>
            </div>
            </Fade>

          </div>
        </div>

        {/* About Me Section */}
 
        <div className="d-flex row justify-content-around mx-3 aboutTilesContainer">
          <div className="d-flex col-12 col-lg-4 aboutTiles justify-content-center mt-3 mb-5">
            <i className="fa-brands fa-square-js aboutIconsJs display-4 d-flex justify-content-center"></i>
            <h4 className="my-5 py-5 fontSecondary tileInfo text-center">I am an adaptive, creative, and certified Junior Software Developer with proficiency in Back-end programming languages, JavaScript and Ruby...</h4>
          </div>
          <div className="d-flex col-12 col-lg-3 aboutTiles border justify-content-center mt-3 mb-5">
            <i className="fa-brands fa-react aboutIconsReact display-4 d-flex justify-content-center"></i>
            <h4 className="my-5 py-5 fontSecondary tileInfo text-center">knowledgeable in front-end programming languages and frameworks such as: HTML, CSS, and ReactJS...</h4>
          </div>
          <div className="d-flex col-12 col-lg-4 aboutTiles border justify-content-center mt-3 mb-5">
            <i className="fa-brands fa-square-github aboutIconsGithub display-4 d-flex justify-content-center"></i>
            <h4 className="my-5 py-5 fontSecondary tileInfo text-center">Familiar with basics of computing and database use, as well as, conducting user research and collaborating with developers to build dynamic websites...</h4>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="d-flex row container-fluid mx-auto">
            <div className="d-flex arrow bounce mt-5 mb-3">
              <h4 className="text-center fontPrimary me-2">Certifications</h4>
              <i class="fa-solid fa-chevron-down mt-1 arrowDown"></i>
            </div>

            <div className="column">
              <img src={require('./certImages/Pre-Security.jpg')} />
              <img src={require('./certImages/Full-Stack Deployment Certification.jpg')} />
            </div>
            
            <div className="column">
              <img src={require('./certImages/Intro to Cyber Security.jpg')} />
              <img src={require('./certImages/JavaScript Certification.jpg')} />
            </div>
            <a role='button' className="viewProjects button rounded mt-4 py-2 text-center fontSecondary" href='/skills'>View all certifications</a>
          </div>

          {/* Projects Section */}
          <div className="d-flex row container-fluid mx-auto mt-5">
            <div className="d-flex arrow bounce mt-5 mb-3">
              <h4 className="text-center fontPrimary me-2">Projects</h4>
              <i class="fa-solid fa-chevron-down mt-1 arrowDown"></i>
            </div>

            <div className="column">
              <img src={require('./images/Airbnb.jpg')} />
              <img src={require('./images/movie finder.jpg')} />
            </div>
            
            <div className="column">
              <img src={require('./images/currency converter.jpg')} />
              <img src={require('./images/Twitter.png')} />
            </div>
            <a role='button' className="viewProjects button rounded mt-4 py-2 text-center fontSecondary" href='/projects'>View all projects</a>
          </div>
        
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
