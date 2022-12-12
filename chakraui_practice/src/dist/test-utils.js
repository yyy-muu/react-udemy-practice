"use strict";
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
exports.render = void 0;
var React = require("react");
var react_1 = require("@testing-library/react");
var react_2 = require("@chakra-ui/react");
var AllProviders = function (_a) {
    var children = _a.children;
    return (React.createElement(react_2.ChakraProvider, { theme: react_2.theme }, children));
};
var customRender = function (ui, options) {
    return react_1.render(ui, __assign({ wrapper: AllProviders }, options));
};
exports.render = customRender;
