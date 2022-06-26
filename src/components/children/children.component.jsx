import React from 'react'
import './children.styles.scss'
import { SHOP_DATA } from '../../shop-data'
import Card from '../card/card.component'


const ChildrenClothes = () => {
  let products = SHOP_DATA.filter(product => product.categoryName === 'children-clothes')
  console.log(products);

  return (
    <div className='CardContainer'>
      {products.map((product, index) => <Card key={index} product={product} />)}
    </div>
  )
}

export default ChildrenClothes