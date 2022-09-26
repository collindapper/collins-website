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
            <div className="d-flex container mapContainer" style={{ backgroundImage: `url(${map})` }}>
              <div className="shadow-lg rounded my-3 col-11 col-lg-5 ms-auto contactForm">
                <h1>Collin Dapper</h1>
              </div>
            </div>
          </Slide>
        </div>
      </Layout>
    )
  }
}

export default Contact;