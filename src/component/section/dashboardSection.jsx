/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import GoogleMapComponent from '../../components/google/GoogleMapComponent';
import RightSideBar from '../../components/bar/RightSideBar';
export default function DashboardSection() {

    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            
                            <li className="breadcrumb-item active " aria-current="page"><Link to="/" className="text-decoration-none" style={{ color: "#F8B602" }}>Dashboard</Link></li>
                        </ol>
                    </nav>
                </div>
                <div>

                    <h1>Dashboard Section Page</h1>
                    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
    }}>
      <GoogleMapComponent />
      <RightSideBar />
    </div>
                </div>
            </div>

        </>

    )

}