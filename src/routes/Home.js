import React from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import PeopleStore from '../stores/PeopleStore.js'
import PeopleActions from '../actions/PeopleActions.js'

import ProfileFrame from '../components/ProfileFrame.js'

@ReactMixin.decorate(Reflux.connect(PeopleStore, 'people_store'))
export default class Home extends React.Component {
  
  constructor() {
    super()
  }

  reloadProfile() {
    PeopleActions.askForPeople()
  }

  render() {
    return (
      <div>
        <ProfileFrame people={this.state.people_store}/>
        <button onClick={this.reloadProfile.bind(this)}></button>
      </div>
    )
  }

}