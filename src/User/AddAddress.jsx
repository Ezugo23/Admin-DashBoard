import React from 'react'
import SideNav from './SideNav'
import '../Style/AddAddress.css'


const AddAddress = () => {
  return (
    <>
    <div className='container'>
    <h5 className="my-5">All Users / Edit Address</h5>
    <div className='d-flex gap-5 mb-5'>
        <SideNav/>
        <div>
          <div className='addform'>
          <h4 >Add / Edit Address</h4>
          <hr />
          <label htmlFor="">Postal Zip Code</label>
          <input type="text" className='input'/>
          <label htmlFor="">City</label>
          <input type="text" className='input'/>
          <label htmlFor="">State</label>
          <input type="text" className='input'/>
          <label htmlFor="">Country</label>
          <input type="text" className='input'/>
          <label htmlFor="">Address</label>
          <textarea className='w-100'></textarea>
          <div className='btndi'>
          <button className='button'>SAVE</button>
          </div>
          </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default AddAddress