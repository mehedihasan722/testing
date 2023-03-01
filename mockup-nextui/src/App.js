import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Account/Login';
import Register from './Component/Account/Register';
import Body from './Component/Body/Body';
import Category from './Component/Chart/Category/Category';
import Monthly from './Component/Chart/Monthly/Monthly';
import Total from './Component/Chart/Total/Total';
import RequireAuth from './Component/hooks/RequireAuth';
import Test from './Component/Test';



function App() {
  return (
    <div>
      
        <Router> 
        <Body></Body>
      <Routes>
      <Route path='/total' element={
        <RequireAuth>
          <Total></Total>
        </RequireAuth>
      } />
      <Route path='/monthly' element={
        <RequireAuth>
          <Monthly></Monthly>
        </RequireAuth>
      } />
      <Route path='/category' element={
        <RequireAuth>
          <Category></Category>
        </RequireAuth>
      } />
      
      <Route path='/login' element={<Login/>} />
      <Route path='/test' element={<Test/>} />
      <Route path='/register' element={<Register/>} />
      </Routes>
  </Router> 
      </div>
  );
}

export default App;
