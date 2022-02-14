import React from 'react';
import './style.scss';

const ProductItem = ({ product }) => {
  const count = product.compare_at - product.price;
  const salePrice = Math.ceil(count / product.compare_at * 100);

  return (
    !product.title ? null : (
      <a href={product.image_url} target='_blank' className='card' rel='noreferrer'>
        <img className='product-img' src={product.image_url} alt='' />
        {!product.compare_at ? null : (
          <div className='card-sale'>
            <div>
              <span className='card-sale__percents-block card-sale__blocks'>
                {salePrice}
                % OFF
              </span>
            </div>
            <span className='card-sale__title-block card-sale__blocks'>Sale</span>
          </div>
        )}
        <div className='card-info'>
          <h3>{product.title}</h3>
          <div className='card-price'>
            {!product.compare_at ? '' : (
              <p className='card-price__compare'>
                $
                {product.compare_at}
              </p>
            )}
            {product.price.map((item, index) => (
              <p className='card-price__item' key={index}>
                <b>
                  $
                  {item}
                </b>
              </p>
            ))}
          </div>
        </div>

      </a>
    ));
};

export default ProductItem;
