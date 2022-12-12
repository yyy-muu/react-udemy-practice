"use strict";
exports.__esModule = true;
exports.App = void 0;
var React = require("react");
var react_1 = require("@chakra-ui/react");
var theme_1 = require("./theme/theme");
exports.App = function () { return (React.createElement(react_1.ChakraProvider, { theme: theme_1["default"] },
    React.createElement(react_1.Button, { colorScheme: "teal" }, "\u30DC\u30BF\u30F3"),
    React.createElement("p", null, "aaaa\u3042"))); };
