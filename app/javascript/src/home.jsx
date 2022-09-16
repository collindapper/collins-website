import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { handleErrors } from '@utils/fetchHelper';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
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
              <p className="display-1 text-center"><strong>Welcome,</strong></p>
              <p className="display-6 text-center subHeading mb-auto">I'm Collin Dapper. Full-Stack Developer.</p>
              <div className="d-flex arrow bounce justify-content-center mt-5">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>

        
        <div className="container border">
        <p className="titleBox display-1 text-black text-md-start"><strong>Projects</strong></p>
          <div className="d-flex row mx-auto">
            
              {userProjects.slice(0, 3).map(project => {
                    return (
                      <Bounce right>
                        <div className="d-flex container flex-wrap col-md-4 col-12 justify-content-between">              
                        <div key={project.id} id={project.id} className="d-inline-flex align-items-center imageContainer mx-1">                  
                          <img src={project.images} className="projectImage img-responsive" />
                          <div className="middle">
                            <a className="projectHomeLink" href="/projects"><div className="imageText py-3 px-3">View Projects</div></a>
                          </div>     
                        </div>
                        </div>      
                      </Bounce>
                    )
                  })}
              
          </div>
        </div>
        


        <div className="container mt-md-5 shadow-lg">
        
        <div className="d-flex border row rounded justify-content-center">
          <div className="col-3">
            
          </div>
        
            <div className="d-flex container flex-wrap col-md-9 col-12 justify-content-end">
            
              {userProjects.slice(0, 2).map(project => {
                return (
                  <Bounce right>                 
                    <div key={project.id} id={project.id} className="d-inline-flex align-items-center imageContainer mx-1">                  
                      <img src={project.images} className="projectImage img-responsive" />
                      <div className="middle">
                        <a className="projectHomeLink" href="/projects"><div className="imageText py-3 px-3">View Projects</div></a>
                      </div>     
                    </div>       
                  </Bounce>
                )
              })}
              
            </div>
            
          
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
