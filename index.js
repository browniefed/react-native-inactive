import React, { Component } from "react";
import { View, PanResponder } from "react-native";

export default class Inactive extends Component {
  state = {
    inactive: false,
  };
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => {
        clearTimeout(this.timeout);

        if (this.state.inactive === true) {
          this.setState({
            inactive: false,
          });
        }

        this.timeout = setTimeout(() => {
          this.setState({ inactive: true });
        }, this.props.delay);
      },
    });
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { children, delay, ...props } = this.props;
    return (
      <View {...props} {...this._panResponder.panHandlers}>
        {children(this.state.inactive)}
      </View>
    );
  }
}
