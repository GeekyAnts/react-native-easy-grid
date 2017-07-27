import ReactNativePropRegistry from 'react-native/Libraries/Renderer/shims/ReactNativePropRegistry';
import {clone, merge, forEach, isArray} from 'lodash';

export default (incomingProps, defaultProps) => {
  // External props has a higher precedence
  let computedProps = {};

  const props = clone(incomingProps);
  delete props.children;

  const propsStyle = props.style;
  delete props.style;

  if (props) {
    merge(computedProps, defaultProps, props);
  } else {
    computedProps = defaultProps;
  }

  // Pass the merged Style Object instead
  if (propsStyle) {
    let computedPropsStyle = {style: {}};

    if (isArray(propsStyle)) {
      forEach(propsStyle, (style) => {
        if (typeof style === 'number') {
          merge(computedPropsStyle, ReactNativePropRegistry.getByID(style));
        } else {
          merge(computedPropsStyle, style);
        }
      });
    } else if (typeof computedPropsStyle === 'number') {
      computedPropsStyle = ReactNativePropRegistry.getByID(propsStyle);
    } else {
      computedPropsStyle = propsStyle;
    }

    merge(computedProps.style, defaultProps.style, computedPropsStyle);
  }

  return computedProps;
};
