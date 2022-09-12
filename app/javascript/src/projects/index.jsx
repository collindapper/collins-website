import React from 'react'
import ReactDOM from 'react-dom'
import Projects from './projects'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Projects />,
    document.body.appendChild(document.createElement('div')),
  )
})