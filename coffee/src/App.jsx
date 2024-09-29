import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoffee } from './store/actionType';
import './App.css';
import { sortCoffeeAsc,sortCoffeeDesc } from './store/actionType';

const App = () => {
  const dispatch = useDispatch();
  const coffeeData = useSelector(state => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, []); 

  const handleSortAsc = () => {
    dispatch(sortCoffeeAsc());
  };

  const handleSortDesc = () => {
    dispatch(sortCoffeeDesc());
  };

  return (
    <div>
      <h1>Coffee List</h1>
      <div className='sort'>
      <button style={{margin: "10px"}} onClick={handleSortAsc}>Low to High</button>
      <button onClick={handleSortDesc}>High to Low</button>
    </div>
      {coffeeData.isLoading ? 'Loading ...' :
      <div className='container'>
        {coffeeData.coffee.map((ele) => (
          <div key={ele.id} className='card'>
            <div className='card_img'>
              <img src={ele.image} alt={ele.title} width='100%' height='170px'/>
            </div>
            <h3>{ele.title}</h3>
            <h4>₹ {ele.price}</h4>
          </div>
        ))}
      </div>
      } 
    </div>
  );
};

export default App;
