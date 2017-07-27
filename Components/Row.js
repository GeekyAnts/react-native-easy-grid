import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import computeProps from '../Utils/computeProps';

export default class RowNB extends Component {
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
    const flex = (this.props.style && this.props.style.height) ? 0 : 1;
    const defaultProps = {
      style: {
        flexDirection: 'row',
        flex: this.props.size ? this.props.size : flex
      }
    };

    return computeProps(this.props, defaultProps);
  }

  renderView() {
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
          {this.renderView()}
        </TouchableOpacity>
      );
    }

    return this.renderView();
  }
}
