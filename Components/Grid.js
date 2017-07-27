import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {reduce} from 'lodash';
import computeProps from '../Utils/computeProps';
import Row from './Row';

const ifRow = () =>
  reduce(React.Children, (initial, child) =>
    (child && child.type === Row) || initial
  , false);

export default class GridNB extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  props: {
    children: Object,
    onPress: Function
  };

  prepareRootProps() {
    const defaultProps = {
      style: {
        flex: 1,
        flexDirection: ifRow() ? 'column' : 'row'
      }
    };

    return computeProps(this.props, defaultProps);
  }

  renderGrid() {
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
          {this.renderGrid()}
        </TouchableOpacity>
      );
    }

    return this.renderGrid();
  }
}
