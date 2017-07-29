'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RotateCard = function (_Component) {
  _inherits(RotateCard, _Component);

  function RotateCard() {
    _classCallCheck(this, RotateCard);

    return _possibleConstructorReturn(this, (RotateCard.__proto__ || Object.getPrototypeOf(RotateCard)).apply(this, arguments));
  }

  _createClass(RotateCard, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      for (var key in nextProps) {
        if (nextProps.hasOwnProperty(key)) {
          if (nextProps[key] !== this.props[key]) {
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$style = this.props.style,
          front = _props$style.front,
          back = _props$style.back,
          wrapper = _props$style.wrapper;
      var _props = this.props,
          frontChild = _props.frontChild,
          backChild = _props.backChild,
          width = _props.width,
          height = _props.height,
          degree = _props.degree,
          onClick = _props.onClick,
          onMouseOver = _props.onMouseOver,
          onMouseOut = _props.onMouseOut;

      var dimensionStyle = {
        width: width + 'px',
        height: height + 'px'
      };
      var _frontStyle = Object.assign({}, frontStyle, front, dimensionStyle, {
        transform: 'rotateX(0deg) rotateY(' + degree + 'deg)'
      });
      var _backStyle = Object.assign({}, backStyle, back, dimensionStyle, {
        transform: 'rotateX(0deg) rotateY(' + (180 + degree) + 'deg)'
      });
      var _wrapperStyle = Object.assign({}, wrapperStyle, wrapper, dimensionStyle);

      return _react2.default.createElement(
        'div',
        { style: _wrapperStyle, onClick: onClick,
          onMouseOver: onMouseOver, onMouseOut: onMouseOut },
        _react2.default.createElement(
          'div',
          { style: _frontStyle },
          frontChild
        ),
        _react2.default.createElement(
          'div',
          { style: _backStyle },
          backChild
        )
      );
    }
  }]);

  return RotateCard;
}(_react.Component);

exports.default = RotateCard;


RotateCard.propTypes = {
  style: _react.PropTypes.shape({
    front: _react.PropTypes.object,
    back: _react.PropTypes.object,
    wrapper: _react.PropTypes.wrapper
  }),
  frontChild: _react.PropTypes.element,
  backChild: _react.PropTypes.element,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  degree: _react.PropTypes.number,
  onClick: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,
  onMouseOver: _react.PropTypes.func
};

RotateCard.defaultProps = {
  width: 100,
  height: 100,
  degree: 0,
  style: {}
};

var wrapperStyle = {
  perspective: '600px',
  position: 'relative'
};

var frontStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  transformStyle: 'preserve-3d',
  backfaceVisibility: 'hidden'
};

var backStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  transformStyle: 'preserve-3d',
  backfaceVisibility: 'hidden'
};