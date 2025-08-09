import { useState } from "react";
import MainContainer from "./components/MainContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MainContainer />
  );
}

export default App;
