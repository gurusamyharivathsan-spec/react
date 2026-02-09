import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id : "parent"},
    [React.createElement("div", {id : "child1"}, [
        React.createElement("h1",{}, "Hello from H1 Tag"),
        React.createElement("h2", {}, "Hello from H2 Tag")
    ]),
    React.createElement("div", {id : "child2"}, [
        React.createElement("h1", {}, "Hello from h1 Tag"),
        React.createElement("h2", {}, "Hello from h2 Tag")
    ])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);