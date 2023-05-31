import "./App.scss";
import { Component } from "react/cjs/react.production.min";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
  }

   minus = () =>{
    this.setState({
      count: this.state.count - 1
    })
  }
  reset = () =>{
    this.setState({
      count: 0
    })
  }
  plus = () =>{
    this.setState({
      count: this.state.count + 1
    })
  }


  render(){

<<<<<<< HEAD
=======
    let color = "#fff";
    if(this.state.count > 0){
      color = 'yellow'
    } else if (this.state.count < 0){
      color = 'red'
    } else{
      color = 'white'
    }

    return (
      <section className="counter-sec --flex-center">
        <div className="container counter --card --center-all">
          <h1 className=" --text-light">React counter App</h1>
          <p className="count --my --text-md --text-light --fw-bold" style={{
            color:color
          }}>{this.state.count}</p>
          <div className="buttons">
              <button className="--btn --btn-danger" onClick={this.minus} >- Subtract</button>
              <button className="--btn" onClick={this.reset}>!Reset</button>
              <button className="--btn --btn-success" onClick={this.plus}>+ Add</button>
          </div>
        </div>
      </section>
      );
  }
  
 
}
>>>>>>> 346de15544fe4d43ef435a2707b6317239959db3
export default App;
