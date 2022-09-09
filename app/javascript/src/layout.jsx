import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './home.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      username: '',
      navbarOpen: false,
    }
  }

  componentDidMount() {
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

  toggleNavbarOpen = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }

  logout = (e) => {
    e.preventDefault();

    fetch('/api/sessions', safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        if (data.success) {
          this.setState({
            authenticated: false,
          })
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not sign out.',
        })
      })
  }


  render () {
    const { authenticated, username, navbarOpen } = this.state;
    
    return (
      <React.Fragment>
        {(authenticated)

        ?
        <nav className="navbar navbar-expand-lg shadow">
          <div className="navbar container d-none d-md-flex justify-content-center">         
              <div className="d-flex col-4">
                <ul className="d-flex navbar-nav me-auto">
                  <li className="nav-item ">
                    <a className="nav-link text-white text-center" href="/about">
                      About
                    </a>
                  </li>                
                  <li className="nav-item">
                    <a className="nav-link text-white"href="/projects">Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="d-flex col-4">
              <a className="d-md-flex d-none navbar-brand text-white mx-auto" href="/">COLLIN<strong>DAPPER</strong></a>
              </div>

              <div className="d-flex col-4">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link text-white " href="#"><i className="fa-brands fa-linkedin"></i></a>
                  </li>             
                  <li className="nav-item">
                    <a className="nav-link text-white"href="#"><i className="fa-brands fa-github"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/login"><i className="fa-solid fa-circle-user"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" onClick={this.logout}>Logout</a>
                  </li>
                </ul>
              </div>      
          </div>

        <div className="navbar container d-flex d-md-none">
          <a className="d-md-none d-flex navbar-brand text-white" href="#">COLLIN<strong>DAPPER</strong></a>
            <button className="d-md-none hamburger-toggle" type="button" onClick={this.toggleNavbarOpen}>
              <span className="hamburger-icon"></span>
            </button>
          </div>

            {navbarOpen ?        
              <div className="d-flex row mx-auto">
                <ul className="navbar-nav me-auto mb-2">
                  <li className="nav-item text-center">
                    <a className="nav-link text-white" href='/about'>
                      About
                    </a>
                  </li>

                  <li className="nav-item text-center">
                    <a className="nav-link text-white"href='/projects'>Work</a>
                  </li>
                  <li className="nav-item text-center">
                    <a className="nav-link text-white" href='/skills'>Skills</a>
                  </li>
                  <li className="nav-item text-center">
                    <a className="nav-link text-white" href='/contact'>Contact</a>
                  </li>
                </ul>

                <div className="row mx-auto">
                  <ul className="d-flex navbar-nav list-group-horizontal justify-content-between">
                    <li className="nav-item">
                      <a className="nav-link text-white " href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                    
                    <li className="nav-item">
                      <a className="nav-link text-white"href="#"><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="/login"><i className="fa-solid fa-circle-user"></i></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link text-white" onClick={this.logout}>Logout</a>
                    </li>
                  </ul>
                </div>
                
              </div>
              :
              null
            }
        </nav>
        :
        <nav className="navbar navbar-expand-lg shadow">
          <div className="navbar container d-none d-md-flex justify-content-center">
              <div className="d-flex col-4">
                <ul className="d-flex navbar-nav me-auto">
                  <li className="nav-item ">
                    <a className="nav-link text-white text-center" href='/about'>
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white"href='/projects'>Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href='/skills'>Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href='/contact'>Contact</a>
                  </li>
                </ul>
              </div>

              <div className="d-flex col-4">
                <a className="d-md-flex d-none navbar-brand text-white mx-auto" href="/">COLLIN<strong>DAPPER</strong></a>
              </div>

              <div className="d-flex col-4">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link text-white " href="#"><i className="fa-brands fa-linkedin"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white"href="#"><i className="fa-brands fa-github"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/login"><i className="fa-solid fa-circle-user"></i></a>
                  </li>
                </ul>
              </div>
          </div>

        <div className="navbar container d-flex d-md-none">
          <a className="d-md-none d-flex navbar-brand text-white" href="#">COLLIN<strong>DAPPER</strong></a>
            <button className="d-md-none hamburger-toggle" type="button" onClick={this.toggleNavbarOpen}>
              <span className="hamburger-icon"></span>
            </button>
          </div>

            {navbarOpen ?
              <div className="d-flex row mx-auto">
                <ul className="navbar-nav me-auto mb-2">
                  <li className="nav-item text-center">
                    <a className="nav-link text-white" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item text-center">
                    <a className="nav-link text-white"href="/projects">Work</a>
                  </li>
                  <li className="nav-item text-center">
                    <a className="nav-link text-white" href="/skills">Skills</a>
                  </li>
                  <li className="nav-item text-center">
                    <a className="nav-link text-white" href="/contact">Contact</a>
                  </li>
                </ul>

                <div className="row mx-auto">
                  <ul className="d-flex navbar-nav list-group-horizontal justify-content-between">
                    <li className="nav-item">
                      <a className="nav-link text-white " href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </li>                  
                    <li className="nav-item">
                      <a className="nav-link text-white"href="#"><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="/login"><i className="fa-solid fa-circle-user"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              :
              null
            }
        </nav>
        }

        <div className="mainContent">
          {this.props.children}
        </div>

        {/* Footer */}
        <footer className="sticky-bottom">
          <div className="container footer">
            <div className="d-flex row">
              <div className="col-6">
                <p className="footerItem text-white">Developed by Collin Dapper</p>
              </div>
              <div className="col-6">
                <ul className="d-flex navbar-nav list-group-horizontal justify-content-end">
                  <li className="nav-item me-2">
                    <a className="nav-link text-white " href="#"><i className="fa-brands fa-linkedin"></i></a>
                  </li>
                  
                  <li className="nav-item me-2">
                    <a className="nav-link text-white"href="#"><i className="fa-brands fa-github"></i></a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link text-white" href="#"><i className="fa-solid fa-circle-user"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Layout;