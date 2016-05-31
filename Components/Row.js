/* @flow */
'use strict';

import React, {Component} from 'react';
import {View, } from 'react-native';

import computeProps from '../Utils/computeProps';
import _ from 'lodash';


export default class RowNB extends Component {
    prepareRootProps() {

        var type = {
        	flexDirection: 'row',
        	flex: (this.props.size) ? this.props.size : 1,
        }

        var defaultProps = {
            style: type
        }
        return computeProps(this.props, defaultProps);

    }
    render() {
        return(
            <View {...this.prepareRootProps()} >{this.props.children}</View>
        );
    }

}

