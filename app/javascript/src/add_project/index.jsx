import React from 'react'
import ReactDOM from 'react-dom'
import AddProject from './add_project'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <AddProject />,
    document.body.appendChild(document.createElement('div')),
  )
})