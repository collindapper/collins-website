import React from 'react'
import ReactDOM from 'react-dom'
import Contact from './contact';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Contact />,
    document.body.appendChild(document.createElement('div')),
  )
})