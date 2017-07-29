'use strict';

// polyfill for Object.assign
if (typeof Object.assign != 'function') {
  Object.assign = function (target) {
    'use strict';

    var index = void 0,
        source = void 0,
        key = void 0;
    if (target == null) {
      /* istanbul ignore next */
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (index = 1; index < arguments.length; index++) {
      source = arguments[index];
      if (source != null) {
        for (key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}