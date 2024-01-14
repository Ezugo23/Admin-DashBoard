import React from "react";
import SideNav from "./SideNav";
import "../Style/PayMethod.css";

const PayMethod = () => {
  return (
    <div className="container">
      <h5 className="my-5">All Users / Payment Method</h5>
      <div className="d-flex gap-5 mb-5">
        <SideNav />
        <div>
          <div className="paymentdiv">
            <h4>PayPal</h4>
            <hr />
            <form>
              
               
               <label>Set as Primary</label>
                <input
                  type="radio"
                  id="sec"
                  name="select"
                  value="sec"
                  className="mx-2"
                />
                <label htmlFor="sec">sales@gridgum.com</label>
              <br />
                <label>Set as Primary</label>
                <input
                  type="radio"
                  id="pri"
                  name="select"
                  value="pri"
                  className="mx-2"
                />
                <label htmlFor="pri">sales@gridgum.com</label>
              

              <input type="text" className="input mt-3" placeholder="Input Palpay Email Address"/>

            
            </form>

           <div className="d-flex gap-2 mt-4">
           <button className="butto">
             <span>+</span> Add a New PayPal Address
              </button>
              <button className="spann">
                SAVE
              </button>
           </div>
          </div>

          <div className="paymentdiv mt-5">
            <h4>Credit Card</h4>
            <hr />
            <form>
              
               
               <label>Set as Primary</label>
                <input
                  type="radio"
                  id="sec"
                  name="select"
                  value="sec"
                  className="mx-2"
                />
                <label htmlFor="sec" className="">MasterCard****************5344</label>
              <br />
                <label>Set as Primary</label>
                <input
                  type="radio"
                  id="pri"
                  name="select"
                  value="pri"
                  className="mx-2"
                />
                <label htmlFor="pri">visa*************3215</label>
              
              <label htmlFor="" className="mt-3 w-100">Card Number</label>
              <input type="text" className="input" placeholder="Card Number"/>

          <div className="row">
           <div className="col-4">
           <label htmlFor="" className="mt-4">Expirasion Date/Month</label>
            <input type="month" className="w-100 mt-3 p-2  border border-1 border-black" />
           </div>
            <div className="col-4">
            <label htmlFor="" className="mt-4">Year</label>
            <input type="year" className="w-100 mt-3 p-2  border border-1 border-black" />
            </div>
            <div className="col-4">
            <label htmlFor="" className="mt-4">CW/CVC</label>
            <input type="text" className="w-100 mt-3 p-2  border border-1 border-black"  placeholder="3 digit number"/>
            </div>
           </div>
            
            </form>

           <div className="d-flex gap-2 mt-4">
           <button className="butto">
             <span>+</span> Add a New PayPal Address
              </button>
              <button className="spann">
                SAVE
              </button>
           </div>
          </div>

          
        </div>

        
      </div>
    </div>
  );
};

export default PayMethod;
