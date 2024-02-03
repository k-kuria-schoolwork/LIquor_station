// SingleProduct.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

function SingleProduct({ data }) {
  const { addItem} = useCart()
  const  [addedItems, setAddedItems ]= useState([])
  const { productId } = useParams();
  const product = data.cardData.find(item => item.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

    // Function to check if an item has been added
    const isItemAdded = (itemId) => {
      return addedItems.includes(itemId);
    };
    
    const relatedProducts = data.cardData
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4)


    // Function to add an item to the addedItems list
    const addItemToAddedItems = (itemId) => {
      setAddedItems((prevAddedItems) => [...prevAddedItems, itemId]);
    };
 
  

  return (

    <div>

<div className='homepage'>
            <div className='homepage-wrapper'>
                <div className='callme'>
                  <div>
                    <i class="fa-solid fa-phone-volume fa-shake"></i>
                 </div>
                <div className='contactus'>
                    <h5>Call us: 0768696986</h5>
                    <p>liquor@gmail.com</p>
                </div>
                </div>
                <div className='logoheader'>
                    <h2>Luxury Liquors</h2>
                    <p>Best liquor only</p>
                </div>
                <div className='navigations'>
                    <ul>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Shop</Link>
                        </li>
                        <li>
                            <Link><i class="fa-solid fa-cart-shopping"></i></Link>
                        </li>
                    </ul>
                 </div>

            </div>

            
        </div>

    
    <div className='singlecontainer' >
      <div className='singlecontainer-wrapper' >
      <img src={product.image} alt={product.title}  />
      <div className='singlestory'>
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>Price:Ksh {product.price}.00</p>
      <p>{product.description}</p>
      {product.stock.available ? (
        <p className='available'>In Stock  available
         <i class="fa-regular fa-circle-check"></i>
         </p>
      ) : (
        <p className='outofstock'>Out of Stock</p>
      )}

<div className='addcart'>
                  <button
                            onClick={() => {
                              if (!isItemAdded(product.id)) {
                                addItem(product);
                                addItemToAddedItems(product.id);
                              }
                            }}
                            className={`cssbuttons-io-button ${isItemAdded(product.id) ? 'ordered' : ''}`}
                            disabled={isItemAdded(product.id)}
                          >
                            <span>{isItemAdded(product.id) ? 'ORDERED' : 'ADD TO CART  ---->'}</span>
                          </button>
                          
                    </div>
      
      </div>
  
    </div>

 </div>


{/*Related product section */}
<div className='relatedcontainers'>
  <h3>Related Products</h3>
  <div className='relatedprodcontiner'>
    {
      relatedProducts.map((relatedProduct) => (
        <div className='relatedprod-wrapper' key={relatedProduct.id}>
           <Link to={`/products/${relatedProduct.category}/${relatedProduct.id}`}>
              <img src={relatedProduct.image} alt={relatedProduct.title} />
            </Link>
            <div className='relatedbody'>
            <p>{relatedProduct.title}</p>
            <p>Price: Ksh {relatedProduct.price}.00</p>
            </div>
       </div>
      ))
    }
  </div>
</div>




    </div>
  );
}

export default SingleProduct;
