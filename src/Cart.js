import React, { Component } from 'react'
import Totaler from './Totaler'
import Summary from './Summary';

class Cart extends Component {
  render() {
    return (
      <div>
        <Summary features={this.props.features}selected={this.props.selected} />
        <Totaler features={this.props.features}selected={this.props.selected} />
      </div>
    )
  }
}

export default Cart