import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Blog />
        {/*<Home />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
