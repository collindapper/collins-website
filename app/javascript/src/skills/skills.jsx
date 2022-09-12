import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import Layout from '@src/layout';
import AddSkillWidget from './addSkillWidget';

import './skills.scss';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSkills: [],
      show_widget: false,
      authenticated: false,
      username: '',
    }
  }

  componentDidMount() {
    this.getAllUserSkills()

    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
          username: data.username,
        })
      })
  }

  getAllUserSkills() {

    fetch('/api/skills/')
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          userSkills: data.skills,
        })
      })
  }

  deleteSkill = (e) => {
    e.preventDefault();
    let skillEl = e.target.closest(".skills-wrap")
    let skillId = skillEl.getAttribute('id')

    fetch(`/api/skills/${skillId}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.getAllUserSkills()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete skill.',
        })
      })
  }

  toggle = () => {
    this.setState({
      show_widget: !this.state.show_widget,
    })
  }

  render () {
    const { authenticated, username, userSkills, show_widget } = this.state;

    return (
      <Layout>
        <div className="container skillsContainer py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Slide left>
            <p className="mb-0 display-1"><strong>SKILLS</strong></p>
            </Slide>

            {(authenticated) ? <a className="btn p-2 mx-2" role="button" onClick={this.toggle}>Add a new skill</a> : <div></div>}
          </div>

          {show_widget ? <AddSkillWidget /> : <div></div>}

          {(userSkills.length != 0)
          
          ?
          <div className="row d-flex justify-content-center">
            {userSkills.map(skill => {
              return (
                <Bounce right>
                <div key={skill.id} id={skill.id} className="skills-wrap p-4 mb-3 rounded shadow-lg col-10 col-md-6 col-xl-4">
                    <div className="row d-flex flex-column px-3">
                      <h2 className="mb-0">{skill.title}</h2>

                      {(skill.certification_url !== 'NA')
                      ?
                      <a className="skillLinks btn btn-primary w-100 mt-5 mb-2" role="button" target="_blank" href={skill.certification_url}>Certification PDF</a>
                      :
                      <div className="mt-5"></div>
                      }

                      <a className="mb-0 skillLinks btn btn-primary w-100" role="button" target="_blank" href={skill.linkedin_url}>LinkedIn Endorsements</a>
                      
                      
                      {(authenticated)
                      ?
                      <button type="submit" className="btn btn-outline-danger btn-delete ml-auto me-2 mt-5" onClick={this.deleteSkill}>Delete Skill</button>
                      :
                      <div></div>
                      }

                    </div>
                </div>
                </Bounce>
              )
            })}
          </div>

          :
          <div className="border border-secondary rounded text-center">
            <p className="py-4 mb-0">You don't have any skills.</p>
          </div>
          }
        </div>
      </Layout>
    );
  }
}

export default Skills;