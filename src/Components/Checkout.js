import React from 'react'
import { useCart } from 'react-use-cart';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Checkout() {
    const navigate = useNavigate()
    const { emptyCart} = useCart()
    const [loading, setLoading] = useState(false)


    const {
        totalUniqueItems,
        items,
      } = useCart();

      const delivery = 200

      const totalPrice = items.reduce((total, item) =>total + item.price * item.quantity,0)
const subtotal = items.reduce((total, item) => total + item.price + delivery,0)

//state to hold form data
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    city: '',
    street: '',
    paymentMethod: 'Cash on Delivery',   
})

//handler to update form as user types
const handleInputChange =(e) =>{
    const {name,value} = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value}))
}



 // Handler to send receipt email
const sendOrderConfirmationEmail = () => {
  setLoading(true)

  setTimeout(() => {
    setLoading(false)

    Swal.fire({ // Use Swal.fire instead of alert
      title: 'Success!',
      text: 'Delivery confirmed',
      text1: 'You will get a confirmation call shortly',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(()=> {
      navigate('/products/all')
      emptyCart(); // CLEAR CART AFTER EMAIL HAS BEEN SENT
    })
   }, 3000)

    const templateParams = {
        to_email: 'samuel.kuria01@student.moringaschool.com', // Replace with the recipient's email address
        subject: 'Order Confirmation',
        customerName: formData.firstName + ' ' + formData.lastName,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        city: formData.city,
        street: formData.street,
        paymentMethod: formData.paymentMethod,
        orderItems: items.map(item => ({
            title: item.title,
            quantity: item.quantity,
            price: item.price.toFixed(2),
        })),
        deliveryFee: delivery.toFixed(2),
        totalPrice: totalPrice.toFixed(2),
        // subtotal: subtotal.toFixed(2),

    };

    // const templateParams = {
    //     to_email: 'salim221@gmail.com',
    //     subject: 'Order Confirmation',
    //     customerName: 'Sammy Kururu',  // Replace with actual customer name
    // };
    console.log('Order Items:', templateParams.orderItems);  // Log orderItems here
    console.log('Data before sending:', templateParams); // Log the data before sending

    const { message_html: htmlTemplate, ...params } = templateParams;

    emailjs
    .send('service_fx02hl6', 'template_iwfc3gm', params, 'qEyYqEOEw8-vCzxec')
    .then((response) => {
        console.log('Order confirmation email sent successfully!', response.text);
        // Additional logic if needed
    })
    .catch((error) => {
        console.error('Error sending order confirmation email:', error);
        // Additional error handling if needed
    });
}

const handleCancelOrder = () => {
    // Handle cancel order logic if needed
    // For example, you can simply clear the cart and reset the form
    emptyCart();
    setFormData({
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      city: '',
      street: '',
      paymentMethod: 'Cash on Delivery',
    });
    setLoading(true)

  setTimeout(() => {
    setLoading(false)

    Swal.fire({ // Use Swal.fire instead of alert
      // title: 'Success!',
      text: 'Delivery Cancelled',
      icon: 'warning',
      confirmButtonText: 'EXIT'
    }).then(()=> {
      navigate('/products/all')
      emptyCart(); // CLEAR CART AFTER EMAIL HAS BEEN SENT
    })
   }, 5000)

  };

      
  return (

    <div>
        <div className='checkoutheader'>
            <Link to='/cart'>
            <i class="fa-solid fa-arrow-left"></i>
            <p>Back to cart</p>
            </Link>
         </div>

         <div className='checkdesc'>
            <h3>Checkout</h3>
            <p>A checkout is a counter where you are paying for things you are buying</p>
         </div>
       
    <div className='bigmanhuncho'>
                {/* <h3>Shipping Address</h3> */}

      <div className='checkoutontainer'>
        <div className='mkonamchezo'>
            <h3>Billing Information</h3>
            <div className='form1'>
            <input 
            type="text"
            name="firstName"
            className="input1"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            />
            <input
             type="text"
             name="lastName"
             className="input1"
             placeholder="Last Name"
             value={formData.lastName}
             onChange={handleInputChange}
            />
            <input
             type="text"
             name="emailAddress"
             className="input1"
             placeholder="your email"
             value={formData.emailAddress}
             onChange={handleInputChange}
               />
            <input 
             type="number"
             name="phoneNumber"
             className="input1"
             placeholder="Phone number"
             value={formData.phoneNumber}
             onChange={handleInputChange}
              />
            </div>

            <div>
            <h3>Set your Location</h3>
            <div className='form1'>
            <input 
            type="text"
             name="city" 
             class="input1"
             placeholder="Place your City/town"
             value={formData.city}
             onChange={handleInputChange}/>
            <input type="text" 
            name="street"
             class="input1"
              placeholder="your Street"
              value={formData.street}
              onChange={handleInputChange}
              />
            </div>
        </div>

        <div>
            <h3>Payment method</h3>
         <div className='orderwrapper'>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"   onChange={handleInputChange} checked/>
          <label for="vehicle1"> Cash on delivery</label>
          
          <input className='online2' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" disabled/>
          <label className='online' for="vehicle1" > Online Payment</label>
         </div>
        </div>
        </div>
        </div>

       


                {/* <div>


                <div className='yoshipment'>
                <h5>Shopping cart </h5>
                <div>
                ({totalUniqueItems}) items
                </div>
                </div>

                <div className='cartwrappper'>

                {items.map((item) =>(
                    <div className='cartwrappermambo' key={item.id}>
                <div className='cartnip'>
                <div>
                <img className='cartenimage' src={item.image} alt='mambosafi'></img>
                </div>


                <div className='cartbody2'>
                <p className='pheader' id='pheader'> {item.title}</p>
                <div>
                <td>{parseFloat(item.quantity * item.price).toFixed(2)}</td>
                </div>
                </div>
                    </div>
                </div>
                ))}
                <span class="titlle">Total Price: <span className='price2'>Ksh  {totalPrice.toFixed(2)}</span> </span>
                </div>
                </div> 
                 */}
                
<div  className='jamaica'>

<div>


<div className='yoshipment'>
<h5>Shopping cart </h5>
<div>
({totalUniqueItems}) items
</div>
</div>

<div className='cartwrappper'>

{items.map((item) =>(
    <div className='cartwrappermambo' key={item.id}>
<div className='cartnip'>
{/* <div>
<img className='cartenimage' src={item.image} alt='mambosafi'></img>
</div> */}


<div className='cartbody2'>
<p className='pheader' id='pheader'> {item.title}</p>
<div>
<td>{parseFloat(item.quantity * item.price).toFixed(2)}</td>
</div>
</div>
    </div>
</div>
))}
<span class="titlle">Total Price: <span className='price2'>Ksh  {totalPrice.toFixed(2)}</span> </span>
</div>
</div> 



    <div className='ordersummary'>
      <h3>Order Summary</h3>
      <div className='subtotal'>
        <table>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>

          <tr>
            <td>Total:</td>
            <td><span className='price2'>Ksh  {totalPrice.toFixed(2)}</span> </td>
          </tr>
          <tr>
            <td>Deliver fee:</td>
            <td>Ksh 200 </td>
          </tr>
          <tr>
            <td>Taxes:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>SubTotal:</td>
            <td><span className='price2'>Ksh  {subtotal.toFixed(2)}</span> </td>
          </tr>

          </table>
         
      

      </div>
    
    </div> 
    </div>
    
                </div>


                <div className='confirmcancel'>
                  <div>
                    {loading && (
                      <div className='overlay'></div>
                    )}
                   <span className={`loader ${loading ? 'show' : ''}`} />
                    <div className='confirmshit'>
                    <button className='confirm' onClick={sendOrderConfirmationEmail}>Confirm delivery</button>
                    </div>
                    </div>


                    <div className='cancelshit'>
                    <button className='cancel' onClick={handleCancelOrder}>Cancel Order</button>
                    </div>
                </div>
    </div>
  )
}

export default Checkout


