import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFacets, getPosts } from './actions/posts';
import ProductList from './Components/ProductsList/ProductList';
import FilterBlock from './Components/FilterBlock/FilterBlock';
import ColorFilter from './Components/FilterBlock/ColorFilter/ColorFilter';

function App() {
  const [open, setOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getFacets());
  }, [open, colorOpen, dispatch]);
  return (
    <>
      <div className='container'>
        <h1 className='main__title'>SEARCH RESULTS</h1>
        <p className='filter__title'><b>FILTERS</b></p>
        <div className='grid__container'>
          <div className='filter__block'>
            <div className='filter__showing___block'>
              <p className='filter__title'>Material</p>
              {open ? <p onClick={() => setOpen(!open)}>-</p> : <p onClick={() => setOpen(!open)}>+</p>}
            </div>
            {open && <FilterBlock isOpen={open} />}
            <div className='filter__showing___block'>
              <p className='filter__title'>Colors</p>
              {colorOpen ? <p onClick={() => setColorOpen(!colorOpen)}>-</p>
                : <p onClick={() => setColorOpen(!colorOpen)}>+</p>}
            </div>
            {colorOpen && <ColorFilter isOPen={colorOpen} />}

          </div>

          <ProductList />
        </div>

      </div>
    </>
  );
}

export default React.memo(App);
