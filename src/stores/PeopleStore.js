import Reflux from 'reflux'
import $ from 'jquery'

import PeopleActions from '../actions/PeopleActions.js'

let PeopleStore = Reflux.createStore({
  listenables: [PeopleActions],
  init: function() {
    this.fetchPeople()
  },
  fetchPeople: function() {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json'
    })
    .done((data) => {
      let profile = data.results[0]
      this.trigger({profile: profile})
    })
  }
})

export default PeopleStore

