import React from 'react'

import PeopleStore from '../stores/PeopleStore.js'

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
    this.unsubscribe = PeopleStore.listen(this.onProfileFetch, this);
  }

  onProfileFetch(data) {
    console.log(data)
    this.setState({
      profile: data.profile
    })
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

  componentWillUnmount() {
    this.unsubscribe()
  }

}