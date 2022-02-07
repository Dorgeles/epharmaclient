import "./App.css";
import {HomeScreen, Login} from "./components/index";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./screens/main-screen/Dashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/connexion" exact element={<Login />} />
          <Route path="/dashboard" exact element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 