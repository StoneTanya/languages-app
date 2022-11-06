import * as React from 'react';
import './Style.scss';
import Header from "../common/header/Header";
import Main from '../common/main/Main';
import Footer from '../common/footer/Footer';
import Home from "../common/home/home";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Main/>
      <Footer/>

    </div>
  );
}

export default App;
