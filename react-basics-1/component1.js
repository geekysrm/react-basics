const e = React.createElement;

class MyComponent extends React.Component {
  render() {
    return e("h1", { id: "hello" }, "Hello world!!!");
    // name of the tag, attributes, content
  }
}

// <h1>hello World</h1>

const start = document.querySelector("#start");
console.log(start);
ReactDOM.render(e(MyComponent), start);
