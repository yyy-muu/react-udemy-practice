"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Logo = void 0;
var React = require("react");
var react_1 = require("@chakra-ui/react");
var logo_svg_1 = require("./logo.svg");
var spin = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"], ["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"])));
exports.Logo = react_1.forwardRef(function (props, ref) {
    var prefersReducedMotion = react_1.usePrefersReducedMotion();
    var animation = prefersReducedMotion
        ? undefined
        : spin + " infinite 20s linear";
    return React.createElement(react_1.chakra.img, __assign({ animation: animation, src: logo_svg_1["default"], ref: ref }, props));
});
var templateObject_1;
