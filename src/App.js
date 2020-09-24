import React from 'react';

function Food({name, picture}){
  return(
  <div>
    <h1>I like {name}</h1>
    <img src={picture} />
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://placeimg.com/64/64/1"
  },
  {
    id: 2,
    name: "Ramen",
    image: "http://placeimg.com/64/64/2"
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image: "http://placeimg.com/64/64/3"
  },
  {
    id: 4,
    name: "Bibimbap",
    image: "http://placeimg.com/64/64/4"
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://placeimg.com/64/64/5"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food id={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
