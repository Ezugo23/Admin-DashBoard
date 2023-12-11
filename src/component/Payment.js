
import React from 'react'
export default function Account() {
  return(
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
       <div className='bg-white my-20 mx-50' style={{ width: '900px', height: '60%', right: '50px', border: '1px groove' }}>
    <h2 className='font-bold mt-3 text-left mx-3'>PayPal</h2>
 
<form>
  <div className="space-y-10 mx-2">
    <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-4 space-y-10">
        <fieldset>
          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-x-2">
            <label htmlfor="push-email" className="block text-bg font-large leading-6 text-gray-900">Set as Primary</label>
              <input id="push-everything" name="push-notifications" type="radio" className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"/>
              <label htmlfor="push-everything" className="block text-bg font-large leading-6 text-gray-900">sales@gridgum.com</label>
            </div>
            <div className="flex items-center gap-x-2 mb-10">
            <label htmlfor="push-email" className="block text-bg font-large leading-6 text-gray-900">Set as Primary</label>
              <input id="push-email" name="push-notifications" type="radio" className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"/>
              <label htmlfor="push-email" className="block text-bg font-large leading-6 text-gray-900">paypal@itechnology.ge</label>
            </div>
          </div>
        </fieldset>
        <input
                  type="text"
                  name="Payment"
                  id="last-name"
                  placeholder="Input PayPal Address"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-10" style={{ paddingLeft: '10px' }}
                />
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end text-white-500 gap-x-10 mb-10">
    <button type="button" className="text-bg font-bold text-white bg-blue-700 py-3 px-8 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">+ Add a new PayPal Address</button>
    <button type="submit" className="rounded-md bg-cyan-600 px-10 py-3 text-bg font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 mx-3">Save</button>
  </div>
</form>
</div>

{/*Credit Card*/}
<div className='bg-white my-1 mx-300' style={{ width: '900px', height: '90%', right: '20px', border: '1px groove' }}>
    <h2 className='font-bold mt-3 text-left mx-3'>Credit Card</h2>
    <form>
  <div className="space-y-10 mx-2">
    <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-2 space-y-5">
        <fieldset>
          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-x-2">
            <label htmlfor="push-email" className="block text-bg font-large leading-6 text-gray-900">Set as Primary</label>
              <input id="push-everything" name="push-notifications" type="radio" className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"/>
              <label htmlfor="push-everything" className="block text-bg font-large leading-6 text-gray-900">sales@gridgum.com</label>
            </div>
            <div className="flex items-center gap-x-2">
            <label htmlfor="push-email" className="block text-bg font-large leading-6 text-gray-900">Set as Primary</label>
              <input id="push-email" name="push-notifications" type="radio" className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"/>
              <label htmlfor="push-email" className="block text-bg font-large leading-6 text-gray-900">paypal@itechnology.ge</label>
            </div>
          </div>
        </fieldset>
        <label for="city" class="block text-bg font-large leading-6 text-gray-900">Card Name</label>
        <input
                  type="text"
                  name="Payment"
                  id="last-name"
                  placeholder="Input PayPal Address"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " style={{ paddingLeft: '10px' }}
                />
  <div class="space-y-12">

    <div class="border-b border-gray-900/10 pb-12">

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Expiration Date/Month</label>
          <div class="mt-2">
            <input type="date" name="city" placeholder='Expiration Date/Month' id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Year</label>
          <div class="mt-2">
            <input type="number" name="region" placeholder='Year' id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">CW/CVC</label>
          <div class="mt-2">
            <input type="number" name="postal-code" placeholder='CW/CVC' id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '10px' }}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <label for="city" class="block text-bg font-large leading-6 text-gray-900">Card Holder Name</label>
  <input
                  type="text"
                  name="Payment"
                  id="last-name"
                  placeholder="Input PayPal Address"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " style={{ paddingLeft: '10px' }}
                />
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end text-white-500 gap-x-10 mb-10">
    <button type="button" className="text-bg font-bold text-white bg-blue-700 py-3 px-8 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">+ Add a new Credit Card</button>
    <button type="submit" className="rounded-md bg-cyan-600 px-10 py-3 text-bg font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 mx-3">Save</button>
  </div>
</form>
        </div>
        </div>
</>
)
}