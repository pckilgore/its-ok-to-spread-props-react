import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const random = () => Math.round(Math.random() * 100);
function App() {
  const [one, setOne] = useState(random());
  const [two, setTwo] = useState({ key: random() });
  const [three, setThree] = useState([random()]);
  const [noop, setNoOp] = useState("IGNORE ME");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setOne(one + 1);
        }}
      >
        Update One
      </button>
      <button
        onClick={() => {
          setTwo({ key: two + 1 });
        }}
      >
        Update Two
      </button>
      <button
        onClick={() => {
          setThree([three + 1]);
        }}
      >
        Update Three
      </button>
      <button
        onClick={() => {
          setNoOp("IGNORE ME" + noop);
        }}
      >
        NooP
      </button>
      <div>{noop}</div>
      <DiffComponent {...{ one, two, three }} />
      <SpreaderDiff {...{ one, two, three }} />
      <SpreaderDiff2 {...{ one, two, three }} />
    </div>
  );
}

const SpreaderDiff = ({ one, ...props }) => (
  <DiffComponent one={one} {...props} />
);

const SpreaderDiff2 = ({ two, ...props }) => (
  <DiffComponent two={two} {...props} />
);

class DiffComponent extends React.PureComponent {
  componentDidUpdate(nextProps, nextState) {
    console.log("I Updated!", this.props, nextProps);
  }
  render() {
    return <div>Hi</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
