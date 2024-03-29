import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Master from './components/layout/Master';
import AdminMaster from './components/layout/AdminMaster';
import Dashboard from './components/admin/Dashboard';
import Login from './components/auth/Login';

import AddThemes from './components/admin/themes/AddThemes';
import ManageThemes from './components/admin/themes/ManageThemes';
import AddStory from './components/admin/stories/AddStory';
import ManageStory from "./components/admin/stories/ManageStory"

import Themes from './components/readers/Themes';
import UpdateThemes from "./components/admin/themes/UpdateThemes"
import UpdateStory from "./components/admin/stories/UpdateStory"
import ReaderList from './components/admin/ReaderList';
import Feedback from './components/admin/Feedback';
import AdminLogin from './components/auth/AdminLogin';
import Register from './components/auth/Register';
import SingleStory from './components/readers/SingleStory';
import Story from './components/readers/Story';
import AddFeedback from './components/readers/AddFeedback';
import ReaderFeedback from './components/readers/ReaderFeedback';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/themes' element={<Themes/>}/>
          <Route path='/adminLogin' element={<AdminLogin/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/story' element={<Story/>}/>
          <Route path='/viewstory/:id' element={<Story/>}/>
          <Route path='/singleStory/:id' element={<SingleStory/>}/>
          <Route path='/addFeedback/:id' element={<AddFeedback/>}/>
          <Route path='/feedback' element={<ReaderFeedback/>}/>
        </Route>
        <Route path='/admin' element={<AdminMaster/>}>
          <Route path='/admin' element={<Dashboard/>}/>
          
          <Route path='/admin/viewThemes' element={<ManageThemes/>}/>
          <Route path='/admin/addThemes' element={<AddThemes/>}/>
          <Route path='/admin/updateThemes/:id' element={<UpdateThemes/>}/>
          <Route path='/admin/addStory' element={<AddStory/>}/>
          <Route path='/admin/viewStory' element={<ManageStory/>}/>
          <Route path='/admin/updateStory/:id' element={<UpdateStory/>}/>
          <Route path='/admin/viewFeedback' element={<Feedback/>}/>
          <Route path='/admin/viewReader' element={<ReaderList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
