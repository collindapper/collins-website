import React from 'react';
import Layout from '@src/layout';

import './about.scss';
import Slide from 'react-reveal/Slide';

class About extends React.Component {

  render() {

    return (
      <Layout>
        <div className="container">
          

          <div className="row aboutRow mt-3 mt-md-5">
            <Slide left>
            <div className="col-12 col-lg-4 mx-auto mt-md-3">
              <p className="heading display-3 fontPrimary"><strong>EXPERIENCE</strong></p>
            </div>
            </Slide>

            <Slide right>
            <div className="col-12 col-lg-8 my-md-auto pt-md-4 ps-md-5">
              <h1 className="text-black fontPrimary"><strong>Full-Stack Developer - collindapper.com</strong></h1>
              <p className="bodySection fontSecondary"><secondary>April 2022 - Current</secondary></p>
              <br />

              <h1 className="text-black fontPrimary"><strong>Flow Process Assistant, Operations - Amazon.com</strong></h1>
              <h5 className="text-black fontSecondary">Develop and Implement efficient work-flow practices to increase productivity and operation performance, while maintaining the highest safety and quality standards for my team.</h5>
              <br/>
              <h5 className="text-black fontSecondary">
              - Standardize flow processes to streamline operation growth.<br/>
              <br/>
              - Develop tools to track and analyze cost and production trends<br/>
              <br/>
              - Analyze cost and production trends to properly plan headcount in both direct and indirect roles.<br/>
              <br/>
              - Create performance goals and objectives to achieve customer demand and ensure accuracy and quality.<br/>
              <br/>
              - Bridge the gap between the Reliability and Maintenance Engineers and Operation Leadership to ensure all conveyance and equipment is in proper working condition to prevent any delays in operation work-flows.</h5>
              <br/>
              <p className="bodySection fontSecondary"><secondary>October 2022 - Current</secondary></p>
              <br />


              <h1 className="text-black fontPrimary"><strong>Full-Stack Developer Student - Altcademy</strong></h1>
              <h5 className="text-black fontSecondary">Drafted, Wire-framed, and wrote well-designed, testable and efficient code using the best software development practice.
                Developed website layouts and user interfaces using standard HTML and CSS, as well as, integrating data from various
                back-end services and databases</h5>
                <br/>
              <h5 className="text-black fontSecondary">
                - Developed three user-friendly websites using React JS and JavaScript, along with several other programming
                languages, libraries and frameworks.<br/>
                <br/>
                -  Created a full-stack, ReactJS and Ruby on Rails, social media website. Personally created the Front-End and
                layout, as well as, creating the API and API endpoints. The build allows users to create a profile, see other users
                posts, as well as post messages and images to their own feeds.<br/>
                <br/>
                - Created a full-stack, ReactJS and Ruby on Rails, online marketplace.Developed the Front-End and layout, as well
                as, creating the API and API endpoints. The build allows users to create properties via listings (add, edit, delete
                and create property listings), and book trips off of other users listings via Stripe web-hook for transactions.</h5>
                <br/>
              <p className="bodySection fontSecondary"><secondary>November 2021 - September 2022</secondary></p>
              <br />

              <h1 className="text-black fontPrimary"><strong>Manager I, Operations - Amazon.com</strong></h1>
              <h5 className="text-black fontSecondary">Lead a team of hourly workforce and engaged my team during their shifts to maintain the highest levels of safety, quality,
              attendance, and performance. Maintained our customer expectations to ensure customer orders were delivered at the
              correct place and time.</h5>
              <br/>
              <h5 className="text-black fontSecondary">
              - Coach, manage, and develop a team of 200 Amazon associates<br/>
              <br/>
              - Communicate policies to my team and act as the primary information source for the team<br/>
              <br/>
              - maintaining compliance, consistency, and taking corrective action when needed<br/>
              <br/>
              - Create, manage, and support recognition programs<br/>
              <br/>
              - Support all safety programs and OSHA compliance to ensure a safe work environment for all associates<br/>
              <br/>
              - Ensure procedures are followed for building security and product loss prevention<br/>
              <br/>
              - Develop tools to track and analyze cost and production trends<br/>
              <br/>
              - Partner with the management team to establish and maintain quality control standards<br/>
              <br/>
              - Develop performance goals and objectives to achieve customer demand and ensure accuracy and quality</h5>
              <br/>
              <p className="bodySection fontSecondary"><secondary>April 2021 - April 2022</secondary></p>
              <br />
            </div>
            </Slide>

          </div>

          <div className="row aboutRow mt-3 mb-5">
            <Slide left>
            <div className="col-12 col-lg-4 mx-auto mb-md-auto mt-3 mt-md-3">
              <p className="heading display-3 fontPrimary"><strong>EDUCATION</strong></p>
            </div>
            </Slide>

            <Slide right>
            <div className="col-12 col-lg-8 my-md-auto pt-md-4 ps-md-5">
              <h1 className="text-black fontPrimary"><strong>Altcademy</strong></h1>
              <h3 className="text-black fontPrimary">Full-Stack Web Development</h3>
              <p className="bodySection fontSecondary"><secondary>November 2021 - September 2022</secondary></p>
              <br />

              <h1 className="text-black fontPrimary"><strong>University of Nevada, Reno</strong></h1>
              <h3 className="text-black fontPrimary">Bachelor of Science in Finance. Minor in Economics</h3>
              <p className="bodySection fontSecondary"><secondary>January 2018 - August 2020</secondary></p>
              <br />

              <h1 className="text-black fontPrimary"><strong>San Joaquin Delta College</strong></h1>
              <h3 className="text-black fontPrimary">Associates in Math and Science(AA-S)/Associates in Business Administration(AS-T)</h3>
              <p className="bodySection fontSecondary"><secondary>June 2015 - December 2017</secondary></p>
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