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
          <div className="col-12 col-lg-6 pt-3">
              <div className="d-flex col-12 justify-content-md-start justify-content-center mb-2">
                <h3 className="text-center"><strong>Email </strong>collindapper@gmail.com</h3>
              </div>
              <div className="d-flex col-12 justify-content-md-start justify-content-center mb-2">
                <h3 className="text-center"><strong>LinkedIn </strong><a className="text-danger" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/">collindapper</a></h3>
              </div>
              <div className="d-flex col-12 justify-content-md-start justify-content-center mb-2">
                <h3 className="text-center"><strong>GitHub </strong><a className="text-danger" href="https://github.com/collindapper">collindapper</a></h3>
              </div>
              <div className="d-flex col-12 justify-content-md-start justify-content-center">
                <h3 className="text-center"><strong>Location </strong>San Francisco Bay Area</h3>
              </div>
            </div>
            </Slide>

            <Fade bottom>
            <div className="d-flex col-12 justify-content-center mt-2">
              <img src={map} className="d-flex img-responsive map" />
            </div>
            </Fade>
        </div>
      </Layout>
    )
  }
}

export default Contact;