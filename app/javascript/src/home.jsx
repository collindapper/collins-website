import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { handleErrors } from '@utils/fetchHelper';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import TagCloud from 'TagCloud';

import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userProjects: [],
    }
  }

  componentDidMount = () => {
    const myTags = [
      'Team Leadership', 'Front-End Development', 'JavaScript', 'React.js', 'Management', 'Ruby Programming', 'Ruby on Rails', 'REST APIs', 'JQuery', 'CSS', 'HTML', 'Dynamic Websites', 'Data Analysis', 'postgreSQL', 'GitHub', 'Heroku', 'AWS S3', 'Full-Stack Development', 'MVC Modeling'
    ];
    
    var tagCloud = TagCloud('.content', myTags,{
      radius: 400,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
    });

    var colors = ['#4285F4', '#01A6F0', "#FF1E1E", "#07AE17", '#9B05DB', '#EE8F00'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.content').style.color = random_color;

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
  
    return (
      <Layout>
        <div className="d-flex mainContent container">
            <div className="col-lg-5 col-12 my-lg-auto my-5">
              <Fade left>
              <h3 className="fontSecondary text-black text-lg-start text-center mb-0 pb-0">Hello,</h3>
              <h1 className="fontPrimary text-black display-1 text-lg-start text-center mt-0 pt-0">I'm Collin,</h1>
              </Fade>
              <br/>
              <Fade left>

              <h1 className="fontPrimary text-black display-4 text-lg-start text-center">Full-Stack Developer</h1>
              </Fade>
            </div>

            <div className="interactiveSphere col-lg-7 col-12 my-md-auto d-none d-lg-flex">
              <Fade big>
              <span className="content"></span>
              </Fade>
            </div>
        </div>

        <div className="container mt-md-5">
          <div className="d-flex row border-top border-dark">
            <Fade left>
            <div className="d-flex col-12 col-md-3 justify-content-md-start justify-content-center pt-5">
              <p className="fontPrimary display-1 text-black text-md-start"><strong>Work</strong></p>
            </div>
            </Fade>

            
            <div className="d-flex flex-wrap col-md-9 col-12 justify-content-md-end justify-content-center">
            
              {userProjects.map(project => {
                return (
                  <Bounce right>
                    <div key={project.id} id={project.id} className="d-flex align-items-center imageContainer mx-1">
                      <img src={project.images} className="projectImage img-responsive" />
                      <div className="middle">
                        <a className="projectHomeLink" href="/projects"><div className="imageText py-3 px-3">View Projects</div></a>
                      </div>
                    </div>
                  </Bounce>
                )
              })};
              
            </div>
            
          </div>
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
