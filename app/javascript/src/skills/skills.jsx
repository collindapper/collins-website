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
            <h1 className="fontPrimary mx-auto">Programming Languages</h1>
            </Slide>
          </div>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 javascriptImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>JavaScript</h2>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 rubyImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Ruby</h2>
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center mb-4">
            <Slide left>
            <h1 className="fontPrimary mx-auto">Frontend Development</h1>
            </Slide>
          </div>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 reactImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>ReactJS</h2>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 htmlImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>HTML</h2>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 cssImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>CSS</h2>
            </div>
          </div>
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 bootstrapImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Bootstrap</h2>
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center mb-4">
            <Slide left>
            <h1 className="fontPrimary mx-auto">Backend Development, BaaS, and Databases</h1>
            </Slide>
          </div>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 nodeImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>NodeJS</h2>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 psqlImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Postgresql</h2>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 herokuImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Heroku</h2>
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center mb-4">
            <Slide left>
            <h1 className="fontPrimary mx-auto">Frameworks</h1>
            </Slide>
          </div>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 railsImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Ruby on Rails</h2>
            </div>
          </div>
          <br/>

          <div className="d-flex align-items-center mb-4">
            <Slide left>
            <h1 className="fontPrimary mx-auto">Information Technology</h1>
            </Slide>
          </div>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 linuxImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Linux</h2>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 windowsImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Windows</h2>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 gitImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Git</h2>
            </div>
          </div>
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 ubuntuImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Ubuntu</h2>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-6 proxmoxImg'></div>
              <h2 className='fontPrimary text-center col-6 my-auto'>Proxmox</h2>
            </div>
          </div>
          <br/>

          
          <div className="d-flex align-items-center mb-4 mt-4">
            <Slide left>
              <p className="heading mb-0 display-3 fontPrimary"><strong>Certifications</strong></p>
            </Slide>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Pre-Security.jpg')} />
              <h3 className='fontSecondary text-center my-2'>Pre-Security</h3>
            </div>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Intro to Cyber Security.jpg')} />
              <h3 className='fontSecondary text-center my-2'>Intro to Cyber Security</h3>
            </div>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Full-Stack Deployment Certification.jpg')} />
              <h3 className='fontSecondary text-center my-2'>Full-Stack Deployment</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Ruby on Rails Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>Ruby on Rails</h3>
            </div>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Ruby Programming.jpg')} />
              <h3 className='fontSecondary text-center my-3'>Ruby Programming</h3>
            </div>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/ReactJS Development Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>ReactJS Development</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/Dynamic Website Development Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>Dynamic Website Development</h3>
            </div>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
              <img src={require('../certImages/JavaScript Certification.jpg')} />
              <h3 className='fontSecondary text-center my-3'>JavaScript Programming</h3>
            </div>
            <div className='skillBox rounded col-md-3 col-11 py-2 mb-2'>
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