import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { handleErrors } from '@utils/fetchHelper';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';
import TagCloud from 'TagCloud';
import './home.scss';
import profilePic from './images/collin hawaii 2.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userProjects: [],
    }
  }

  componentDidMount = () => {
    this.getAllUserProjects();
  }

  getAllUserProjects() {
    fetch('/api/projects/')
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          userProjects: data.projects,
        })
      })
  }

  render () {
    const {userProjects} = this.state;
    const avatar = profilePic;
  
    return (
      <Layout>
        {/* HERO SECTION */}
        <div className="HomeBody mb-5">
          <div className="row heroSection container mx-auto mt-5 d-flex align-content-center justify-content-center">
            <Fade left>
            <div className="d-flex col-12 col-md-5 avatar"></div>
            </Fade>

            <Fade right>
            <div className="col-12 col-md-6 my-auto py-4 ms-md-5 introCard">
              <p className="display-1 text-center heading fontPrimary"><strong>Welcome,</strong></p>
              <p className="display-6 text-center subHeading fontSecondary mb-auto">I'm Collin Dapper. Full-Stack Developer.</p>
            </div>
            </Fade>

          </div>
        </div>

        {/* About Me Section */}
        
        <div className="d-flex row container mx-auto mb-5">
          <div className="d-flex arrow bounce mt-5 mb-3">
            <h4 className="text-center fontPrimary me-2">About Me</h4>
            <i class="fa-solid fa-chevron-down mt-1"></i>
          </div>
          <Fade left>
          <div className="col-12 aboutHeroSection my-auto py-4 rounded">
            <h3 className="text-center fontSecondary">Collin is an adaptive and creative junior full-stack web developer with proficiency in front-end programming languages such as: HTML, CSS, and ReactJS; Back-end programming knowledge in JavaScript and Ruby, as well as, experience conducting user research and collaborating with developers to build dynamic websites. Professional strengths include problem-solving, communication and time management. Analytical and leadership mindset from experience in Operations Management.</h3>
          </div>
          </Fade>
        </div>

        {/* Project Hero Section */}
        <div className="d-flex row container mx-auto">
          <div className="d-flex arrow bounce mt-5 mb-3">
            <h4 className="text-center fontPrimary me-2">Projects</h4>
            <i class="fa-solid fa-chevron-down mt-1"></i>
          </div>
          {userProjects.slice(0, 2).map(project => {
            return (
              <Bounce left>
              <a className="col-12 col-md-6 projectContainer mb-5" href="/projects">
              <div key={project.id} id={project.id} className="card">
              <Tada>
              <p className="badge"><span className="badgeFont">Featured</span></p>
              </Tada>
                <img src={project.images} className="cardImage px-2 py-2" />
                <div className="d-flex container descriptionContainer mx-auto">
                  <p className="mx-auto display-6 text-black fontPrimary">{project.title}</p>
                </div>
              </div>
              </a>
              </Bounce>
            )
          })}
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
