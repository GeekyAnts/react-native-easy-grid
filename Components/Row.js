/* @flow */
'use strict';

import React, {View, Component } from 'react-native';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';
import multiply from 'multiplier';


export default class RowNB extends Component {
    prepareRootProps() {

        var type = { 
        	flexDirection: 'row',
        	flex: (this.props.size) ? this.props.size : 1,    
        }
      
        var defaultProps = {
            style: type
        }	  
      	console.log(computeProps(this.props, defaultProps), "proppppppss");
        return computeProps(this.props, defaultProps);

    }
    render() {
        return(
            <View {...this.prepareRootProps()} >{this.props.children}</View>
        );
    }    

}

