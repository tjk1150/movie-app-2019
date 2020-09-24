import React, { Component } from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
      <Food fav="kimbap" />
    </div>
  );
}

export default App;
