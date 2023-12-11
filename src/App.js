import './App.css';
import Setmenu from './component/SetMenu';
import User from './component/User';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Account from './component/Account';
import Password from './component/Password'
import Payment from './component/Payment'
function App() {
  return (
    <div className='d-lg-flex' style={{backgroundColor:'#D8D8D8'}}>
    <main className="App flex justify-between">
      <BrowserRouter>
      <Setmenu/>
      <Routes>
       <Route path='/User' element={<User/>}/>
       <Route path='/Account' element={<Account/>}/>
       <Route path='/Password' element={<Password/>}/>
       <Route path='/Payment' element={<Payment/>}/>
       </Routes>
       </BrowserRouter>
    </main>
    </div>
  );
}

export default App;
