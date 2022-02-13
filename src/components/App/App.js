import React from "react";
import {Navigate, Routes, Route} from "react-router-dom";

import MainSlidePage from '../pages/MainSlidePage';
import TheDifferencePage from '../pages/TheDifferencePage';
import ExploreModulesPage from '../pages/ExploreModulesPage';
import LetUsHelpYouPage from '../pages/LetUsHelpYouPage';
import HowAreYouShowingUpPage from '../pages/HowAreYouShowingUpPage';
import ShedulePage from '../pages/ShedulePage';


import './App.css';

function App() {

  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<MainSlidePage/>}/>
            <Route path="/thedifference" element={<TheDifferencePage/>}/>
            <Route path="/explorethemodules" element={<ExploreModulesPage/>}/>
            <Route path='/letushelpyou' element={<LetUsHelpYouPage/>}/>
            <Route path="/howareyoushowingup" element={<HowAreYouShowingUpPage/>}/>
            <Route path="/shedule" element={<ShedulePage/>}/>
            <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
            
      </div>
  );
}

export default App;
