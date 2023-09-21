// import { useState } from "react";
import "./App.css";
import RouterComponent from "./routes/Routes";
import { Toaster } from "@/components/ui/toaster";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main>
      <Toaster />
      <RouterComponent />
    </main>
  );
}

export default App;
