import '../App.css'
import React from 'react'
export default function Account() {
  return(
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
       <div className='bg-white flex-start ml-10' style={{ width: '820px', height: '60%', right: '50px', border: '1px groove' }}>
    <h2 className='font-bold mt-3 text-left mx-3'>PayPal</h2>
 
<form>
  <div className="space-y-10 mx-2">

<div class="custom-border pb-12">
    <div class="custom-space-y-10">
        <fieldset>
            <div class="custom-space-y-5">
                <div class="custom-flex items-center gap-x-2">
                    <label for="push-everything" class="custom-label">Set as Primary</label>
                    <input id="push-everything" name="push-notifications" type="radio" class="custom-radio"/>
                    <label for="push-everything" class="custom-label">sales@gridgum.com</label>
                </div>
                <div class="custom-flex items-center gap-x-2 mb-10 mt-3">
                    <label for="push-email" class="custom-label">Set as Primary</label>
                    <input id="push-email" name="push-notifications" type="radio" class="custom-radio"/>
                    <label for="push-email" class="custom-label">paypal@itechnology.ge</label>
                </div>
            </div>
        </fieldset>
        <input
                  type="text"
                  name="Payment"
                  id="last-name"
                  placeholder="Input PayPal Address"
                  autoComplete="family-name"
                  className="custom-inputs" style={{ paddingLeft: '10px' }}
                />
      </div>
  </div>


  </div>

  <div class="custom-flex items-center justify-end text-white gap-x-10 mb-10">
    <button type="button" class="custom-button-1">+ Add a new PayPal Address</button>
    <button type="submit" class="custom-button-2">Save</button>
</div>
</form>
</div>

{/*Credit Card*/}
<div className='bg-white flex-start ml-10 mt-10' style={{ width: '820px', height: '90%', right: '20px', border: '1px groove' }}>
    <h2 className='font-bold mt-3 text-left mx-3'>Credit Card</h2>
    <form>
  <div className="space-y-10 mx-2">
    <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-2 space-y-5">
        <fieldset>
          <div className="mt-6 space-y-5">
            <div className="custom-flex items-center gap-x-2">
            <label htmlfor="push-email" className="custom-label">Set as Primary</label>
              <input id="push-everything" name="push-notifications" type="radio" className="custom-radio"/>
              <label htmlfor="push-everything" className="custom-label">sales@gridgum.com</label>
            </div>
            <div className="flex items-center gap-x-2">
            <label htmlfor="push-email" className="custom-label">Set as Primary</label>
              <input id="push-email" name="push-notifications" type="radio" className="custom-radio"/>
              <label htmlfor="push-email" className="custom-label">paypal@itechnology.ge</label>
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
                  className="custom-inputs " style={{ paddingLeft: '10px' }}
                />
 <div class="custom-space-y-12">

<div class="custom-border pb-12">

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

      <div class="sm:col-span-2 sm:col-start-1">
                <label for="expiration-date" class="custom-label">Expiration Date/Month</label>
                <div class="custom-mt-2">
                    <input type="date" name="expiration-date" id="expiration-date" placeholder="Expiration Date/Month" class="custom" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="year" class="custom-label">Year</label>
                <div class="custom-mt-2">
                    <input type="number" name="year" id="year" placeholder="Year" class="custom" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="cw-cvc" class="custom-label">CW/CVC</label>
                <div class="custom-mt-2">
                    <input type="number" name="cw-cvc" id="cw-cvc" placeholder="CW/CVC" class="custom" />
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
                  className="custom-inputs" style={{ paddingLeft: '10px' }}
                />
      </div>
    </div>
  </div>

  <div class="custom-flex items-center justify-end text-white gap-x-10 mb-10">
    <button type="button" class="custom-button-1">+ Add a new PayPal Address</button>
    <button type="submit" class="custom-button-2">Save</button>
</div>
</form>
        </div>
        </div>
</>
)
}