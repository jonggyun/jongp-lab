import React, { Component } from 'react';
import SelectBox from './presenter';

import PropTypes from 'prop-types';

class Container extends Component {
  static propType = {
    items: PropTypes.array.isRequired,
  };

  state = {
    value: '',
  };

  render() {
    const { items } = this.props;
    return <SelectBox items={items} handleChange={this._handleChange} />;
  }

  _handleChange = event => {
    const {
      target: { value },
    } = event;

    this.setState({
      value,
    });

    console.log('on change!!', value);
  };
}

export default Container;
