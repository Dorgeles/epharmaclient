import "./App.css";
import {Navbar, Header, Options , Service, Footer, Faqs } from "./components"


function App() {
  return (
    <div className="App">
      <header className="header-bg">
        <Navbar></Navbar>
        <Header></Header>
      </header>
      <Options/>
      <Service/>
      <Footer/>
      <Faqs/>
    </div>
  );
}

export default App;
 