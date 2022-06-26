import React, {useState} from 'react'
import {SHOP_DATA} from '../../shop-data.jsx'
import Card from '../card/card.component.jsx'


import './search-product.styles.scss'

const SearchProduct = () => {
  const [findProd, setFindProd] = useState('')

  const findProductHandler = (e) => setFindProd(e.target.value)

  const filteredBySearch = SHOP_DATA.filter(el => el.name.toLowerCase().includes(findProd.toLowerCase()))

  return (
    <div className='SearchWrapper'>
      <div className="TitleWrapper">
        <h2>Find <span className='italicFont'>your</span> Passion</h2>
      </div>
      

      <div className="InputWrapper">
        <input 
          type="text" 
          placeholder='Type to find passion' 
          value={findProd} 
          onChange={findProductHandler}
        />
      </div>

      <div className="foundProductWraper">
        {filteredBySearch.map(prod => <Card product={prod} />)}
      </div>
    </div>
  )
}

export default SearchProduct