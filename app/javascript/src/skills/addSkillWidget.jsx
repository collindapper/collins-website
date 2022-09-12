import React from 'react';
import { safeCredentialsFormData, handleErrors } from '@utils/fetchHelper';

class AddSkillWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      certification_url: '',
      linkedin_url: '',
      error: '',
      username: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitSkill = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('skill[title]', this.state.title)
    formData.append('skill[certification_url]', this.state.certification_url)
    formData.append('skill[linkedin_url]', this.state.linkedin_url)

    fetch('/api/skills', safeCredentialsFormData({
      method: 'POST',
      body: formData,
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          username: data.skill.user.username,
        })

        const params = new URLSearchParams(window.location.search)
        const redirect_url = params.get('redirect_url') || '/skills/'
        window.location = redirect_url
      })
      .catch(error => {
        this.setState({
          error: 'Could not post skill.',
        })
      })
  }

  render () {
    const { title, certification_url, linkedin_url, error } = this.state;

    return (
      <React.Fragment>
        <div className="container py-4">
          <h4 className="mb-1">Add a new skill</h4>
          <p className="mb-4 text-secondary">Fill in all the fields</p>

          <form className="py-3 formBox rounded shadow" onSubmit={this.submitSkill}>
            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="propertyTitle" className="col-form-label text-white placeholderFont">Skill</label>
              </div>
              <div className="col-md-5 col-10">
                <input type="text" id="projectTitle" className="form-control placeholderFont" name="title" placeholder="Skill" value={title} onChange={this.handleChange} />
              </div>
            </div>

            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="projectLiveUrl" className="col-form-label text-white placeholderFont">Certificate</label>
              </div>
              <div className="col-md-5 col-10">
                <input type="text" id="projectLiveUrl" className="form-control placeholderFont"  name="certification_url" placeholder="Certificate URL" value={certification_url} onChange={this.handleChange} />
              </div>
            </div>

            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="projectGithubUrl" className="col-form-label text-white placeholderFont">LinkedIn Endorsements</label>
              </div>
              <div className="col-md-5 col-10">
                <input type="text" id="projectGithubUrl" className="form-control placeholderFont"  name="linkedin_url" placeholder="LinkedIn Skills URL" value={linkedin_url} onChange={this.handleChange} />
              </div>
            </div>

            <div className="divider my-3"></div>

              <div className="d-flex justify-content-center mx-auto my-5">
                <button type="submit" className="btn btn-primary w-50 placeholderFont" disabled={ !title || !certification_url || !linkedin_url }><b>Submit new skill</b></button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddSkillWidget;