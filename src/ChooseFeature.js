import React, { Component } from 'react'
import FieldOptions from './FieldOptions'

class ChooseFeature extends Component {
  
  render() {
    return (
      Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <FieldOptions 
              feature={feature}  
              features={this.props.features} 
              selected={this.props.selected} 
              onChange={this.updateFeature} 
            />
          </fieldset>
        )
      })
    )
  }
}

export default ChooseFeature;