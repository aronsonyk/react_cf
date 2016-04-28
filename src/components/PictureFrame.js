import React from 'react'

var img_style = {
  'maxWidth': '50%'
}

export default class PictureFrame extends React.Component {
  
  constructor() {
    super()
  }

  render() {
    console.log(this.props.picture)
    return (
      <img style={img_style} src={this.props.picture}/>
    )
  }

}