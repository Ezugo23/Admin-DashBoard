// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

//Main Dashboard component
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

export default function App() {

  return (

    <>

          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <MainDashboard />
            <ProfilePage />
            <AdministratorPage />
            <AllUserPage />
            <OperatorsPage />
            <SettingPage />
            <FoodSellerListPage />
            <OweAmountPage />
            <DriverSettingPage />
            <DriverListPage />
            <DriverOweAmountPage />
            <OtherHistoryPage />
            <FaqPage />
            <GeneralSettingPage />    
       
        </>

        )

}