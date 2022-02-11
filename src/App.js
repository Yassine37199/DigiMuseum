import './App.css';
import { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { Header } from './Components/header/header.component';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos : [],
      searchText : ''
    }
  }


  componentDidMount() {
      fetch("https://api.unsplash.com/photos/?client_id=8aY1-7ly756Pu0Ts1NsFsYmpqAPKFh3MoquNQT9u7Ng")
      .then(res => res.json())
      .then(res => this.setState({
        photos : res
      }))
      
  }

  handleChange = e => {
    this.setState({
      searchText : e.target.value
    })
  }


      


  render() {

    const {photos , searchText} = this.state;

    const FilteredPhotos = photos.filter(photo => photo.user.name.toUpperCase().includes(searchText.toUpperCase()))

    return (
      <div className="App">
        <Header placeholder="Search Creators" handleChange={e => this.handleChange(e)}/>
        {<CardList photos={FilteredPhotos} />}
      </div>
    );
  }
  
}

export default App;
