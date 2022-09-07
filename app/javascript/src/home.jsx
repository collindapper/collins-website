import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { handleErrors } from '@utils/fetchHelper';

import Fade from 'react-reveal/Fade';
import TagCloud from 'TagCloud';

import './home.scss';

class Home extends React.Component {

  componentDidMount = () => {
    const myTags = [
      'Team Leadership', 'Front-End Development', 'JavaScript', 'React.js', 'Management', 'Ruby', 'Ruby on Rails', 'REST APIs', 'JQuery', 'CSS', 'HTML', 'Dynamic Websites', 'Data Analysis', 'mySQL', 'GitHub', 'Heroku', 'AWS S3', 'Full-Stack Development'
    ];
    
    var tagCloud = TagCloud('.content', myTags,{
      radius: 400,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
    });

    var colors = ['#4285F4', '01A6F0', "FF1E1E", "07AE17"];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.content').style.color = random_color;

  }

  render () {
    
  
    return (
      <Layout>
        <div className="d-flex mainContent container">
          <div className="col-md-5 col-12 my-md-auto my-5">
            <Fade left>
            <h3 className="fontSecondary text-white text-start mb-0 pb-0">My name is,</h3>
            <h1 className="fontPrimary text-white navbarNameWeb Display-1 text-start mt-0 pt-0">Collin Dapper</h1>
            </Fade>
            <br/>
            <Fade left>
            <h3 className="fontSecondary text-white text-start mb-0 pb-0">I am a,</h3>
            <h1 className="fontPrimary text-white display-3 text-start">Full-Stack Developer</h1>
            </Fade>
          </div>

          <div className="col-md-6 col-12 my-md-auto d-none d-md-flex">
            <Fade Big>
            <span className="content"></span>
            </Fade>
          </div>
        </div>

        <div className="d-flex container row mx-auto border-top">
          <div className="workHeading">
            <strong>Work</strong>
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
