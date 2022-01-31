import './App.css';
import { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      artworks : []
    }
  }


  componentDidMount() {

    fetch("https://api.artic.edu/api/v1/artworks?limit=30")
    .then(res => res.json())
    .then(res => this.setState({
      artworks : res.data
    } , () => console.log(this.state.artworks)))
    

  }


  render() {
    return (
      <div className="App">
        <CardList artworks={this.state.artworks} />
      </div>
    );
  }
  
}

export default App;
