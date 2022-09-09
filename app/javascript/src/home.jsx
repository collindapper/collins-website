import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { handleErrors } from '@utils/fetchHelper';

import Fade from 'react-reveal/Fade';
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
          <div className="row">
            <div className="col-xxl-5 col-11 my-md-auto my-5">
              <Fade left>
              <h3 className="fontSecondary text-black text-start mb-0 pb-0">My name is,</h3>
              <h1 className="fontPrimary text-black navbarNameWeb Display-1 text-start mt-0 pt-0">Collin Dapper</h1>
              </Fade>
              <br/>
              <Fade left>
              <h3 className="fontSecondary text-black text-start mb-0 pb-0">I am a,</h3>
              <h1 className="fontPrimary text-black display-3 text-start">Full-Stack Developer</h1>
              </Fade>
            </div>

            <div className="col-xxl-6 col-10 my-lg-auto d-flex flex-wrap">
              <Fade Big>
              <span className="content"></span>
              </Fade>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="d-flex row">
            <div className="d-flex flex-wrap col-md-8 col-12 justify-content-center">
              {userProjects.map(project => {
                return (
                    <div key={project.id} id={project.id} className="d-flex align-items-center  imageContainer">
                      <img src={project.images} className="projectImage img-responsive" />
                      <div className="middle">
                        <a className="projectHomeLink" href="#"><div className="imageText py-3 px-3">View Project</div></a>
                      </div>
                    </div>
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
