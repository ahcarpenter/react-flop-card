'use strict';

require('./polyfill');

var _flipCard = require('./components/flip-card');

var _flipCard2 = _interopRequireDefault(_flipCard);

var _rotateCard = require('./components/rotate-card');

var _rotateCard2 = _interopRequireDefault(_rotateCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { FlipCard: _flipCard2.default, RotateCard: _rotateCard2.default };