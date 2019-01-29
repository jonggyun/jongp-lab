import React, { Component } from 'react';
import SelectBox from './presenter';

import PropTypes from 'prop-types';

class Container extends Component {
  static propType = {
    items: PropTypes.array.isRequired,
    setPostCategoryId: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value === '') {
      const { setPostCategoryId } = this.props;
      this.setState({
        value: this.props.items[0].id,
      });
      setPostCategoryId(this.props.items[0].id);
    }
  }

  render() {
    const { items } = this.props;
    const { value } = this.state;
    return (
      <SelectBox
        items={items}
        handleChange={this._handleChange}
        value={value}
      />
    );
  }

  _handleChange = event => {
    const {
      target: { value },
    } = event;

    const { setPostCategoryId } = this.props;

    this.setState({
      value,
    });
    setPostCategoryId(value);
  };
}

export default Container;
