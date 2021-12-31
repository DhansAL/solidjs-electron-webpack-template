import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  setInterval(() => setCount(count() + 1), 1000);

  return <div>Count: {count()}</div>;
}

export default App;
