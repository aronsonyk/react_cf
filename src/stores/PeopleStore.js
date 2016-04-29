import Reflux from 'reflux'
import io from 'socket.io-client'

import PeopleActions from '../actions/PeopleActions.js'

let PeopleStore = Reflux.createStore({
  listenables: [PeopleActions],
  init: function() {
    this.fetchPeople()
  },
  fetchPeople: function() {
    this.socket = io('http://localhost:3000');
    this.socket.on('people', (people) => {
      var people = JSON.parse(people)
      people = people.results[0]
      this.trigger(people)
    });
  },
  askForPeople: function() {
    var ask = 'ask'
    this.socket.emit('ask', ask);
  }
})

export default PeopleStore

