import React from 'react';

class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: this.current.count + 1})); // setstate할 때마다 state를 불러오는 것은 좋은 코드가 아님
  };

  minus = () => {
    this.setState(current => ({count: this.current.count - 1}));
  };

  // onClick={this.add}는 누를때만 add
  // onClick={this.add()}는 즉시 add

  componentDidMount(){
    console.log("Component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }

  render(){
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button> 
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }



}

export default App;
