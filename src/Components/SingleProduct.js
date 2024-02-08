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

    <div >
      <div className='mjamaa'>
          <div className='backcategory'>
                <Link to='/products/all'>
                <i id='jambo' class="fa-solid fa-arrow-left fa-fade"></i>
                </Link>
              </div>
              <p>go back</p>
      </div>
      

    
    <div className='singlecontainer' >
      <div className='singlecontainer-wrapper' >
      <img src={product.image} alt={product.title}  />
      <div className='singlestory'>
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
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

                          {isItemAdded(product.id) && (
                            <div className='nowviewcart'>
                              <p>You can now view your cart</p>
                              <Link to='/cart'>
                              <button className=''viewyourcart>View Cart</button>
                              </Link>
                            </div>
                          )}
                          
                    </div>
      
      </div>
  
    </div>

 </div>

{/* 
<div class="row row-cols-1 row-cols-sm-2  row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div> */}


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
            <p id='relattitle'>{relatedProduct.title}</p>
            <p id='relattitle2'>Price: Ksh {relatedProduct.price}.00</p>
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
