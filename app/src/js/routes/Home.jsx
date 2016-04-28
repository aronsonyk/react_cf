import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>HOLA!</h1>
        <nav>
          <Link to='store'>Store</Link>
        </nav>
      </div>
    )
  }

}