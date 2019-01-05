import React, { Component } from 'react';
import Admin from './presenter';

class Container extends Component {
  state = {
    username: '',
    password: '',
  };
  render() {
    const { username, password } = this.state;
    return (
      <Admin
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleKeyPress={this._handleKeyPress}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }
  _handleInputChange = event => {
    const {
      target: { value, name },
    } = event;
    this.setState({
      [name]: value, // name으로 들어온 객체의 이름에 value를 입력
    });
  };
  _handleSubmit = () => {
    const { username, password } = this.state;
    const { usernameLogin } = this.props;
    usernameLogin(username, password);
  };
  _handleKeyPress = event => {
    const { key } = event;
    const { username, password } = this.state;
    const { usernameLogin } = this.props;
    if (key === 'Enter') {
      usernameLogin(username, password);
    }
  };
}

export default Container;
