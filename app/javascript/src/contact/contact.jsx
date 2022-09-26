import React from 'react';
import Layout from '@src/layout';

import './contact.scss';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import location from './images/location.png'

class Contact extends React.Component {
  

  render() {
    const map = location;

    return (
      <Layout>
        <div className="container contactContainer">
          <div className="d-flex justify-content-center justify-content-md-start mb-4">
            <Slide left>
            <p className="mb-0 display-1"><strong>LET'S CONNECT</strong></p>
            </Slide>
          </div>

          <Slide right>
            <div className="d-flex container mapContainer shadow-lg" style={{ backgroundImage: `url(${map})` }}>
              <div className="shadow-lg rounded my-3 col-11 col-md-5 ms-lg-auto mx-auto mx-lg-0 pt-5 contactForm">
                <h2 className="text-center mt-3">Location</h2>
                <h5 className="text-center mb-3">San Francisco Bay Area</h5>
                <h2 className="text-center mt-3">Email</h2>
                <h5 className="text-center mb-3">collindapper@gmail.com</h5>
                <h2 className="text-center mt-3">GitHub</h2>
                <h5 className="text-center mb-3">github.com/collindapper</h5>
                <h2 className="text-center mt-3">LinkedIn</h2>
                <h5 className="text-center mb-3">linkedin.com/in/collin-dapper-a1b59a152/</h5>
              </div>
            </div>
          </Slide>
        </div>
      </Layout>
    )
  }
}

export default Contact;