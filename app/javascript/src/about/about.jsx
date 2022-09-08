import React from 'react';
import Layout from '@src/layout';

import './about.scss';
import Slide from 'react-reveal/Slide';

class About extends React.Component {

  render() {

    return (
      <Layout>
        <div className="container">

          <div className="row aboutRow mb-5">
            <Slide left>
            <div className="col-12 col-md-4 mx-auto my-md-auto mt-auto">
              <p className="aboutHeading display-1"><strong>ABOUT</strong></p>
            </div>
            </Slide>

            <Slide right>
            <div className="col-12 col-md-8 my-md-auto pt-md-5 ps-md-5">
              <p className="bodySection lh-lg text-black">Collin is an adaptive and creative junior full-stack web developer with proficiency in front-end programming languages such as: HTML, CSS, and ReactJS; Back-end programming knowledge in JavaScript and Ruby, as well as, experience conducting user research and collaborating with developers to build dynamic websites. Professional strengths include problem-solving, communication and time management. Analytical and leadership mindset from experience in Operations Management.</p>
            </div>
            </Slide>

          </div>
          
          <div className="row aboutRow mt-5 mb-5">
            <Slide left>
            <div className="col-12 col-md-4 mx-auto my-md-auto mt-auto">
              <p className="educationHeading display-1"><strong>EDUCATION</strong></p>
            </div>
            </Slide>

            <Slide right>
            <div className="col-12 col-md-8 my-md-auto pt-md-4 ps-md-5">
              <h1 className="text-black"><strong>Altcademy</strong></h1>
              <h3 className="text-black">Full-Stack Web Development</h3>
              <p className="bodySection"><secondary>November 2021 - September 2022</secondary></p>
              <br />

              <h1 className="text-black"><strong>University of Nevada, Reno</strong></h1>
              <h3 className="text-black">Bachelor of Science in Finance. Minor in Economics</h3>
              <p className="bodySection"><secondary>January 2018 - August 2020</secondary></p>
              <br />

              <h1 className="text-black"><strong>San Joaquin Delta College</strong></h1>
              <h3 className="text-black">Associates in Math and Science(AA-S)/Associates in Business Administration(AS-T)</h3>
              <p className="bodySection"><secondary>June 2015 - December 2017</secondary></p>
              <br />
            </div>
            </Slide>

          </div>

          <div className="row aboutRow mt-5">
            <Slide left>
            <div className="col-12 col-md-4 mx-auto my-md-auto mt-auto">
              <p className="educationHeading display-1"><strong>EXPERIENCE</strong></p>
            </div>
            </Slide>

            <Slide right>
            <div className="col-12 col-md-8 my-md-auto pt-md-4 ps-md-5">
              <h1 className="text-black"><strong>Full-Stack Developer - Collindapper.dev</strong></h1>
              <p className="bodySection"><secondary>April 2022 - Current</secondary></p>
              <br />

              <h1 className="text-black"><strong>Full-Stack Developer Student - Altcademy</strong></h1>
              <h5 className="text-black">
                - Developed three user-friendly websites using React JS and JavaScript, along with several other programming languages, libraries and frameworks.
                <br />
                - Created a dynamic shopping cart that allows the user to generate a total price from a list of inputed items and cost per item; Used HTML, CSS, and JavaScript.
                <br />
                - Built a movie finder using React JS as a go-to quick search for all information on movies, television shows, etc.</h5>
              <p className="bodySection"><secondary>November 2021 - September 2022</secondary></p>
              <br />

              <h1 className="text-black"><strong>Manager I, Operations - Amazon.com</strong></h1>
              <h5 className="text-black">
              - Coach, manage, and develop a team of 200 Amazon associates<br/>
              - Communicate policies to my team and act as the primary information source for the team<br/>
              - maintaining compliance, consistency, and taking corrective action when needed<br/>
              - Create, manage, and support recognition programs<br/>
              - Support all safety programs and OSHA compliance to ensure a safe work environment for all associates<br/>
              - Ensure procedures are followed for building security and product loss prevention<br/>
              - Develop tools to track and analyze cost and production trends<br/>
              - Partner with the management team to establish and maintain quality control standards<br/>
              - Develop performance goals and objectives to achieve customer demand and ensure accuracy and quality</h5>
              <p className="bodySection"><secondary>April 2021 - April 2022</secondary></p>
              <br />
            </div>
            </Slide>

          </div>
        </div>
      </Layout>
    )
  }
}

export default About;