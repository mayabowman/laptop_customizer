import React, { Component } from 'react'
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FieldOptions extends Component {

  // updateFeature = (feature, newValue) => {
  //   const selected = Object.assign({}, this.props.selected);
  //   selected[feature] = newValue;
  //   this.setState({
  //     selected
  //   });
  // };
  
  render() {
    console.log(this.props.features)
    // debugger;
    return (
      this.props.features[this.props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(item.name)}
              checked={item.name === this.props.selected[this.props.feature].name}
              onChange={e => this.props.updateFeature(this.props.selected, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        )
      })
    )
  }
}

export default FieldOptions