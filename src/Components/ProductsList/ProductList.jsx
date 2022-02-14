import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem/ProductItem';
import './style.scss';

const ProductList = () => {
  const products = useSelector((state) => state.posts);

  return (
    !products.items ? null : (
      <div className='product-container'>
        {
            products.items.map((product, index) => (
              <ProductItem
                key={index}
                product={product}
              />

            ))
            }
      </div>
    )
  );
};

export default ProductList;
