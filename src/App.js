import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Courses from "./Components/Body/Courses";
import Products from "./Components/Body/Products";
import Navbar from "./Components/Header/Navbar/Navbar";

function App() {
  const [first, setfirst] = useState("home");

  useEffect(() => {
    console.log(first);
  }, [first]);

  return (
    <Router>
      <Navbar />
      <Courses />
      <Products />
      <ul>
        <li onClick={() => setfirst("home")}>Home</li>
        <li onClick={() => setfirst("about")}>About</li>
        <li onClick={() => setfirst("contact")}>Contact</li>
      </ul>
    </Router>
  );
}

export default App;
