import "./styles.css";

import { useState } from "react";

export default function App() {
  const [counters, setCounters] = useState(initialCounters);

  const onIncrement = (name) => {
    console.log("Increment");
    const counterIndex = counters.findIndex((counter) => counter.name === name);
    counters[counterIndex].value += 1;
    console.log(counters);
    setCounters(counters);
    console.log("Dispatch state chagne");
  };

  return <CounterList onIncrement={onIncrement} counters={counters} />;
}

const initialCounters = [
  {
    name: "Counter 1",
    value: 0
  },
  {
    name: "Counter 2",
    value: 0
  },
  {
    name: "Counter 3",
    value: 0
  }
];

function CounterList({ counters, onIncrement }) {
  console.log("Render CounterList", counters);

  return (
    <>
      {counters.map((counter, i) => (
        <Counter
          key={counter.name}
          counter={counter}
          onClick={() => onIncrement(counter.name)}
        />
      ))}
    </>
  );
}

function Counter({ counter, onClick }) {
  console.log("Render Counter", counter);
  return (
    <>
      <div>{counter.name}</div>
      <div>Value: {counter.value}</div>
      <button onClick={onClick}>Increment {counter.name}</button>
    </>
  );
}
