import React from 'react'
import ReactDOM from 'react-dom'
import Projects from './projects'

document.addEventListener('DOMContentLoaded', () => {
  // const node = document.getElementById('params');
  // const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <Projects />,
    document.body.appendChild(document.createElement('div')),
  )
})