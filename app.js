/* div parent
        div child
            h1
            h2
        div child2
            h1
            h2
*/

const parent = React.createElement("div",{},
    [React.createElement("div", {}, 
        [React.createElement("h1", {}, "Hello from h1"), 
            React.createElement("h2",{}, "Hello from h2")]),
        React.createElement("div2", {}, 
        [React.createElement("h1", {}, "Hello from h1"), 
            React.createElement("h2",{}, "Hello from h2")])])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);