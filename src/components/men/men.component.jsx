import React from 'react'
import './men.styles.scss'
import { SHOP_DATA } from '../../shop-data'
import Card from '../card/card.component'


const MenClothes = () => {
  let products = SHOP_DATA.filter(product => product.categoryName === 'men-clothes')
  console.log(products);

  return (
    <div className='CardContainer'>
      {products.map((product, index) => <Card key={index} product={product} />)}
    </div>
  )
}

export default MenClothes