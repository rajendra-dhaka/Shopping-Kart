//feature 1
import React from "react";
import data from "./data.json";
import Products from "./components/Products";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">Shopping Kart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Sidebar</div>
          </div>
        </main>
        <footer>&copy; Shopping Kart. All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
