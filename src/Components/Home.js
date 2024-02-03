import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
function Home() {
    const { totalItems } = useCart()

  return (
    <div>

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
                        <div className='mycart'>
                            <Link to='/cart'> 
                            <i class="fa-solid fa-cart-shopping">
                            <h6>{totalItems}</h6> 
                                </i>
                            </Link> 
                        </div>        
                        <p className='vcart'>view cart</p>
      
                      </li>
                    </ul>
                 </div>

            </div>

            <div className='homeimgone'>
                    <img src='../Images/liquorbackground.png' alt='mamabo safi'></img>
            </div>
        </div>

        <div className='allcategoriescontainer'>
            <div className='categname'>
                <h2>Our Categories</h2>
            </div>
            <div className='displaycategories'>
            <div className='displaymycateg'>

                <div className='displayvector'>
                    <Link>
                    <img src='../Images/whiskyvector.png' alt='whisky'></img>
                   <p>Whisky</p> 
                    </Link> 
                </div>
               
                <div className='displayvector'>
                    <Link>
                    <img src='../Images/gin.png' alt='whisky'></img>
                    <p>Gin</p> 
                    </Link> 
                </div>

                <div className='displayvector'>
                    <Link>
                    <img src='https://previews.123rf.com/images/chekat/chekat1603/chekat160300117/53773330-bottle-and-a-glass-of-cognac-vector-illustration-on-white-background.jpg' alt='whisky'></img>
                    <p>Brandy</p> 
                    </Link> 
                </div>

                 <div className='displayvector'>
                    <Link>
                    <img src='../Images/winepress.png' alt='whisky'></img>
                    <p>Wine</p> 
                    </Link> 
                </div>

            </div>
           

            <div className='viewcate'>
                <button>
                <Link to='/categories'>
                    View All 
                </Link>
                
                 <i class="fa-solid fa-angles-right fa-beat"></i>
               
                </button>
            </div>
            </div>
        </div>


      </div>




      <div className='newarrivalcontainer'>
            <div className='newarrival'>
            <h2>New Arrivals</h2>
            <p>View more</p>
            </div>

            <div className='displaycardcontainer'>
                <div className='cardcontainer'>
                    <div className='cardcol'>
                        <img src='https://wikiliq.org/wp-content/uploads/2021/01/ci-jameson-gift-tin-8d38b220d535dd82.jpeg' alt='carrd1'></img>
                        <div className='cardbody'>
                            <h5>Card Title</h5>
                            <p>Price</p>
                        </div>
                    </div>
                </div>

                <div className='cardcontainer'>
                    <div className='cardcol'>
                        <img src='https://i.pinimg.com/736x/1d/94/db/1d94dbe87a68f1f43503dbfd97b5a53f.jpg' alt='carrd1'></img>
                        <div className='cardbody'>
                            <h5>Card Title</h5>
                            <p>Price</p>
                        </div>
                    </div>
                </div>

                <div className='cardcontainer'>
                    <div className='cardcol'>
                        <img src='https://shop.bombaysapphire.com/cdn/shop/products/Engraved-Bombay-HappyBirthdaySam_2048x2048.jpg?v=1638187382' alt='carrd1'></img>
                        <div className='cardbody'>
                            <h5>Card Title</h5>
                            <p>Price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='homeimgtwo'>
                <img src='../Images/jackdanielbackground.jpg' alt='weekend'></img>
                <div className='wishyou'>
                    <h2>Get all your favorite drinks at the </h2>
                    <h2>tap of a button</h2>
                    <button className='aluta'>
                        <Link to='/categories'>View Category</Link>
                    </button>
                    <p>Masaa ni ya <span>aluta</span></p>
                </div>
            </div>
        </div>


        <div className='newarrivalcontainer'>
            <div className='newarrival'>
            <h2>Best Selling </h2>
            <p>View more</p>
            </div>

            <div className='displaycardcontainer'>
                <div className='cardcontainer'>
                    <div className='cardcol'>
                        <img src='../Images/jackdaniel.png' alt='carrd1'></img>
                        <div className='cardbody'>
                            <h5>Card Title</h5>
                            <p>Price</p>
                            <p>Price</p>
                        </div>
                    </div>
                </div>

                <div className='cardcontainer'>
                    <div className='cardcol'>
                        <img src='../Images/Hennessy.png' alt='carrd1'></img>
                        <div className='cardbody'>
                            <h5>Card Title</h5>
                            <p>Price</p>
                            <p>Price</p>
                        </div>
                    </div>
                </div>

                <div className='cardcontainer'>
                    <div className='cardcol'>
                        <img src='../Images/caprice.png' alt='carrd1'></img>
                        <div className='cardbody'>
                            <h5>Card Title</h5>
                            <p>Price</p>
                            <p>Price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>

       <h2 className='productprice'>List of our product prices </h2>

        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Larry the Bird</td>
      <td>Thornton</td>
      <td>@twitter</td>

    </tr>
  </tbody>
</table>
</div>
    </div>
  )
}

export default Home
