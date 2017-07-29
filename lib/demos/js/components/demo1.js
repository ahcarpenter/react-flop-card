'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flipCard = require('components/flip-card');

var _flipCard2 = _interopRequireDefault(_flipCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_Component) {
  _inherits(Demo, _Component);

  function Demo(props) {
    _classCallCheck(this, Demo);

    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.state = {
      flippedKey: null
    };
    _this.cards = Array.apply(null, { length: 64 }).map(function (val, ind) {
      return {
        key: String(ind),
        style: {
          front: _this.getFrontStyle(ind),
          back: backStyle,
          wrapper: wrapperStyle
        },
        frontChild: _react2.default.createElement('noscript', null),
        backChild: _react2.default.createElement(
          'p',
          { style: letterStyle },
          randomLetter()
        ),
        onMouseOver: function onMouseOver() {
          _this.setState({ flippedKey: String(ind) });
        },
        onMouseOut: function onMouseOut() {
          _this.setState({ flippedKey: null });
        }
      };
    });
    return _this;
  }

  _createClass(Demo, [{
    key: 'getFrontStyle',
    value: function getFrontStyle(ind) {
      var y = (ind - ind % 8) / 8 * -104;
      var x = ind % 8 * -104 - 300;
      var backgroundStyle = 'url("img/food-dinner-lemon-rice.jpg") ' + x + 'px ' + y + 'px/auto';
      return {
        background: backgroundStyle,
        borderRadius: '20px'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: containerStyle },
        this.cards.map(function (_ref) {
          var key = _ref.key,
              frontChild = _ref.frontChild,
              backChild = _ref.backChild,
              onMouseOver = _ref.onMouseOver,
              onMouseOut = _ref.onMouseOut,
              style = _ref.style;
          return _react2.default.createElement(_flipCard2.default, {
            key: key,
            flipped: _this2.state.flippedKey === key,
            onMouseOut: onMouseOut, onMouseOver: onMouseOver,
            frontChild: frontChild, backChild: backChild,
            width: 100, height: 100, style: style });
        })
      );
    }
  }]);

  return Demo;
}(_react.Component);

exports.default = Demo;


var backStyle = {
  backgroundColor: 'green',
  borderRadius: '20px'
};

var letterStyle = {
  color: 'white',
  fontSize: '40px',
  margin: '28px 0',
  textAlign: 'center',
  fontFamily: 'sans-serif'
};

var containerStyle = {
  fontSize: 0,
  width: '832px',
  margin: '0 auto'
};

var wrapperStyle = {
  display: 'inline-block',
  margin: '2px'
};

function randomLetter() {
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return possible.charAt(Math.floor(Math.random() * possible.length));
}