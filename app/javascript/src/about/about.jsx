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
            <div className="col-12 col-lg-4 mx-auto mb-md-auto mt-3 mt-md-3">
              <p className="aboutHeading display-3 fontPrimary"><strong>ABOUT</strong></p>
            </div>
            </Slide>

            <Slide right>
            <div className="col-12 col-lg-8 my-md-auto pt-md-5 ps-md-5">
              <h4 className="bodySection lh-lg text-black fontSecondary">Coding showed me that I could pursue a career doing what I love.</h4>
              <h4 className="bodySection lh-lg text-black fontSecondary">I have always been creative and analytical with everything I have pursued. Being raised in a technologically advanced era, I strive to understand how it all works. I am well suited in mathematics and any data analysis related curriculum. Although I did not completely know what I wanted to have a career in, I went with what I believed I would do well in, which was Finance and Economics. However, with minimal creative freedom and lackluster projects, I realized I was pursuing something I was good at, rather than something I love and enjoy all around. </h4>
              <h4 className="bodySection lh-lg text-black fontSecondary">Soon after, I stumbled upon an interactive personal website during my research, and was blown away by the creativity and functionality of the site. Seeing what someone had created over hundreds of lines of code peaked my interest. I then began watching Front-End Development tutorials (HTML, CSS, and JavaScript fundamentals) and decided to enroll in a Full-Stack Web Development Bootcamp. Since then, my passion for coding has only grown. Finding something that combines my love for problem solving, computers, and my creative background makes it very appealing and enjoyable.</h4>
              <h4 className="bodySection lh-lg text-black fontSecondary">Obstacles in life are the fuel that inspire me to learn and be curious, own my development, and deliver results. Change can be a difficult beast to tame, but change is the spark that lights these areas of my growth. I do not want a straight path, because without the opportunity to overcome barriers, we are only hindering ourselves from potential growth. Whether it be improving myself, or helping others strive through change, I will never back down from a challenge no matter the barrier. </h4>
              <h4 className="bodySection lh-lg text-black fontSecondary">A few of my specialties include developing new skills, learning new programming languages, problem solving, and dynamic website development. I am certified in HTML & CSS Development, JavaScript Programming, Dynamic Website Development, ReactJS Development. Ruby Programming, Ruby on Rails, Full-Stack Deployment and studying User Experience (UX) Design to better reinforce my coding development.</h4>
            </div>
            </Slide>

          </div>
          

          <div className="row aboutRow mt-5">
            <Slide left>
            <div className="col-12 col-lg-4 mx-auto mb-md-auto mt-3 mt-md-3">
              <p className="educationHeading display-3 fontPrimary"><strong>EXPERIENCE</strong></p>
            </div>
            </Slide>

            <Slide right>
            <div className="col-12 col-lg-8 my-md-auto pt-md-4 ps-md-5">
              <h1 className="text-black fontPrimary"><strong>Full-Stack Developer - collindapper.com</strong></h1>
              <p className="bodySection fontSecondary"><secondary>April 2022 - Current</secondary></p>
              <br />

              <h1 className="text-black fontPrimary"><strong>Full-Stack Developer Student - Altcademy</strong></h1>
              <h5 className="text-black fontSecondary">Drafted, Wire-framed, and wrote well-designed, testable and efficient code using the best software development practice.
                Developed website layouts and user interfaces using standard HTML and CSS, as well as, integrating data from various
                back-end services and databases</h5>
              <h5 className="text-black fontSecondary">
                - Developed three user-friendly websites using React JS and JavaScript, along with several other programming
                languages, libraries and frameworks.
                <br />
                -  Created a full-stack, ReactJS and Ruby on Rails, social media website. Personally created the Front-End and
                layout, as well as, creating the API and API endpoints. The build allows users to create a profile, see other users
                posts, as well as post messages and images to their own feeds.
                <br />
                - Created a full-stack, ReactJS and Ruby on Rails, online marketplace.Developed the Front-End and layout, as well
                as, creating the API and API endpoints. The build allows users to create properties via listings (add, edit, delete
                and create property listings), and book trips off of other users listings via Stripe web-hook for transactions.</h5>
              <p className="bodySection fontSecondary"><secondary>November 2021 - September 2022</secondary></p>
              <br />

              <h1 className="text-black fontPrimary"><strong>Manager I, Operations - Amazon.com</strong></h1>
              <h5 className="text-black fontSecondary">Lead a team of hourly workforce and engaged my team during their shifts to maintain the highest levels of safety, quality,
              attendance, and performance. Maintained our customer expectations to ensure customer orders were delivered at the
              correct place and time.</h5>
              <h5 className="text-black fontSecondary">
              - Coach, manage, and develop a team of 200 Amazon associates<br/>
              - Communicate policies to my team and act as the primary information source for the team<br/>
              - maintaining compliance, consistency, and taking corrective action when needed<br/>
              - Create, manage, and support recognition programs<br/>
              - Support all safety programs and OSHA compliance to ensure a safe work environment for all associates<br/>
              - Ensure procedures are followed for building security and product loss prevention<br/>
              - Develop tools to track and analyze cost and production trends<br/>
              - Partner with the management team to establish and maintain quality control standards<br/>
              - Develop performance goals and objectives to achieve customer demand and ensure accuracy and quality</h5>
              <p className="bodySection fontSecondary"><secondary>April 2021 - April 2022</secondary></p>
              <br />
            </div>
            </Slide>

          </div>

          <div className="row aboutRow mt-5 mb-5">
            <Slide left>
            <div className="col-12 col-lg-4 mx-auto mb-md-auto mt-3 mt-md-3">
              <p className="educationHeading display-3 fontPrimary"><strong>EDUCATION</strong></p>
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