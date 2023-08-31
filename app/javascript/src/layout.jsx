import React, { useState, useEffect } from 'react';

import './layout.scss';
import Calendly from './calendly';


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      scrolled: false,
      scrollPosition: window.scrollY,
    }
  }

  componentDidMount = () => {
    console.log(this.state.scrollPosition);
    console.log(window.scrollY);

    this.setState({
      scrollPosition: window.scrollY,
    })
    
    document.addEventListener('scroll', this.toggleScrollDown);
  }

  toggleNavbarOpen = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }

  toggleScrollDown = () => {
    if (window.scrollY > 0) {
      this.setState({
        scrolled: true,
        scrollPosition: window.scrollY,
      });
    } else if (window.scrollY === 0){
      this.setState({
        scrolled: false,
        scrollPosition: window.scrollY,
      })
    } else {
      console.log("failed");
    }
  }

  render () {
    const { navbarOpen, scrolled } = this.state;
    
    return (
      <React.Fragment>
        <nav className={`${(scrolled && "scrolled-down shadow-lg") || (!scrolled && "navbar")} navbar-expand-md sticky-top `}>
          <div className="navbar container-fluid d-none d-md-flex row">
              <div className="d-flex justify-content-between">
              <a className="d-md-flex navbar-brand text-black fontPrimary col-4" href="/">COLLIN<strong>DAPPER</strong></a>
                <ul className="d-flex navbar-nav col-6 justify-content-center">
                  <li className="nav-item fontNavigation mx-auto">
                    <a className="nav-link text-black" href='/'>Home</a>
                  </li>
                  <li className="nav-item fontNavigation mx-auto">
                    <a className="nav-link text-black" href='/about'>About</a>
                  </li>
                  <li className="nav-item fontNavigation mx-auto">
                    <a className="nav-link text-black" href='/projects'>Projects</a>
                  </li>
                  <li className="nav-item fontNavigation mx-auto">
                    <a className="nav-link text-black" href='/skills'>Certifications</a>
                  </li>
                  <li className="nav-item fontNavigation mx-auto">
                    <a className="nav-link text-black" href='/cyber'>Cyber</a>
                  </li>
                </ul>
              </div>
          </div>

        <div className="container d-flex d-md-none sticky-top justify-content-between">
          <a className="d-md-none d-flex navbar-brand text-black fontPrimary my-auto" href="/">COLLIN<strong>DAPPER</strong></a>
            <button className="d-md-none hamburger-toggle" onClick={this.toggleNavbarOpen}>
              <span className={`hamburger hamburger-icon ${navbarOpen && "is-open"}`}></span>
            </button>
          </div>

            {navbarOpen ?
              <div className="d-flex row me-auto ms-5">
                <ul className="navbar-nav me-auto mb-2">
                  <li className="nav-item fontNavigation text-start">
                    <a className="nav-link text-black fontNavigation" href="/">Home</a>
                  </li>
                  <li className="nav-item fontNavigation text-start">
                    <a className="nav-link text-black fontNavigation" href="/about">About</a>
                  </li>
                  <li className="nav-item fontNavigation text-start">
                    <a className="nav-link text-black fontNavigation" href="/projects">Projects</a>
                  </li>
                  <li className="nav-item fontNavigation text-start">
                    <a className="nav-link text-black fontNavigation" href="/skills">Certifications</a>
                  </li>
                  <li className="nav-item fontNavigation text-start">
                    <a className="nav-link text-black fontNavigation" href="/cyber">Cyber</a>
                  </li>
                </ul>
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