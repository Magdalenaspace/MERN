import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
                
function App() {
  return (
    <div className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    }}>
        <Header />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1
      }}>

        <Navigation />

        <div style={{ flex: 1 }}>

        <Main>
            <SubContents/>
            <SubContents/>
            <SubContents/>
            <Advertisement />
        </Main>

        </div>
      </div>
    </div>
  );
}

export default App;