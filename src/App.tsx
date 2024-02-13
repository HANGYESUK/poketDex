import React from 'react';
import Header from "./common/Header";
import {BrowserRouter} from "react-router-dom";
import PageNavigator from "./PageNavigator";

function App() {
  return <BrowserRouter>
      <Header/>
      <PageNavigator/>
    </BrowserRouter>;

}

export default App;
