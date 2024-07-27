import './App.css';
import Testeng from './testeng';
import BootCamp from './bootcamp/bootcamp';
import Login from './bootcamp/login-signup/login';
import Signup from './bootcamp/login-signup/signup';
import NotFound from './bootcamp/404/not-found';
import MainPortofolio from './main-portofolio';
import StudentDetail from './student-detail';
import StudentList from './student-list';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/*<Testeng />*/}
        <BrowserRouter>

<Routes>
  <Route path='/bootcamp/ada-kerja' element={
    <>
      <BootCamp nav={'home'} sect={'main'}/>
      
    </>
  }>
  </Route>
  <Route path='/bootcamp/ada-kerja' element={
    <>
      <BootCamp nav={'home'} sect={'main'}/>
      
    </>}>
  </Route>
  <Route path='/bootcamp/lowongan-kerja/:idLoker' element={
    <>
      <BootCamp nav={'loker'} sect={'detail'} />
    </>}>
  </Route>
  <Route path='/bootcamp/lowongan-kerja/' element={
    <>
      <BootCamp nav={'loker'} sect={'loker'}/>
    </>}>
  </Route>
  <Route path='/bootcamp/rekomendasi-kerja' element={
    <>
    <BootCamp nav={'loker'} sect={'rekomen'}/>
    </>}>
</Route>
  <Route path='/bootcamp/login' element={
    <Login />
  }> 
  </Route>
  <Route path='/bootcamp/signup' element={
    <Signup />
  }> 
  </Route>
  <Route path="/bootcamp/*" element={
    <>
      <NotFound />
    </>
  } />


<Route path="/main/:id" element={
    <>
      <MainPortofolio />      
    </>
  } />
  <Route path="/main/" element={
    <>
    <MainPortofolio />
    </>
  } />
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
