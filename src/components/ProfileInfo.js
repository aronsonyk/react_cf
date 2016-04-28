import React from 'react'

export default class ProfileInfo extends React.Component {
  
  constructor() {
    super()
  }

  render() {
    return (
      <h1>{ this.props.name.title + 
            ' ' + 
            this.props.name.first +
            ' ' +
            this.props.name.last }</h1>
    )
  }

}