import React from 'react'

export default class CommentForm extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} class='commentForm'>
        <input type="text" name="author" placeholder="Nombre"/>
        <input type="text" name="text" placeholder="Comentario"/>
        <input type="hidden" name="id" value={Date.now()}/>
        <input type="submit" value="Firma!"/>
      </form>
    )
  }

}