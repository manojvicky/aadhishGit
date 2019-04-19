import React from "react";

export default function App(props) {
  console.log("Props", props);
  return (
    <div className="App">
      <button
        onClick={() => {
          props.hitIt();
        }}
      >
        Hit Api
      </button>
      <button
        onClick={() => {
          props.counterAction();
        }}
      >
        counter
      </button>

      <div>{props.counter}</div>
      <div>
        {props.data.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}
