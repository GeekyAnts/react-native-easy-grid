/* @flow */
'use strict';

import React, {View, Component} from 'react-native';
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
      	console.log(computeProps(this.props, defaultProps), "proppppppss");
        return computeProps(this.props, defaultProps);

    }
    render() {
        return(
            <View {...this.prepareRootProps()} >{this.props.children}</View>
        );
    }    

}

