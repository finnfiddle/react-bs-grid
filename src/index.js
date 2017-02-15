import React from 'react';
import itsSet from 'its-set';

// convert first letter of word to uppercase
const cap = word => (word || '').charAt(0).toUpperCase() + (word || '').slice(1);

export const Container = ({ children, fluid=false, className='', ...rest }) => (
  <div className={`${className} container${fluid ? '-fluid' : ''}`} {...rest}>
    {children}
  </div>
);

// bootstrap row
export const Row = ({ children, className, style }) => {
  className = className || '';
  return <div className={`${className} row`} style={style}>{children}</div>;
};

// bootstrap column
// defaultProps: {
//   lg: PropTypes.oneOf([Proptypes.string, PropTypes.number]),
//   md: PropTypes.oneOf([Proptypes.string, PropTypes.number]),
//   sm: PropTypes.oneOf([Proptypes.string, PropTypes.number]),
//   xs: PropTypes.oneOf([Proptypes.string, PropTypes.number]),
// }
// eg: <Col lg={2} md={3} sm='5' xs='12'>content</Col>
const SIZES = ['lg', 'md', 'sm', 'xs'];

export const Col = (props) => {
  let className = props.className || '';

  const add = (size) => {
    if (itsSet(props[size])) {
      className += ` col-${size}-${props[size]}`;
    }
  };

  const addOffset = (size) => {
    if (itsSet(props[`offset${cap(size)}`])) {
      className += ` col-${size}-offset-${props[`offset${cap(size)}`]}`;
    }
  };

  SIZES.forEach(add);
  SIZES.forEach(addOffset);

  return <div className={className} style={props.style}>{props.children}</div>;
};
