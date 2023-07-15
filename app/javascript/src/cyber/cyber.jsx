import React from 'react';
import Layout from '@src/layout';

import './cyber.scss';
import Slide from 'react-reveal/Slide';

import location from './images/location.png'

class Cyber extends React.Component {
  

  render() {
    const map = location;

    return (
      <Layout>
        <div className="container contactContainer">
          <div className="d-flex justify-content-center justify-content-md-start mb-4">
            <Slide left>
            <p className="heading mb-0 display-1 fontPrimary"><strong>Cybersecurity and IT</strong></p>
            </Slide>
          </div>

          <Slide right>
            <div className="d-flex container">
              <div className="rounded">
                <h1 className="fontSecondary">Page under construction, and coming soon ....</h1>
              </div>
            </div>
          </Slide>
        </div>
      </Layout>
    )
  }
}

export default Cyber;