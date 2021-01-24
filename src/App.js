import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
    </Router>
  );
}

export default App;