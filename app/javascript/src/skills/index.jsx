import React from 'react'
import ReactDOM from 'react-dom'
import Skills from './skills';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Skills />,
    document.body.appendChild(document.createElement('div')),
  )
})