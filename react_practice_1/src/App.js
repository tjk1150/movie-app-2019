import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://placeimg.com/64/64/1",
    rating: 5
  },
  {
    id: 2,
    name: "Ramen",
    image: "http://placeimg.com/64/64/2",
    rating: 4.3
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image: "http://placeimg.com/64/64/3",
    rating: 4
  },
  {
    id: 4,
    name: "Bibimbap",
    image: "http://placeimg.com/64/64/4",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://placeimg.com/64/64/5",
    rating: 6
  }
];

function Food({name, picture, rating}){
  return(
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}


    </div>
  );
}

export default App;
