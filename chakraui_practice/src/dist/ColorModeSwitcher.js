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
exports.ColorModeSwitcher = void 0;
var React = require("react");
var react_1 = require("@chakra-ui/react");
var fa_1 = require("react-icons/fa");
exports.ColorModeSwitcher = function (props) {
    var toggleColorMode = react_1.useColorMode().toggleColorMode;
    var text = react_1.useColorModeValue("dark", "light");
    var SwitchIcon = react_1.useColorModeValue(fa_1.FaMoon, fa_1.FaSun);
    return (React.createElement(react_1.IconButton, __assign({ size: "md", fontSize: "lg", variant: "ghost", color: "current", marginLeft: "2", onClick: toggleColorMode, icon: React.createElement(SwitchIcon, null), "aria-label": "Switch to " + text + " mode" }, props)));
};
