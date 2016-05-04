import React from 'react'
import { Link } from 'react-router'

let logo = require('../images/yeoman.png');

export default class Sign extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div> 
        <img src={ logo } alt="App Logo"/>
        <h1>React Facilito, Pasa y firma</h1>
        <Link to='sign'>Firma Aqui</Link>
      </div>
    )
  }

}