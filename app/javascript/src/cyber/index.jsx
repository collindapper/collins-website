import React from 'react'
import ReactDOM from 'react-dom'
import Cyber from './cyber';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Cyber />,
    document.body.appendChild(document.createElement('div')),
  )
})