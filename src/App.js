import './App.css';
import Setmenu from './Profile/SetMenu';
import User from './Profile/userOld';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Test from './Profile/Test';
import Password from './Profile/Password'
import Payment from './Profile/Payment'
import Account from './Profile/Account'
import Settings from './Food/Settings'
import Types from './Food/Types'
import Edit from './Food/Edit'
import Dashboard from './pages/dashboard/Dashboard';
import Bar from './components/navbar/Bar';
import Navbar from "./User/Navbar";
import AllUsers from "./User/AllUsers";
import EditUsers from "./User/EditUsers";
import SideNav from "./User/SideNav";
import UsersChangePass from "./User/UsersChangePass";
import AllUsersEditAddress from "./User/AllUsersEditAddress";
import AddAddress from "./User/AddAddress";
import PayMethod from "./User/PayMethod";
import OrderHistory from "./User/OrderHistory";
import Suspend from "./User/Suspend";

import MainDashboard from "./pages-nav/dashboard";

// import Profile dashboard component
import ProfilePage from "./pages-nav/profile";

// import Administrator dashboard component
import AdministratorPage from "./pages-nav/administrators";
import AllUserPage from "./pages-nav/all-users";
import OperatorsPage from "./pages-nav/operators";

//import Food Dashboard Component
import SettingPage from "./pages-nav/setting";
import FoodSellerListPage from "./pages-nav/food-seller-list";
import OweAmountPage from "./pages-nav/owe-amount";

//import Driver Dashboard component
import DriverSettingPage from "./pages-nav/driver-setting";
import DriverListPage from "./pages-nav/driver-list";
import DriverOweAmountPage from "./pages-nav/driverOweAmount";

import OtherHistoryPage from "./pages-nav/order-history";
import FaqPage from "./pages-nav/faq";
import GeneralSettingPage from "./pages-nav/general-setting";

function App() {

  const shouldRenderNavbar = () => {
    const currentPath = window.location.pathname;
    return currentPath === '/Dashboard';
  };
  const shouldRenderNav = () => {
    const currentPath = window.location.pathname;
    return currentPath === '/AllUsers';
  };

  return (
  <div className="" >
    
      <BrowserRouter>
      {shouldRenderNavbar() && <Bar />}
      {shouldRenderNav() &&<div className="bg"> <Navbar /></div>}

      <Routes>

     

          <Route 
            exact
            path="/administrators"
            element={<AdministratorPage />}
          />
          <Route 
            exact
            path="/all-user"
            element={<AllUserPage />}
          />
          <Route 
            exact
            path="/operators"
            element={<OperatorsPage />}
          />

          <Route 
            exact
            path="/food-setting"
            element={<SettingPage />}
          />
          <Route 
            exact
            path="/food-seller-list"
            element={<FoodSellerListPage />}
          />
          <Route 
            exact
            path="/owe-amount"
            element={<OweAmountPage />}
          />    

          <Route 
            exact
            path="/driver-setting"
            element={<DriverSettingPage />}
          />
          <Route 
            exact
            path="/driver-list"
            element={<DriverListPage />}
          />
          <Route 
            exact
            path="/driver-owe-amount"
            element={<DriverOweAmountPage />}
          />  

          <Route 
            exact
            path="/other-history"
            element={<OtherHistoryPage />}
          />
          <Route 
            exact
            path="/faq"
            element={<FaqPage />}
          />
          <Route 
            exact
            path="/general-setting"
            element={<GeneralSettingPage />}
          />    


        {/**Profile */}
        
        <Route
            path="profile/*"
            element={<ProfilePage />}
          >
    </Route>

           <Route path="/User" exact element={<User />} />
                  <Route path="/Test" element={<Test />} />
                  <Route path="/Password" element={<Password />} />
                  <Route path="/Payment" element={<Payment />} />

  
         {/**Food */}
          <Route path="Settings" element={<div className='d-flex mt-2'><Settings /></div>} >
          <Route path="Types" element={<Types />} />
          <Route path="Edit" element={<Edit />} />
          </Route>
             {/**Dashboard */}
             <Route
            exact
            path="/"
            element={<MainDashboard />}
          ></Route>
          <Route path="" element={  <Dashboard />}/>
          
           {/**User */}
           <Route
            path="AllUsers"
            element={
              <div className="bg">
                <AllUsers />
                </div>
            }
          />
                <Route path="Suspend" element={<div className="bg"><Suspend /></div>} />
                  <Route element={<div className="bg"><SideNav /></div>}/>
                    <Route path="EditUsers/:adminId" element={<div className="bg"><EditUsers /></div>} />
                    <Route path="personalInfo" element={<div className="bg"><EditUsers /></div>} />
                    <Route path="UsersChangePass" element={<div className="bg"><UsersChangePass /></div>} />
                    <Route path="AllusersEditAddress" element={<div className="bg"><AllUsersEditAddress /></div>} />
                    <Route path="AddAddress" element={<div className="bg"><AddAddress /></div>} />
                    <Route path="PayMethod" element={<div className="bg"><PayMethod /></div>} />
                    <Route path="OrderHistory" element={<div className="bg"><OrderHistory /></div>} />
                  

           
                  

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
