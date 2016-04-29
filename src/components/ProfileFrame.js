import React from 'react'

import PictureFrame from './PictureFrame.js'
import ProfileInfo from './ProfileInfo.js'

export default class ProfileFrame extends React.Component {

  constructor() {
    super()
  }

  render() {
    if(this.props.people != null) {
      return (
        <div>
          <PictureFrame picture={this.props.people.picture.thumbnail}/>
          <ProfileInfo name={this.props.people.name}/>
        </div>
      )
    } else {
      return (<h1>loading</h1>)
    }
  }

}