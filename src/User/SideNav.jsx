import React, { useEffect, useState } from "react";
import "../Style/SideNav.css";
import Editimg from "../Asset/EditUsers/Bitmap.jpg";
import cp from "../Asset/EditUsers/Shape.jpg";
import aa from "../Asset/locationlogo.png";
import pm from "../Asset/EditUsers/Shape (2).jpg";
import ich from "../Asset/EditUsers/Shape (3).jpg";
import oh from "../Asset/EditUsers/Shape (4).jpg";
import { Link, useParams } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";

const SideNav = ({adminId}) => {
  const [ data, setData ] = useState([])


  const getData = async ()=>{
    try{
    const data = await axios.get(`https://swifdropp.onrender.com/api/v1/admin/`)
    // const res = await data.json()
    console.log(data.data.admins);
    setData(data.data.admins)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="topsidediv">
        <div className="topsidehead">
          <div className="d-flex gap-2 align-items-center">
            <img src={Editimg} alt="" className="topsideimg" />
            <h5>
              Amelia <br />
              Lopes
            </h5>
          </div>
          <h1>...</h1>
        </div>
        
          <Link to={`/EditUsers/${data.firstname}`} className="link">
          <p className="linkpara">Personal Information</p>
        </Link>
        
        <Link to={"/UsersChangePass"} className="link">
          <p className="linkpara">
            <img src={cp} alt="" className="imgw" />
            Change Password
          </p>
        </Link>
        <Link to="/AllusersEditAddress" className="link">
          <p className="linkpara">
            <img src={aa} alt="" className="imgw" />
            Additional Address
          </p>
        </Link>
        <Link to="/PayMethod" className="link">
          <p className="linkpara">
            <img src={pm} alt="" className="imgw" />
            Payment Method
          </p>
        </Link>
        <Link to="#" className="link">
          <p className="linkpara">
            <img src={ich} alt="" className="imgw" />
            Invite Code History (Share and Earn)
          </p>
        </Link>
        <Link to="/OrderHistory" className="link">
          <p className="linkpara ">
            <img src={oh} alt="" className="imgw" />
            Order History
          </p>
        </Link>

        <hr />

        <div className="d-flex justify-content-between pt-4">
          <p>Delivery Review</p>
          <p>74%</p>
        </div>

        <ProgressBar now={74} className="" />

        <hr />

        <div className="d-flex justify-content-between px-4 text-center">
          <div>
            <p>
              <span className="d-block text-success text">17</span>
              Success Order
            </p>
          </div>
          <div>
            <p>
              <span className="d-block text-danger text ">$1,125.38</span>
              Total Paid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;