import React, { Component } from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Totaler extends Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <div className="summary__total__label">Total
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
     );
  }
}

export default Totaler