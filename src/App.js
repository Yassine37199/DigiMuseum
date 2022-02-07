import './App.css';
import { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos : []
    }
  }


  componentDidMount() {

      fetch("https://api.unsplash.com/photos/?client_id=8aY1-7ly756Pu0Ts1NsFsYmpqAPKFh3MoquNQT9u7Ng")
      .then(res => res.json())
      .then(res => this.setState({
        photos : res
      } , () => console.log(this.state.photos)))
      
  }
      


  render() {
    return (
      <div className="App">
        {<CardList photos={this.state.photos} />}
      </div>
    );
  }
  
}

export default App;
