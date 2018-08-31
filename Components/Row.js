'use strict';

import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';

import computeProps from '../Utils/computeProps';


export default class RowNB extends Component {
    prepareRootProps() {

        var type = {
        	flexDirection: 'row',
        	flex: (this.props.size) ? this.props.size : (this.props.style && this.props.style.height) ? 0 : 1,
        }

        var defaultProps = {
            style: type
        }
        return computeProps(this.props, defaultProps);

    }

    setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }

    render() {
      if(this.props.onPress || this.props.onLongPress){
        return(
            <TouchableOpacity onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
          <View
        ref={component => this._root = component}
        {...this.props}
        {...this.prepareRootProps()}
      >{this.props.children}</View>
          </TouchableOpacity>
      );
      }
      else{
        return(
          <View
            ref={component => this._root = component}
            {...this.props}
            {...this.prepareRootProps()}
          >{this.props.children}</View>
        );
      }
    }


}
