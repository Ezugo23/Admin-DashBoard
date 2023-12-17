import Form from 'react-bootstrap/Form';
import React from 'react'
import '../App.css'
export default function Account() {
  return(
    <>
      <div className='bg-white my-20 mx-300'style={{ width: '900px', height: '87%', right: '20', border: '1px groove'}}>
        <h3 className='font-bold mt-3 text-left mx-3'>Company Information</h3>
      
     <div className='d-lg-flex mx-10'>
     <Form className='mr-20 mt-10'>
      <div className='row align-items-center'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Name"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Phone Number"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Email Address"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <textarea
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Address"
                  autoComplete="family-name"
                  rows="3" 
                  className="input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>

  
   <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="City"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="mb-3 ml-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="State"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Postal Zip COde</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Postal Zip Code"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <div className='mx-30 col-lg-2'>
      <button
          type="submit"
          className="block mx-auto m-2 mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-20 rounded"
        >
           Save
        </button>
        </div>

   </div>
      
    </Form>
     </div>
     </div>
    </>
  )
}
