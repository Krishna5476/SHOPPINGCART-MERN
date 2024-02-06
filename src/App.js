import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import home from "./components/home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/cart" exact Component={Cart}></Route>
          <Route path="/not-found" Component={NotFound}></Route>
          <Route path="/" exact Component={home}></Route>
          {/* if wrong url is entered than the NAVIGATE is used to direct the page to the not found */}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
