import "./App.css";
import Instagram from "./components/instagram/instagram";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Instagram />
      </div>
    </BrowserRouter>
  );
}

export default App;
