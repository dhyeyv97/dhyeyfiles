import './App.css';
import Main from './Main';
import Download from './Download';
import Navbar from './Navbar';
import Premium from './Premium';
import Support from './Support';
import React, { useEffect } from 'react';

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";


export function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    return () => {
      document.title = prevTitle
    }
  })
}

function App() {
  return (
 
      <HashRouter>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Main />}>
      </Route>
      <Route exact path="/premium" element={<Premium />}>
      </Route>
      <Route exact path="/support" element={<Support />}>
      </Route>
      <Route exact path="/download" element={<Download />}>
      </Route>
    </Routes>
    </HashRouter>
  );
}

export default App;


