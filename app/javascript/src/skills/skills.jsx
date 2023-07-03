import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import Layout from '@src/layout';

import './skills.scss';
import Slide from 'react-reveal/Slide';


class Skills extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render () {

    return (
      <Layout>
        <div className="container skillsContainer py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Slide left>
            <p className="heading mb-0 display-3 fontPrimary"><strong>Skills</strong></p>
            </Slide>
          </div>
          <br/>
          <div className="d-flex align-items-center mb-4">
            <Slide left>
            <h2 className="fontPrimary mx-auto">Programming Languages and Frameworks</h2>
            </Slide>
          </div>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fab fa-js-square"></i></h1>
              <h3 className='fontSecondary text-center'>JavaScript</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fab fa-react"></i></h1>
              <h3 className='fontSecondary text-center'>ReactJS</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fab fa-html5"></i></h1>
              <h3 className='fontSecondary text-center'>HTML</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fab fa-css3-alt"></i></h1>
              <h3 className='fontSecondary text-center'>CSS</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fa-solid fa-code"></i></h1>
              <h3 className='fontSecondary text-center'>Ruby</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fa-solid fa-code"></i></h1>
              <h3 className='fontSecondary text-center'>Ruby on Rails</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fa-solid fa-laptop-code"></i></h1>
              <h3 className='fontSecondary text-center'>Full-Stack Software Development</h3>
            </div>
          </div>
          <br/>


          <div className="d-flex align-items-center mb-4 mt-4">
            <Slide left>
            <h2 className="fontPrimary mx-auto">Information Technology</h2>
            </Slide>
          </div>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fa-brands fa-windows"></i></h1>
              <h3 className='fontSecondary text-center'>Windows</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fa-brands fa-linux"></i></h1>
              <h3 className='fontSecondary text-center'>Linux</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fa-brands fa-ubuntu"></i></h1>
              <h3 className='fontSecondary text-center'>Ubuntu</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i class="fa-brands fa-microsoft"></i></h1>
              <h3 className='fontSecondary text-center'>Microsoft Office</h3>
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center mb-4 mt-4">
            <Slide left>
            <h2 className="fontPrimary mx-auto">Operations Management</h2>
            </Slide>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fas fa-tasks"></i></h1>
              <h3 className='fontSecondary text-center'>Management</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fas fa-users"></i></h1>
              <h3 className='fontSecondary text-center'>Team Leadership</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fas fa-chart-pie"></i></h1>
              <h3 className='fontSecondary text-center'>Data Analysis</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fas fa-project-diagram"></i></h1>
              <h3 className='fontSecondary text-center'>Strategic Planning</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-3 mb-2'>
              <h1 className='text-center'><i className="fas fa-chart-line"></i></h1>
              <h3 className='fontSecondary text-center'>Business Analytics</h3>
            </div>
          </div>
          <br/>
          
          <div className="d-flex align-items-center mb-4 mt-4">
            <Slide left>
            <h2 className="fontPrimary mx-auto">Certifications</h2>
            </Slide>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Pre-Security.jpg')} />
              <h3 className='fontSecondary text-center my-2'>Pre-Security</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Intro to Cyber Security.jpg')} />
              <h3 className='fontSecondary text-center my-2'>Intro to Cyber Security</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Full-Stack Deployment Certification.jpg')} />
              <h3 className='fontSecondary text-center my-2'>Full-Stack Deployment</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Ruby on Rails Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>Ruby on Rails</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Ruby Programming.jpg')} />
              <h3 className='fontSecondary text-center my-3'>Ruby Programming</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/ReactJS Development Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>ReactJS Development</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Dynamic Website Development Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>Dynamic Website Development</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/JavaScript Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>JavaScript Programming</h3>
            </div>
            <div className='skillBox rounded shadow-lg col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/HTML CSS Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>HTML & CSS Development</h3>
            </div>
          </div>
          
        </div>
      </Layout>
    );
  }
}

export default Skills;