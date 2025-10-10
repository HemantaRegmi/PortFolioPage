import Home from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import type { SelectedPage } from "./shared/types";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1>Hello World I need to figure out how to get my routes to work</h1>
    </>
  );
}

export default App;
