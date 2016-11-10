/* @flow */
'use strict';

import React, {Component} from 'react';
import {View, TouchableOpacity, } from 'react-native';
import computeProps from '../Utils/computeProps';
import _ from 'lodash';
import Col from './Col';
import Row from './Row';


export default class GridNB extends Component {
    prepareRootProps() {

        var type = {
            flex: 1,
            flexDirection: this.ifRow() ? 'column' : 'row'
        }

        var defaultProps = {
            style: type
        }

        return computeProps(this.props, defaultProps);

    }
    ifRow() {
        var row = false;
        React.Children.forEach(this.props.children, function (child) {
            if(child.type == Row)
                row = true;
        })
        return row;
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

