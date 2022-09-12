import React from 'react';
import { safeCredentialsFormData, handleErrors } from '@utils/fetchHelper';

class AddProjectWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      date_completed: '',
      live_url: '',
      github_url: '',
      images: null,
      error: '',
      username: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // On file select (from the pop up)
  onFileChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.files[0],
    });
  };

  submitProject = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('project[title]', this.state.title)
    formData.append('project[description]', this.state.description)
    formData.append('project[date_completed]', this.state.date_completed)
    formData.append('project[live_url]', this.state.live_url)
    formData.append('project[github_url]', this.state.github_url)

    if (this.state.images_url !== null) {
      formData.append('project[images]', this.state.images, this.state.images.name);
    }

    fetch('/api/projects', safeCredentialsFormData({
      method: 'POST',
      body: formData,
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          username: data.project.user.username,
        })

        const params = new URLSearchParams(window.location.search)
        const redirect_url = params.get('redirect_url') || '/projects/'
        window.location = redirect_url
      })
      .catch(error => {
        this.setState({
          error: 'Could not post project.',
        })
      })
  }

  render () {
    const { title, description, date_completed, live_url, github_url, images, error } = this.state;

    return (
      <React.Fragment>
        <div className="container py-4">
          <h4 className="mb-1">Add a new project</h4>
          <p className="mb-4 text-secondary">Fill in all the fields</p>

          <form className="py-3 formBox rounded shadow" onSubmit={this.submitProject}>
            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="propertyTitle" className="col-form-label text-white placeholderFont">Project Title</label>
              </div>
              <div className="col-md-5 col-10">
                <input type="text" id="projectTitle" className="form-control placeholderFont" name="title" placeholder="Title" value={title} onChange={this.handleChange} />
              </div>
            </div>

            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="projectDescription" className="col-form-label text-white placeholderFont">Project Description</label>
              </div>
              <div className="col-md-5 col-10">
                <textarea id="projectDescription" cols="19" rows="3" className="form-control placeholderFont"  name="description" placeholder="Description" value={description} onChange={this.handleChange} ></textarea>
              </div>
            </div>

            <div className="divider my-3"></div>

            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="projectLiveUrl" className="col-form-label text-white placeholderFont">Live Site</label>
              </div>
              <div className="col-md-5 col-10">
                <input type="text" id="projectLiveUrl" className="form-control placeholderFont"  name="live_url" placeholder="Live URL" value={live_url} onChange={this.handleChange} />
              </div>
            </div>

            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="projectGithubUrl" className="col-form-label text-white placeholderFont">Github Repo</label>
              </div>
              <div className="col-md-5 col-10">
                <input type="text" id="projectGithubUrl" className="form-control placeholderFont"  name="github_url" placeholder="GitHub URL" value={github_url} onChange={this.handleChange} />
              </div>
            </div>

            <div className="divider my-3"></div>

            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="projectDateCompleted" className="col-form-label text-white placeholderFont">Date Completed</label>
              </div>
              <div className="col-md-5 col-10">
                <input type="text" id="projectDateCompleted" className="form-control placeholderFont" name="date_completed" placeholder="Date Completed" value={date_completed} onChange={this.handleChange} />
              </div>
            </div>

            <div className="divider my-3"></div>
            
            <div className="row align-items-center py-2 justify-content-center">
              <div className="col-md-5 col-10">
                <label htmlFor="projectImage" className="col-form-label text-white placeholderFont">Upload photos</label>
              </div>
              <div className="col-md-5 col-10">
                <input className="form-control placeholderFont" type="file" name="images" accept="image/*" onChange={this.onFileChange} />
              </div>
            </div>

              <div className="d-flex justify-content-center mx-auto my-5">
                <button type="submit" className="btn btn-primary w-50 placeholderFont" disabled={ !title || !description || !date_completed || !live_url || !github_url || !images }><b>Submit new project</b></button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddProjectWidget;