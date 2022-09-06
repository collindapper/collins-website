import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { handleErrors } from '@utils/fetchHelper';


import Fade from 'react-reveal/Fade';

import './home.scss';

class Home extends React.Component {

  render () {
    
    return (
      <Layout>
        <div className="d-flex mainContent container">
          <div className="col-md-6 col-12 my-md-auto my-5">
            <Fade left>
            <h3 className="fontSecondary text-white text-start mb-0 pb-0">My name is,</h3>
            <h1 className="fontPrimary text-white navbarNameWeb Display-1 text-start mt-0 pt-0">Collin Dapper</h1>
            </Fade>
            <br/>
            <Fade right>
            <h3 className="fontSecondary text-white text-start mb-0 pb-0">I am a,</h3>
            <h1 className="fontPrimary text-white display-3 text-start">Full-Stack Developer</h1>
            </Fade>
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
