import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

function Category() {

    const [filter, setFilter] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')


    const searchText = (e)=> {
        setFilter(e.target.value)
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
        setFilter('')//Clear the filter when a new category is selected
    }

    const categoryButtons = [
        { label: 'All', value: 'all' },
        { label: 'Vodka', value: 'vodka' },
        { label: 'Rum', value: 'rum' },
        { label: 'Gin', value: 'gin' },
        { label: 'Whisky', value: 'whisky' },
        { label: 'Champagne', value: 'champagne' },
        { label: 'Wine', value: 'wine' },
      ];


    //FILTER ITEMS BASED ON CATEGORY AND SEARCH
    const filteredItems = data.cardData.filter((item) => {
        const categoryFilter = selectedCategory === 'all' || item.category === selectedCategory;
        const searchFilter =
          filter === '' || // Check if the filter is empty, don't filter if it is
          Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filter.toLowerCase())
          );
        return categoryFilter && searchFilter;
      });




  return (
    <div>

      <div className='categoryheader'>
        <div className='categoryimg'>
            <img src='https://img.freepik.com/free-vector/vector-set-bottles-with-alcohol-stemware_1441-42.jpg' alt='mambo kubwa'></img>
        </div>


        <div className='sexybackground'>
        <h2 className='liqstation'> Liquor Station</h2>
        <h2 className='liqstation2'> Liquor Station</h2>
        </div>


          <div className='locatesearch'>
          <div className='locatei'>
          <i class="fa-solid fa-location-dot fa-bounce"></i>
          <p>Nairobi</p>
        </div> 

        <div>
        <div class="search">
            <input type="text"
             class="search__input"
             placeholder="Search for a category or product"
             value={filter}
             onChange={(e)=> searchText(e)}
             />
            <button class="search__button">
                <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
            </button>
        </div>
        </div>
        </div>
      </div>

      <div className='bigpoppa'>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
        <div className='mycardcontainer'>
                    <div className='mycardcontainer-wrapper'>
                        <img src='https://media.istockphoto.com/id/1172594405/vector/whiskey-bottles-and-glass-vector-sketch-illustration-scotch-brandy-or-liquor-alcohol-drinks.jpg?s=612x612&w=0&k=20&c=rCdQ8SUQfCA4Fe_e_zn-0FWht1QLhXojiHnuVINPkMw=' alt='italcatgeories'></img>
                        <div className='categoriesstory'>
                        <h3>Whiskey</h3>
                        </div>    
                        </div>
                </div>
        </div>
       
        

        <div className='col-md-6 col-sm-12'>
        <div className='mycardcontainer'>
                    <div className='mycardcontainer-wrapper'>
                        <img src='https://media.istockphoto.com/id/1172594405/vector/whiskey-bottles-and-glass-vector-sketch-illustration-scotch-brandy-or-liquor-alcohol-drinks.jpg?s=612x612&w=0&k=20&c=rCdQ8SUQfCA4Fe_e_zn-0FWht1QLhXojiHnuVINPkMw=' alt='italcatgeories'></img>
                        <div className='categoriesstory'>
                        <h3>Whiskey</h3>
                        </div>    
                        </div>
                </div>
        </div>


        <div className='col-md-6 col-sm-12'>
        <div className='mycardcontainer'>
                    <div className='mycardcontainer-wrapper'>
                        <img src='https://media.istockphoto.com/id/1172594405/vector/whiskey-bottles-and-glass-vector-sketch-illustration-scotch-brandy-or-liquor-alcohol-drinks.jpg?s=612x612&w=0&k=20&c=rCdQ8SUQfCA4Fe_e_zn-0FWht1QLhXojiHnuVINPkMw=' alt='italcatgeories'></img>
                        <div className='categoriesstory'>
                        <h3>Whiskey</h3>
                        </div>    
                        </div>
                </div>
        </div>


        <div className='col-md-6 col-sm-12'>
        <div className='mycardcontainer'>
                    <div className='mycardcontainer-wrapper'>
                        <img src='https://media.istockphoto.com/id/1172594405/vector/whiskey-bottles-and-glass-vector-sketch-illustration-scotch-brandy-or-liquor-alcohol-drinks.jpg?s=612x612&w=0&k=20&c=rCdQ8SUQfCA4Fe_e_zn-0FWht1QLhXojiHnuVINPkMw=' alt='italcatgeories'></img>
                        <div className='categoriesstory'>
                        <h3>Whiskey</h3>
                        </div>    
                        </div>
                </div>
        </div>



               <div className='col-md-6 col-sm-12'>
        <div className='mycardcontainer'>
                    <div className='mycardcontainer-wrapper'>
                        <img src='https://media.istockphoto.com/id/1172594405/vector/whiskey-bottles-and-glass-vector-sketch-illustration-scotch-brandy-or-liquor-alcohol-drinks.jpg?s=612x612&w=0&k=20&c=rCdQ8SUQfCA4Fe_e_zn-0FWht1QLhXojiHnuVINPkMw=' alt='italcatgeories'></img>
                        <div className='categoriesstory'>
                        <h3>Whiskey</h3>
                        </div>    
                        </div>
                </div>
        </div>


        <div className='col-md-6 col-sm-12'>
        <div className='mycardcontainer'>
                    <div className='mycardcontainer-wrapper'>
                        <img src='https://media.istockphoto.com/id/1172594405/vector/whiskey-bottles-and-glass-vector-sketch-illustration-scotch-brandy-or-liquor-alcohol-drinks.jpg?s=612x612&w=0&k=20&c=rCdQ8SUQfCA4Fe_e_zn-0FWht1QLhXojiHnuVINPkMw=' alt='italcatgeories'></img>
                        <div className='categoriesstory'>
                        <h3>Whiskey</h3>
                        </div>    
                        </div>
                </div>
        </div>

       
      </div>
      </div>


      {categoryButtons.map((category) => (
        <button
          key={category.value}
          className={`cartbtn ${selectedCategory === category.value ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category.value)}
        >
          <Link to={`/products/${category.value}`}>{category.label}</Link>
        </button>
      ))}



      {/* <div className='category'> */}
                <div className='catwrapper'>
                <button className={`cartbtn ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => handleCategoryClick('all')} >
                All
                </button>
                <button className={`cartbtn ${selectedCategory === 'vodka' ? 'active' : ''}`} onClick={() => handleCategoryClick('vodka')}>
                vodka
                </button>
                <button className={`cartbtn ${selectedCategory === 'rum' ? 'active' : ''}`} onClick={() => handleCategoryClick('rum')}>
                rum
                </button>
                <button className={`cartbtn ${selectedCategory === 'gin' ? 'active' : ''}`} onClick={() => handleCategoryClick('gin')}>
                gin
                </button>
                <button className={`cartbtn ${selectedCategory === 'whisky' ? 'active' : ''}`} onClick={() => handleCategoryClick('whisky')}>
                whisky
                </button>
                <button className={`cartbtn ${selectedCategory === 'champagne' ? 'active' : ''}`} onClick={() => handleCategoryClick('champagne')}>
                champagne
                </button>
                <button className={`cartbtn ${selectedCategory === 'wine' ? 'active' : ''}`} onClick={() => handleCategoryClick('wine')}>
                wine
                </button>
      
           </div>


           <div className='servecontainer'>
        {filteredItems.map((item) => (
          <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={item.id} id='servecard'>
            <div className='col'>
              <div className='card p-0 overflow-hidden shadow'>
                <img src={item.image} className='card-img-top' alt='...' style={{ height: '300px' }} />
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <div key={item.id} className='addcart'>
                    <p className='card-text'>Ksh.{item.price}</p>
                    {/* <button
                onClick={() => {
                  if (!isItemAdded(item.id)) {
                    addItem(item);
                    addItemToAddedItems(item.id);
                  }
                }}
                className={`cssbuttons-io-button ${isItemAdded(item.id) ? 'ordered' : ''}`}
                disabled={isItemAdded(item.id)}
              >
                   
                <span>{isItemAdded(item.id) ? 'Ordered' : 'Add'}</span>
              </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>







  
    </div>
  )
}

export default Category
