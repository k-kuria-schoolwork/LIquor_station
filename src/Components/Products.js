import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Products({ data }) {
  const { category } = useParams();
  console.log('category:', category);
  const [filter, setFilter] = useState('')
  const [selectedCategoryCard, setSelectedCategoryCard] = useState('all')

  const handleCategoryClick = (category) => {
    setSelectedCategoryCard(category)
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
    { label: 'beer', value: 'beer' },

  ];


  const searchText = (e)=> {
      setFilter(e.target.value)
  }


  const selectedCategory = category || 'all';
  const filteredData = data.cardData.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  console.log('filteredData:', filteredData);

  return (
    <div>
       <div className='sexybackgroundyy'>
          <h2 className='liqstation3'>Liquor Station</h2>
          <h2 className='liqstation4'>{category} Products</h2>
          </div>

        

       

      <div className='productspageheader'>
        <div className='backcategory'>
          <Link to='/'>
          <i id='jambo' class="fa-solid fa-arrow-left fa-fade"></i>
          </Link>
        </div>
        <div className='searchcart'>
        <div class="searchyy">
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


      <div className='productcategory'>
          {categoryButtons.map((category) => (
        <button
          key={category.value}
          className={`cartbtn ${selectedCategoryCard === category.value ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category.value)}
        >
          <Link to={`/products/${category.value}`}>{category.label}</Link>
        </button>
      ))}

          </div>






<div className='displaycardcontainer'>

      {filteredData.map((item) => (
     <div className='cardcontainer'  key={item.id}>
        <div className='cardcol'>
          <Link to={`/products/${category}/${item.id}`}>
          <img src={item.image} alt={item.title}  />
          </Link>
        </div>
        
        <div className='productbody'>
          <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            {item.stock.available ? (
              <p>In Stock: {item.stock.quantity} available</p>
            ) : (
              <p>Out of Stock</p>
            )}
            <p><Link to={`/products/${category}/${item.id}`}>View more</Link></p>
          </div>
        </div>
      ))}

</div>
    </div>
  );
}

export default Products;
