"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var React = require("react");
var ReactDOM = require("react-dom/client");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var serviceWorker = require("./serviceWorker");
var container = document.getElementById("root");
if (!container)
    throw new Error('Failed to find the root element');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(react_1.ColorModeScript, null),
    React.createElement(App_1.App, null)));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
