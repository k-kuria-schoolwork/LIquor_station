import React from 'react';
import { useCart } from 'react-use-cart';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AgeConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Are you 18 years old or above?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
}

function Cart() {
  const navigate = useNavigate()
  const [isModalOpen, setModalOpen] = useState(false)

  const handleCheckoutClick = () => {
    // Display the age confirmation modal
    setModalOpen(true);
  };

  const handleConfirm = () => {
    // Close the modal and navigate to the checkout page
    setModalOpen(false);
    navigate('/checkout');
  };

  const handleClose = () => {
    // Close the modal without navigating
    setModalOpen(false);
  };

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  


  if (isEmpty) return <p >
  <h3 className='emptycart'>
  Your cart is empty
   </h3> 
   <Link to='/products/all'>
   <button className='cartbtn4'>go back</button>
   </Link>
   </p>;
  //Calculate the total quantit of goods in the cart
  const totalPrice = items.reduce((total, item) =>total + item.price * item.quantity,0)



  return (
    <>
     
    <div className='mamboyacart'>

      


   
        <div className='backcategory3'>
          <Link to='/categories'>
          <i class="fa-solid fa-arrow-left fa-fade"></i>
          </Link>
          <div className='sexybackgroundyy'>
          <h2 className='liqstation3'> Shopping Cart</h2>
          <h2 className='liqstation4'> Shopping Cart</h2>
          </div>
        </div>
       
<div className='joerogan'>


<div>


        {/* <div className='findme'>
            <h2>Delivery Information</h2>

      <div className='findmewrapper'>
      <input placeholder='your location' name='text' type='text'></input>
      <i class="fa-solid fa-truck"></i>
      </div>
    </div> */}



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
        <p className='pppheader'> {item.title}</p>
          <div>
          <td>{parseFloat(item.quantity * item.price).toFixed(2)}</td>
          </div>
          </div>


        <div className='quantoo'>
          <p className='pheader'>Quantity</p> 
          <button id='cartbtn3' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
              <i id='addbtn' className="fa-solid fa-minus"></i>
            </button>
            {item.quantity}
            <button id='cartbtn3' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
              <i id='addbtn' className="fa-solid fa-plus"></i>
            </button>
        </div> 

        <div className='mydustbin'>
            <button  id="dustbin" onClick={() => removeItem(item.id)}>
                        <i  className="fa-sharp fa-solid fa-trash"></i>
              </button>
        </div>
        
            </div>
        </div>
))}
<span class="titlle">Total Price:<span className='price2'>Ksh {totalPrice.toFixed(2)}</span> </span>

<div>

<p className='proceed'>Proceed to</p>
    <div className='checkout'>
      <div className='checkout1'>
      <Link to='/products/all'>
        <button>Shop more</button>
        </Link>
      </div>
      <div className='checkout2'>
      <Link to='/checkout'>
        <button onClick={handleCheckoutClick}>checkout</button>
        </Link>

        <AgeConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
      </div>
      
      </div>
      </div>

</div>
</div>


{/* 
    <div className='ordersummary'>
      <h3>Order Summary</h3>
      <div className='orderwrapper'>
          <div className='paymentmethod'>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> Cash on delivery</label>
          </div>
          <input className='online2' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" disabled/>
          <label className='online' for="vehicle1"> Online Payment</label>
      </div>

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
            <td><span className='price2'>Ksh  {totalPrice.toFixed(2)}</span> </td>
          </tr>


         
      

      </div>
      <div className='checkout'>
        <Link to='/checkout'>
        <button>continue to checkout</button>
        </Link>
      </div>
    </div> */}


    
    </div>
</div>
    </>
  );
}

export default Cart