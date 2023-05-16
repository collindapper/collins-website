import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './layout.scss';
import Calendly from './calendly';


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
        <nav className="navbar navbar-expand-md sticky-top">
          <div className="container-fluid d-none d-md-flex justify-content-between">         
              <div className="d-flex col-4">
                <ul className="d-flex navbar-nav ms-5 me-auto">
                <li className="nav-item fontNavigation me-3">
                    <a className="nav-link text-black" href="/">Home</a>
                  </li>
                  <li className="nav-item fontNavigation me-3">
                    <a className="nav-link text-black"href="/about">About</a>
                  </li>            
                  <li className="nav-item fontNavigation me-3">
                    <a className="nav-link text-black"href="/projects">Projects</a>
                  </li>
                  <li className="nav-item fontNavigation me-3">
                    <a className="nav-link text-black" href="/skills">Skills</a>
                  </li>
                  <li className="nav-item fontNavigation me-3">
                    <a className="nav-link text-black" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="d-flex col-4">
                <ul className="navbar-nav ms-auto me-5">
                  <li className="nav-item fontNavIcons">
                    <a className="nav-link text-black" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                  </li>              
                  <li className="nav-item fontNavIcons">
                    <a className="nav-link text-black" href="https://github.com/collindapper" target="_blank"><i className="fa-brands fa-github"></i></a>
                  </li>
                  <li className="nav-item fontNavIcons">
                    <a className="nav-link text-black" href="/login"><i className="fa-solid fa-circle-user"></i></a>
                  </li>
                  <li className="nav-item fontNavigation">
                    <a className="nav-link text-black" onClick={this.logout}>Logout</a>
                  </li>
                </ul>
              </div>      
          </div>

        <div className="container d-flex d-md-none sticky-top">
          <a className="d-md-none d-flex navbar-brand text-black my-auto fontPrimary" href="/">COLLIN<strong>DAPPER</strong></a>
            <button className="d-md-none hamburger-toggle" onClick={this.toggleNavbarOpen}>
              <span className={`hamburger hamburger-icon ${navbarOpen && "is-open"}`}></span>
            </button>
          </div>

            {navbarOpen ?        
              <div className="d-flex row mx-auto">
                <ul className="navbar-nav me-auto mb-2">
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href="/">Home</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href="/about">About</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href='/projects'>Projects</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href='/skills'>Skills</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href='/contact'>Contact</a>
                  </li>
                </ul>

                <div className="row mx-auto">
                  <ul className="d-flex navbar-nav list-group-horizontal justify-content-between">
                    <li className="nav-item fontNavIcons">
                      <a className="nav-link text-black" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                    
                    <li className="nav-item fontNavIcons">
                      <a className="nav-link text-black" href="https://github.com/collindapper" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li className="nav-item fontNavIcons">
                      <a className="nav-link text-black" href="/login"><i className="fa-solid fa-circle-user"></i></a>
                    </li>
                    <li className="nav-item fontNavIcons">
                      <a className="nav-link text-black" onClick={this.logout}>Logout</a>
                    </li>
                  </ul>
                </div>
                
              </div>
              :
              null
            }
        </nav>
        :
        <nav className="navbar navbar-expand-md sticky-top">
          <div className="navbar container-fluid d-none d-md-flex justify-content-between">
              <div className="d-flex col-4">
                <ul className="d-flex navbar-nav me-auto ms-5">
                <li className="nav-item fontNavigation me-2">
                    <a className="nav-link text-black" href='/'>Home</a>
                  </li>
                  <li className="nav-item fontNavigation me-2">
                    <a className="nav-link text-black"href='/about'>About</a>
                  </li>
                  <li className="nav-item fontNavigation me-2">
                    <a className="nav-link text-black"href='/projects'>Projects</a>
                  </li>
                  <li className="nav-item fontNavigation me-2">
                    <a className="nav-link text-black" href='/skills'>Skills</a>
                  </li>
                  <li className="nav-item fontNavigation">
                    <a className="nav-link text-black" href='/contact'>Contact</a>
                  </li>
                </ul>
              </div>

              <div className="d-flex col-4">
                <ul className="navbar-nav ms-auto me-5">
                  <li className="nav-item fontNavigation">
                    <a className="nav-link text-black" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                  </li>
                  <li className="nav-item fontNavigation">
                    <a className="nav-link text-black" href="https://github.com/collindapper" target="_blank"><i className="fa-brands fa-github"></i></a>
                  </li>
                  <li className="nav-item fontNavigation">
                    <a className="nav-link text-black" href="/login"><i className="fa-solid fa-circle-user"></i></a>
                  </li>
                </ul>
              </div>
          </div>

        <div className="container d-flex d-md-none sticky-top">
          <a className="d-md-none d-flex navbar-brand text-black fontPrimary" href="/">COLLIN<strong>DAPPER</strong></a>
            <button className="d-md-none hamburger-toggle" onClick={this.toggleNavbarOpen}>
              <span className={`hamburger hamburger-icon ${navbarOpen && "is-open"}`}></span>
            </button>
          </div>

            {navbarOpen ?
              <div className="d-flex row mx-auto">
                <ul className="navbar-nav me-auto mb-2">
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href="/">Home</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href="/about">About</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href="/projects">Projects</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href="/skills">Skills</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black" href="/contact">Contact</a>
                  </li>
                </ul>

                <div className="row mx-auto">
                  <ul className="d-flex navbar-nav list-group-horizontal justify-content-between">
                    <li className="nav-item fontNavigation">
                      <a className="nav-link text-black" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </li>                  
                    <li className="nav-item fontNavigation">
                      <a className="nav-link text-black" href="https://github.com/collindapper" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li className="nav-item fontNavigation">
                      <a className="nav-link text-black" href="/login"><i className="fa-solid fa-circle-user"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              :
              null
            }
        </nav>
        }

        <div id="mainContent" className="mainContent mb-3">
          {this.props.children}
          <Calendly className="mb-5" />
        </div>

        {/* Footer */}
        <footer className="sticky-bottom mt-5">
          <div className="container-fluid footer">
            <div className="d-flex row">
              <div className="col-6">
                <p className="footerItem">&copy; 2022 by Collin Dapper</p>
              </div>
              
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Layout;