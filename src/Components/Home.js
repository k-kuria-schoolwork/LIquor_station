import React from 'react'
import { Link } from 'react-router-dom'
function Home() {

  return (
    <div className='zenbudha'>

      <div>
      <div>
            <div className='homeimgtwo'>
                <img src='https://www.bourbonbanter.com/content/images/2023/09/12-year-front-and-10-corked_hr-1.jpg' alt='weekend'></img>
                <div className='wishyou'>
                    <h2>Get all your favorite drinks at the </h2>
                    <h2>tap of a button</h2>
                    
                      
                       
                   
                </div>
            </div>
        </div>

      <div className='insticnt'>
      <div className='budafoam'>
            <p>Masaa ni ya <span>aluta</span></p>
          </div>
          <button className='alluta'>
             <Link to='/products/all'>Proceed to shop</Link>
         </button>
         </div>
       
        <div className='allcategoriescontainer'>
            <div className='categname'>
                <h2>Our Categories</h2>
            </div>
            <div className='displaycategories'>
            <div className='displaymycateg'>

                <div className='displayvector'>
                    <Link to='/products/whisky'>
                    <img src='../Images/whiskyvector.png' alt='whisky'></img>
                   <p>Whisky</p> 
                    </Link> 
                </div>
               
                <div className='displayvector'>
                    <Link to='/products/gin'>
                    <img src='../Images/gin.png' alt='whisky'></img>
                    <p>Gin</p> 
                    </Link> 
                </div>

                <div className='displayvector'>
                    <Link to='/products/vodka'>
                    <img src='https://previews.123rf.com/images/chekat/chekat1603/chekat160300117/53773330-bottle-and-a-glass-of-cognac-vector-illustration-on-white-background.jpg' alt='whisky'></img>
                    <p>Vodka</p> 
                    </Link> 
                </div>

                 <div className='displayvector'>
                    <Link to='/products/wine'>
                    <img src='../Images/winepress.png' alt='whisky'></img>
                    <p>Wine</p> 
                    </Link> 
                </div>

            </div>
           

            <div className='viewcate'>
                <button>
                <Link to='/products/all'>
                    View All 
                </Link>
                
                 <i class="fa-solid fa-angles-right fa-beat"></i>
               
                </button>
            </div>
            </div>
        </div>


      </div>




     


        {/* <div className='newarrivalcontainer'>
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
        </div> */}

        {/* <div>

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
</div> */}

        <div className='homecontentcontainer'>
            <div className='homecontentimg'>
            <Link to='/about'>
            <img src='https://i0.wp.com/picjumbo.com/wp-content/uploads/nye-party-celebrations-pouring-champagne-free-photo.jpg?w=600&quality=80' alt='homeimg'></img>
                <div className="text-overlay">
                <h2>About Us</h2>
                <p>Where every bottle holds the promise of an unforgettable night, and every pour fuels the rhythm of celebration</p>
                <button>Read more</button>
                </div>
            </Link>
            </div>

            <div className='homecontentimg2'>
                <Link to={'/products/all'}>
                    <img src='https://www.just-drinks.com/wp-content/uploads/sites/29/2023/08/Captain-Morgan-Spiced-Gold-0.0-e1700739900247.png' alt='homeimg'></img>
                    <div className="text-overlay">
                    <h2 id='shoppify'>Shop Online</h2>
                    <p>At Luxury Liquors we understand the importance of convenience and reliability when it comes to delivering your favorite beverages...</p>
                    <button>Start Shopping</button>
                    </div>
                </Link>
               
            </div>
           
        </div>

       
      <div className='newarrivalcontainer'>
            <div className='newarrival'>
            <h2>Trending Products</h2>
            <p className='brrr'><Link to='products/all'>View more</Link></p>
            </div>

            <div className='displaycardcontainer2'>
                <div className='cardcontainer'>
                    <div className='cardcol2'>
                        <img src='https://molloys.ie/cdn/shop/files/IMG-4442_768x.jpg?v=1693818225' alt='carrd1'></img>
                        <div className='cardbodyoo'>
                            <h5>Jameson 18yrs Old </h5>
                            <p>Ksh 2,300.00</p>
                        </div>
                    </div>
                </div>
                <div className='cardcontainer'>
                    <div className='cardcol2'>
                        <img src='https://i0.wp.com/www.liquorshack.co.ke/wp-content/uploads/2020/12/Guiness-wpp1692313642468.png?fit=500%2C500&ssl=1' alt='carrd1'></img>
                        <div className='cardbodyoo'>
                            <h5>Guiness Foreign extra</h5>
                            <p>Ksh 180.00</p>
                        </div>
                    </div>
                </div>

                <div className='cardcontainer2'>
                    <div className='cardcol2'>
                        <img src='https://www.mountviewwines.com.au/images/wines/wine-slider-bgr.png' alt='carrd1'></img>
                        <div className='cardbodyoo'>
                            <h5>MountainView Wines</h5>
                            <p>Ksh 1300.00</p>
                        </div>
                    </div>
                </div>

                <div className='cardcontainer2'>
                    <div className='cardcol2'>
                        <img src='https://shop.bombaysapphire.com/cdn/shop/products/Engraved-Bombay-HappyBirthdaySam_2048x2048.jpg?v=1638187382' alt='carrd1'></img>
                        <div className='cardbodyoo'>
                            <h5>Bombay Saphire </h5>
                            <p>Ksh 2,800.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home
