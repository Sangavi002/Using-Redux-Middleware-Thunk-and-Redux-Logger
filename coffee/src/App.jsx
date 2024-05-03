import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoffee } from './store/actionType';
import './App.css';
import Sidebar from './Sidebar';

const App = () => {
  const dispatch = useDispatch();
  const coffeeData = useSelector(state => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, []); 

  return (
    <div>
      <h1>Coffee List</h1>
      <Sidebar />
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
