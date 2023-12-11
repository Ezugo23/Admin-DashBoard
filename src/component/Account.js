import Form from 'react-bootstrap/Form';
import React from 'react'
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}
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
