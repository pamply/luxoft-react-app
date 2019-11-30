import React, { Component } from 'react'
import SantaLogo from '../assets/santaLogo.jpg'
import { Navbar } from './navbar'

export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-2">Secret Santa</h1>
            <p className="lead">A tool to organize gift exchanges.</p>
          </div>
          <div className="text-center">
            <img src={SantaLogo} height="150" alt="" />
          </div>
        </div>
        <div className="card">
          <h3>What is Secret Santa?</h3>
          <div className="card card-body">
            Secret Santa is a Christmas tradition. Members of a group of friends, family, or coworkers draw random names to become someone’s Secret Santa. The Secret Santa is given a wish list of gift ideas to choose from to give to their chosen giftee. After opening their present, the giftee has to guess which member of the group was their Secret Santa.
          </div>
        </div>
        <br />
        <div className="card">
          <h3>Rules</h3>
          <div className="card card-body">
            <ol className="list-group">
              <li className="list-group-item">Write down each name on a piece of paper</li>
              <li className="list-group-item">Have everyone write down a gift suggestion or two</li>
              <li className="list-group-item">Draw names to randomly assign a Secret Santa to each player</li>
              <li className="list-group-item">Plan a gift exchange party</li>
              <li className="list-group-item">Guess who drew your name</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
