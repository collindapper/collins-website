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
          
        </div>
      </Layout>
    );
  }
}

export default Skills;