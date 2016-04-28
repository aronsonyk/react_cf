import React from 'react'
import $ from 'jquery'

import PictureFrame from './PictureFrame.js'
import ProfileInfo from './ProfileInfo.js'

export default class ProfileFrame extends React.Component {
  
  constructor() {
    super()
    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    let self = this
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        console.log(data)
        let profile = data.results[0]
        self.setState({profile: profile});
      } 
    });

    setTimeout(() => {
      $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data)
          let profile = data.results[0]
          self.setState({profile: profile});
        } 
      });
    }, 5000)
  }

  render() {
    if(this.state.profile != null) {
      return (
        <div>
          <PictureFrame picture={this.state.profile.picture.thumbnail}/>
          <ProfileInfo name={this.state.profile.name}/>
        </div>
      )
    } else {
      return (<h1>loading</h1>)
    }
  }

}