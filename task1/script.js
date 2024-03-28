const root = document.querySelector("#root");


function Card(props){
    return React.createElement("div", {className: "users" }  , [
        React.createElement("h1", null, [props.firstname])
    ]
    [
        React.createElement("h1", null, [props.lastname])
    ]
    [
        React.createElement("span", null, [props.age])
    ]
    [
        React.createElement("span", null, [props.gender])
    ]
    [
        React.createElement("span", null, [props.email])
    ]
    [
        React.createElement("span", null, [props.job])
    ])
 }
 function App() {
    return React.createElement("main", { className: "user" }, [
      ...data.map((id) => React.createElement(Card, id)),
    ]);
  }
  

 ReactDOM.render(App(), root);