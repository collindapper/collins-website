import React from 'react';

import './layout.scss';
import Calendly from './calendly';


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
    }
  }


  toggleNavbarOpen = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }


  render () {
    const { navbarOpen } = this.state;
    
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md sticky-top">
          <div className="navbar container-fluid d-none d-md-flex justify-content-between">
              <div className="d-flex col-4">
                <ul className="d-flex navbar-nav me-auto ms-5">
                <li className="nav-item fontNavigation me-2">
                    <a className="nav-link text-black fontSecondary" href='/'>Home</a>
                  </li>
                  <li className="nav-item fontNavigation me-2">
                    <a className="nav-link text-black fontSecondary" href='/about'>About</a>
                  </li>
                  <li className="nav-item fontNavigation me-2">
                    <a className="nav-link text-black fontSecondary" href='/projects'>Projects</a>
                  </li>
                  <li className="nav-item fontNavigation me-2">
                    <a className="nav-link text-black fontSecondary" href='/skills'>Skills</a>
                  </li>
                  <li className="nav-item fontNavigation">
                    <a className="nav-link text-black fontSecondary" href='/cyber'>Cyber</a>
                  </li>
                </ul>
              </div>

              <div className="d-flex col-4">
                <ul className="navbar-nav ms-auto me-5">
                  <li className="nav-item fontNavigation">
                    <a className="nav-link text-black fontSecondary" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank"><i className="fa-brands fa-linkedin navLink"></i></a>
                  </li>
                  <li className="nav-item fontNavigation">
                    <a className="nav-link text-black fontSecondary" href="https://github.com/collindapper" target="_blank"><i className="fa-brands fa-github navLink"></i></a>
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
                    <a className="nav-link text-black fontSecondary" href="/">Home</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black fontSecondary" href="/about">About</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black fontSecondary" href="/projects">Projects</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black fontSecondary" href="/skills">Skills</a>
                  </li>
                  <li className="nav-item fontNavigation text-center">
                    <a className="nav-link text-black fontSecondary" href="/cyber">Cyber</a>
                  </li>
                </ul>

                <div className="row mx-auto">
                  <ul className="d-flex navbar-nav list-group-horizontal justify-content-between">
                    <li className="nav-item fontNavigation">
                      <a className="nav-link text-black fontSecondary" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank"><i className="fa-brands fa-linkedin navLink"></i></a>
                    </li>                  
                    <li className="nav-item fontNavigation">
                      <a className="nav-link text-black fontSecondary" href="https://github.com/collindapper" target="_blank"><i className="fa-brands fa-github navLink"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              :
              null
            }
        </nav>
        

        <div id="mainContent" className="mainContent mb-3">
          {this.props.children}
          <Calendly className="mb-5" />
        </div>

        {/* Footer */}
        <footer className="sticky-bottom mt-5">
          <div className="container-fluid footer">
            <div className="d-flex row">
              <div className="col-6">
                <p className="footerItem">&copy; Collin Dapper</p>
              </div>
              
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Layout;