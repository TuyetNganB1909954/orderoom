import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Slider from "./component/slider/Slider";
import Main from "./component/main/page"

function App() {


  return (
    <DataProvider>
      <Router>
        <div className="App">
          <div className="row">
            <div className="col-12 bg-dark"><Header/></div>
              <div className="d-flex">
                <div className=" col-2 "><Slider/></div>
                <div className="col-10"> <Main/></div>
              </div>
              <div className="col-12 bg-dark"><Footer/></div>
          </div>
        
        
       
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
