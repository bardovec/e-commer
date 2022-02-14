import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import './style.scss';

const ColorFilter = () => {
  const colors = useSelector((state) => state.facets);

  const [shows, setShows] = useState(-5);
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }

    setChecked(updatedList);
  };

  const Cheked = (item) => (checked.includes(item) ? 'active' : 'checkbox_block');

  return (
    !colors.facets ? null : (
      colors.facets.splice(-1).map((item, index) => (
        <ul key={index}>
          {item.values.splice(6).map((i, ind) => (
            <li key={ind} className='filter__blocks__position'>
              <label className='checkbox_wrapper'>
                <input
                  value={i.value}
                  type='checkbox'
                  key={ind}
                  onChange={handleCheck}
                />
                <span
                  className={Cheked(i.value)}

                  aria-hidden='true'
                />
                <p className='material-filter__value'>{i.value}</p>
              </label>
              <p>{i.count}</p>
            </li>

          ))}
          <p onChange={() => setShows(1)}>+More</p>
        </ul>
      ))
    )
  );
};

export default React.memo(ColorFilter);
