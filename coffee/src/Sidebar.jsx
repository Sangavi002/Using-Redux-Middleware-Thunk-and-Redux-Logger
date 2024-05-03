import './App.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import {  sortCoffeeAsc, sortCoffeeDesc } from './store/actionType';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSortAsc = () => {
    dispatch(sortCoffeeAsc());
  };

  const handleSortDesc = () => {
    dispatch(sortCoffeeDesc());
  };

  return (
    <div className='sort'>
      <button style={{margin: "10px"}} onClick={handleSortAsc}>Low to High</button>
      <button onClick={handleSortDesc}>High to Low</button>
    </div>
  );
};

export default Sidebar;
