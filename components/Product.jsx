import React, { useEffect } from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({product: {image, title, slug, price, sort}, moveLine}) => {
  useEffect(() => {
    console.log(sort);
  }, [moveLine])
  return (
    <div style={
      moveLine === 2 && sort === 'accessories' ? {display: 'none'} :
      moveLine === 3 && sort === 'clothing' ? {display: 'none'} :
      {}
    }>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card track">
          <img 
            width={250} 
            height={250} 
            src={urlFor(image && image[0])} 
            alt={title} 
            className='product-image'
          />
          <p className="product-name">{title}</p>
          <p className="product-price">{price} USD</p>

        </div>
      </Link>
    </div>
  )
}

export default Product;