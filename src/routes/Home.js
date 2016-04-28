import React from 'react'

import ProfileFrame from '../components/ProfileFrame.js'

export default class Home extends React.Component {
  
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <ProfileFrame/>
      </div>
    )
  }

}