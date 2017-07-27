import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import computeProps from '../Utils/computeProps';

export default class ColumnNB extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  props: {
    style: Object,
    size: number,
    children: Object,
    onPress: Function
  };

  prepareRootProps() {
    const flex = (this.props.style && this.props.style.width) ? 0 : 1;
    const defaultProps = {
      style: {
        flexDirection: 'column',
        flex: this.props.size ? this.props.size : flex,
      }
    };

    return computeProps(this.props, defaultProps);
  }

  renderCol() {
    return (
      <View
        ref={(component) => {
          this._root = component;
        }}
        {...this.props}
        {...this.prepareRootProps()}
      >
        {this.props.children}
      </View>
    );
  }

  render() {
    if (this.props.onPress) {
      return (
        <TouchableOpacity onPress={this.props.onPress}>
          {this.renderCol()}
        </TouchableOpacity>
      );
    }

    return this.renderCol();
  }
}
