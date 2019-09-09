import React, { Component } from 'react'
import ChooseFeature from './ChooseFeature'

class Options extends Component {
  render() {
    return (
      <div>
        <ChooseFeature 
          features={this.props.features} 
          selected={this.props.selected} 
          updateFeature={this.props.updateFeature}   
        />
      </div>
    )
  }
}

export default Options;