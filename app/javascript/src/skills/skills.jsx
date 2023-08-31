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
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 javascriptImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>JavaScript</h2>
              <h5 className='fontPrimary text-center col-12'>Programming Language</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 rubyImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Ruby</h2>
              <h5 className='fontPrimary text-center col-12'>Programming Language</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 reactImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>React.js</h2>
              <h5 className='fontPrimary text-center col-12'>Front-End Development</h5>
            </div>
          </div>
          <br/>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 htmlImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>HTML</h2>
              <h5 className='fontPrimary text-center col-12'>Front-End Development</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 cssImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>CSS</h2>
              <h5 className='fontPrimary text-center col-12'>Front-End Development</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 bootstrapImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Bootstrap</h2>
              <h5 className='fontPrimary text-center col-12'>Front-End Development</h5>
            </div>
          </div>
          <br/>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 nodeImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Node.js</h2>
              <h5 className='fontPrimary text-center col-12'>Back-End Development</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 psqlImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Postgresql</h2>
              <h5 className='fontPrimary text-center col-12'>Back-End Databases</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 herokuImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Heroku</h2>
              <h5 className='fontPrimary text-center col-12'>Backend-as-a-service (BaaS)</h5>
            </div>
          </div>
          <br/>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 railsImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Ruby on Rails</h2>
              <h5 className='fontPrimary text-center col-12'>Full-Stack Framework</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 linuxImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Linux</h2>
              <h5 className='fontPrimary text-center col-12'>Open-Source Operating Systems</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 windowsImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Windows</h2>
              <h5 className='fontPrimary text-center col-12'>Graphical Operating Systems</h5>
            </div>
          </div>
          <br/>
          
          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 gitImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Git</h2>
              <h5 className='fontPrimary text-center col-12'>Version Control System</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 ubuntuImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Ubuntu</h2>
              <h5 className='fontPrimary text-center col-12'>Linux Distribution</h5>
            </div>
            <div className='row skillBox col-lg-4 col-12 py-3 mb-2'>
              <div className='text-center col-7 proxmoxImg mx-auto'></div>
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h2 className='fontPrimary text-center col-12'>Proxmox</h2>
              <h5 className='fontPrimary text-center col-12'>Hosted Hypervisor</h5>
            </div>
          </div>
          <br/>

          
          <div className="d-flex align-items-center mb-4 mt-4">
            <Slide left>
              <p className="heading mb-0 display-3 fontPrimary"><strong>Certifications</strong></p>
            </Slide>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/Pre-Security.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-2'>Pre-Security</h3>
            </div>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/Intro to Cyber Security.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-2'>Intro to Cyber Security</h3>
            </div>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/Full-Stack Deployment Certification.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-2'>Full-Stack Deployment</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/Ruby on Rails Certification.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-3'>Ruby on Rails</h3>
            </div>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/Ruby Programming.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-3'>Ruby Programming</h3>
            </div>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/ReactJS Development Certification.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-3'>ReactJS Development</h3>
            </div>
          </div>

          <div className='d-flex row justify-content-around mb-md-4'>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/Dynamic Website Development Certification.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-3'>Dynamic Website Development</h3>
            </div>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/JavaScript Certification.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-3'>JavaScript Programming</h3>
            </div>
            <div className='skillBox rounded col-md-4 col-11 py-2 mb-2'>
              <img src={require('../certImages/HTML CSS Certification.jpg')} />
              <div className="divider mt-4 mb-2 w-50 mx-auto"></div>
              <h3 className='fontSecondary text-center my-3'>HTML & CSS Development</h3>
            </div>
          </div>
          
        </div>
      </Layout>
    );
  }
}

export default Skills;