import React from 'react'
import ReactDOM from 'react-dom'
import About from './about';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <About />,
    document.body.appendChild(document.createElement('div')),
  )
})