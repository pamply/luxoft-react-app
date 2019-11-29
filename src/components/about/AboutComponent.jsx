/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Santa from '../../assets/santa.jpg'

const AboutComponent = () =>
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Secret Santa</h1>
      <p className="lead">Secret santa is an app made for you by you.</p>
      <p >This is some random text here blablabla.</p>
      <img src={Santa} alt="..." className="img-thumbnail" />
    </div>
  </div>

export default AboutComponent
