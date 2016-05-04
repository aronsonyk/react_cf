import $ from 'jquery'
import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import CommentBox from '../components/CommentBox'

import CommentActions from '../actions/CommentActions'

import CommentStore from '../stores/CommentStore'

@ReactMixin.decorate(Reflux.connect(CommentStore, 'comments'))
export default class Sign extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    CommentActions.fetchComments()
  }

  sendCommentsOnSubmit(ev) {
    ev.preventDefault()
    let form_data = $(ev.target).serializeArray()
    let comment = {
      "author": form_data[0].value,
      "text": form_data[1].value,
      "id": form_data[2].value      
    }
    console.log(comment)
    CommentActions.updateComments(comment)
  }

  render() {
    if(!this.state.comments) {
      return(<h1>Loading..</h1>) 
    } else {
      return (
        <div class='sing'> 
          <h1>Firmas</h1>
          <CommentBox 
            onSubmit={ this.sendCommentsOnSubmit.bind(this) } 
            data={ this.state.comments } />
        </div>
      )
    }
  }

}