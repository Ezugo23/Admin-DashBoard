import { Link } from "react-router-dom";

import Setmenu from '../../Profile/SetMenu'
import Account from '../../Profile/Account'
import Password from '../../Profile/Password'
import Test from '../../Profile/Test';
import Payment from '../../Profile/Payment'
import User from '../../Profile/userOld';
import {Routes, Route,  Outlet} from 'react-router-dom';
export default function ProfileSection() {
         
    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/prfile" className="text-decoration-none" style={{ color: "#F8B602" }}>Profile</Link></li>
                        </ol>
                    </nav>
                </div>
                <div>
                  
                <div className='flex flex-start'>
                            {/**/}
                            <Setmenu/>
                            <Account/>
                    
                            
                          
                         </div>

                </div>
            </div>
        </>

    )

}