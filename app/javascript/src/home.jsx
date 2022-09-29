import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { handleErrors } from '@utils/fetchHelper';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Tada from 'react-reveal/Tada';
import TagCloud from 'TagCloud';
import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userProjects: [],
    }
  }

  componentDidMount = () => {
    this.getAllUserProjects();
  }

  getAllUserProjects() {
    fetch('/api/projects/')
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          userProjects: data.projects,
        })
      })
  }

  render () {
    const {userProjects} = this.state;
  
    return (
      <Layout>
        <div className="HomeBody">
          <div className="row heroSection container mx-auto d-flex align-content-center">
            <div className="blurSection mx-auto">
              <Fade left>
              <p className="display-1 text-center fontPrimary"><strong>Welcome,</strong></p>
              </Fade>
              <Fade right>
              <p className="display-6 text-center subHeading mb-auto">I'm Collin Dapper. Full-Stack Developer.</p>
              </Fade>
              <div className="d-flex arrow bounce justify-content-center mt-5">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex row container mx-auto">
          {userProjects.slice(0, 2).map(project => {
            return (
              <Bounce left>
              <a className="col-12 col-md-6 projectContainer mb-5" href="/projects">
              <div key={project.id} id={project.id} className="card">
              <Tada>
              <p className="badge"><span className="badgeFont">Recent Projects</span></p>
              </Tada>
                <img src={project.images} className="cardImage px-2 py-2" />
                <div className="d-flex container descriptionContainer mx-auto">
                  <p className="mx-auto display-6 text-black">{project.title}</p>
                </div>
              </div>
              </a>
              </Bounce>
            )
          })}
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
