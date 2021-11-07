import './App.css';
import * as React from 'react';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {MainSection} from "./components/MainSection/MainSection";

const App = () => {

  return (
      <>
        <div className="content">
          <Sidebar />
          <MainSection />
        </div>
      </>

  )
}

export default App;
