import Form from 'react-bootstrap/Form';
import React from 'react'
import '../App.css'
export default function Password() {
  return(
    <>
      <div className='bg-white my-20 mx-300'style={{ width: '900px', height: '87%', right: '20', border: '1px groove'}}>
        <h3 className='font-bold mt-3 text-left mx-3'>Change Password</h3>
      
     <div className='d-lg-flex mx-10'>

<Form class='custom-form mr-20 mt-10'>
    <div class='custom-row align-items-center'>
        <div class='custom-form-group mb-3' id='formBasicEmail'>
            <label for='old-password'>Old Password</label>
            <input type='password' name='old-password' id='old-password' placeholder='Name' autoComplete='family-name' class='custom-input' />
        </div>
        <div class='custom-form-group mb-3' id='formBasicEmail'>
            <label for='new-password'>New Password</label>
            <input type='password' name='new-password' id='new-password' placeholder='Phone Number' autoComplete='family-name' class='custom-input' />
        </div>
        <div class='custom-form-group mb-3' id='formBasicEmail'>
            <label for='confirm-password'>Confirm Password</label>
            <input type='password' name='confirm-password' id='confirm-password' placeholder='Email Address' autoComplete='family-name' class='custom-input' />
        </div>
        <div class='custom-col-lg-2 mx-30'>
            <button type='submit' class='custom-button'>
                Change
            </button>
        </div>
    </div>
</Form>
     </div>
     </div>
    </>
  )
}