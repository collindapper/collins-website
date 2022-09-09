import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import Layout from '@src/layout';
import AddProjectWidget from './addProjectWidget';

import './projects.scss';
import Slide from 'react-reveal/Slide';

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
    let projectEl = e.target.closest(".listings-wrap")
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
          error: 'Could not delete property.',
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
                <div key={project.id} id={project.id} className="listings-wrap p-4 mb-3">
                  <div className="row d-flex">
                    <div className="col-md-4">
                      <div className="property-image rounded" style={{ backgroundImage: `url(${project.images})` }} />
                      </div>
                    <div className="col-md-8">
                      <div className="row d-flex flex-column px-3">
                        <h5 className="mb-2">{project.title}</h5>
                        <div className="d-flex">
                          <p className="mb-0 pr-1 text-secondary">{project.date_completed}</p>
                        </div>
                        <div className="d-flex mb-2">
                          <p className="mb-0 text-secondary">{project.live_url}</p>
                          <p className="mb-0 text-secondary">{project.github_url}</p>
                        </div>
                        <p className="description-short mb-2 text-secondary">{project.description}</p>
                        
                        <div className="d-flex">
                          <a className="btn btn-danger btn-sm btn-edit me-2 mt-2" role="button" href="#">Edit property</a>
                          <a className="btn btn-danger btn-sm btn-edit me-2 mt-2" role="button" href="#">View property reservations</a>
                          <button type="submit" className="btn btn-danger btn-sm btn-delete ml-auto me-2 mt-2" onClick={this.deleteProject}>Delete property</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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