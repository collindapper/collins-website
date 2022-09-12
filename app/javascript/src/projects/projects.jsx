import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import Layout from '@src/layout';
import AddProjectWidget from './addProjectWidget';

import './projects.scss';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userProjects: [],
      show_widget: false,
      authenticated: false,
      username: '',
    }
  }

  componentDidMount() {
    this.getAllUserProjects()

    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        // console.log(data)
        this.setState({
          authenticated: data.authenticated,
          username: data.username,
        })
      })
  }

  getAllUserProjects() {
    // const username = this.props.data.username;
    // console.log(username)

    fetch('/api/projects/')
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          userProjects: data.projects,
        })
      })
  }

  deleteProject = (e) => {
    e.preventDefault();
    let projectEl = e.target.closest(".projects-wrap")
    let projectId = projectEl.getAttribute('id')

    fetch(`/api/projects/${projectId}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.getAllUserProjects()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete project.',
        })
      })
  }

  toggle = () => {
    this.setState({
      show_widget: !this.state.show_widget,
    })
  }

  render () {
    const { authenticated, username, userProjects, show_widget } = this.state;

    return (
      <Layout>
        <div className="container projectsContainer py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Slide left>
            <p className="mb-0 display-1"><strong>PROJECTS</strong></p>
            </Slide>

            {(authenticated) ? <a className="btn btn-my-bookings p-2 mx-2" role="button" onClick={this.toggle}>Add a new project</a> : <div></div>}
          </div>

          {show_widget ? <AddProjectWidget /> : <div></div>}

          {(userProjects.length != 0)
          
          ?
          <div>
            {userProjects.map(project => {
              return (
                <Bounce right>
                <div key={project.id} id={project.id} className="projects-wrap p-4 mb-3 rounded shadow-lg">
                  <div className="row d-flex">
                    <div className="col-md-4">
                      <div className="project-image rounded" style={{ backgroundImage: `url(${project.images})` }} />
                      </div>
                    <div className="col-md-8">
                      <div className="row d-flex flex-column px-3">
                        <h2 className="mb-0">{project.title}</h2>
                        <div className="d-flex">
                          <p className="text-secondary">{project.date_completed}</p>
                        </div>
                        <p className="description-short mb-2 text-secondary">{project.description}</p>

                        <button className="btn btn-primary w-100 mt-5 mb-2"><a className="projectLinks" href={project.live_url}></a>Live Site</button>

                        <button className="btn btn-primary w-100 "><a className="mb-0 projectLinks " href={project.github_url}></a>GitHub Repo</button>
                        
                        
                        {(authenticated)
                        ?
                        <button type="submit" className="btn btn-outline-danger btn-delete ml-auto me-2 mt-5" onClick={this.deleteProject}>Delete Project</button>
                        :
                        <div></div>
                        }

                      </div>
                    </div>
                  </div>
                </div>
                </Bounce>
              )
            })}
          </div>

          :
          <div className="border border-secondary rounded text-center">
            <p className="py-4 mb-0">You don't have any projects.</p>
          </div>
          }
        </div>
      </Layout>
    );
  }
}

export default Projects;