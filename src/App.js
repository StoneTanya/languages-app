import * as React from 'react';
import './Style.css';
import Header from "./components/common/header/Header";
import Main from './components/common/main/Main';
import Footer from './components/common/footer/Footer';



function App() {
  return (
    <div className="App">

      <Header/>
      <Main/>
      <Footer/>

    </div>
  );
}

export default App;
