import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'


function Navbar() {
  const { totalItems } = useCart()

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
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/products/all'>Shop</Link>
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

            {/* <div className='homeimgone'>
                    <img src='../Images/liquorbackground.png' alt='mamabo safi'></img>
            </div> */}
        </div>


        <div className='mobilenavbar'>
          <nav className='nav'>
            <Link className='navlinks' to='/'>
            <i class="fa-solid fa-house"></i>
            <p className='navtext'>Home</p>
            </Link>

            <Link className='navlinks' to='/pages'>
            <i class="fa-solid fa-book-open-reader"></i>
            <p className='navtext'>pages</p>
            </Link>

            <Link className='navlinks' to='/products/all'>
            <i class="fa-solid fa-bag-shopping"></i>
            <p className='navtext'>Shop</p>
            </Link>

            <Link className='navlinks' to='/cart'>
              <div className='navlinkcart'>
              <i class="fa-solid fa-cart-shopping"/>
              <h6>{totalItems}</h6> 
              </div>
            <p className='navtext'>Cart</p>
            </Link>
          </nav>
        </div>
            </div>
  )
}

export default Navbar
