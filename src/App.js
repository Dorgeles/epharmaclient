import "./App.css";
import {Navbar, Header, Option, Service, Footer, Faqs } from "./components"


function App() {
  return (
    <div className="App">
      <header className="header-bg">
        <Navbar></Navbar>
        <Header></Header>
      </header>
      <Option/>
      <Service/>
      <Footer/>
      <Faqs/>
    </div>
  );
}

export default App;
 