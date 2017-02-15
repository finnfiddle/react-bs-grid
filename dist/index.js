(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'its-set'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('its-set'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.itsSet);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _itsSet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Col = exports.Row = exports.Container = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _itsSet2 = _interopRequireDefault(_itsSet);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  // convert first letter of word to uppercase
  var cap = function cap(word) {
    return (word || '').charAt(0).toUpperCase() + (word || '').slice(1);
  };

  var Container = exports.Container = function Container(_ref) {
    var children = _ref.children;
    var _ref$fluid = _ref.fluid;
    var fluid = _ref$fluid === undefined ? false : _ref$fluid;
    var _ref$className = _ref.className;
    var className = _ref$className === undefined ? '' : _ref$className;

    var rest = _objectWithoutProperties(_ref, ['children', 'fluid', 'className']);

    return _react2.default.createElement(
      'div',
      _extends({ className: className + ' container' + (fluid ? '-fluid' : '') }, rest),
      children
    );
  };

  // bootstrap row
  var Row = exports.Row = function Row(_ref2) {
    var children = _ref2.children;
    var className = _ref2.className;
    var style = _ref2.style;

    className = className || '';
    return _react2.default.createElement(
      'div',
      { className: className + ' row', style: style },
      children
    );
  };

  // bootstrap column
  // defaultProps: {
  //   lg: PropTypes.oneOf([Proptypes.string, PropTypes.number]),
  //   md: PropTypes.oneOf([Proptypes.string, PropTypes.number]),
  //   sm: PropTypes.oneOf([Proptypes.string, PropTypes.number]),
  //   xs: PropTypes.oneOf([Proptypes.string, PropTypes.number]),
  // }
  // eg: <Col lg={2} md={3} sm='5' xs='12'>content</Col>
  var SIZES = ['lg', 'md', 'sm', 'xs'];

  var Col = exports.Col = function Col(props) {
    var className = props.className || '';

    var add = function add(size) {
      if ((0, _itsSet2.default)(props[size])) {
        className += ' col-' + size + '-' + props[size];
      }
    };

    var addOffset = function addOffset(size) {
      if ((0, _itsSet2.default)(props['offset' + cap(size)])) {
        className += ' col-' + size + '-offset-' + props['offset' + cap(size)];
      }
    };

    SIZES.forEach(add);
    SIZES.forEach(addOffset);

    return _react2.default.createElement(
      'div',
      { className: className, style: props.style },
      props.children
    );
  };
});