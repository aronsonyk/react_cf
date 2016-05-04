import React from 'react'

import Comment from './Comment'

export default class CommentBox extends React.Component {

  constructor() {
    super()
  }

  render() {
    let all_comments = 
      this.props.data.map((comment) => {
        return (
          <Comment author={ comment.author } key={ comment.id }>
            { comment.text }
          </Comment>
        )
      })
    return (
      <div class='commentList'>
        { all_comments }
      </div>
    )
  }

}