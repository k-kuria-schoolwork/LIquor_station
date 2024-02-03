import React from 'react'

function Checkout() {
  return (
    <div>
      <div>
        <h3>Shipping Address</h3>
        <div>
            <h3>Billing Information</h3>
            <form>
            <input type="text" name="text" class="input1" placeholder="First Name"/>
            <input type="text" name="text" class="input1" placeholder="Last name"/>
            <input type="text" name="text" class="input1" placeholder="email address"/>
            <input type="number" name="text" class="input1" placeholder="Type here..."/>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
