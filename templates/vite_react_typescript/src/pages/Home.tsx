import { useState } from "react";
import { Button } from "../components/ui/button";
function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div className="flex items-center gap-10">
        <Button
          onClick={() => {
            setCounter((x) => x - 1);
          }}
        >
          -
        </Button>
        <p className="text-2xl">Count: {counter}</p>
        <Button
          onClick={() => {
            setCounter((x) => x + 1);
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default Home;
