/* @flow */
'use strict';

import React, {Component} from 'react';
import {View, TouchableOpacity, } from 'react-native';
import computeProps from '../Utils/computeProps';
import _ from 'lodash';


export default class ColunmNB extends Component {
    prepareRootProps() {

        var type = {
        	flexDirection: 'column',
        	flex: (this.props.size) ? this.props.size : (this.props.style && this.props.style.width) ? 0 : 1,
        }

        var defaultProps = {
            style: type
        }
        return computeProps(this.props, defaultProps);

    }
    render() {
        if(this.props.onPress){
            return(
                <TouchableOpacity onPress={this.props.onPress}><View {...this.prepareRootProps()} >{this.props.children}</View></TouchableOpacity>
            );
        }
        else {
            return (
                <View {...this.prepareRootProps()} >{this.props.children}</View>
            );
        }
    }

}

