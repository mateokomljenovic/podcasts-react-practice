import React, {Component} from 'react'; 
import CardList from './CardList'; 
import { podcasts } from './podcasts'
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
    constructor () {
        super()
        this.state = {
            podcasts: podcasts,
            searchfield: ''
        }
    }
    changeOnSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render () {
        const filteredPodcasts = this.state.podcasts.filter(podcasts => {
            return podcasts.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className="tc">
            <h1 className="f1">Podcasts</h1>
            <SearchBox searchChange = {this.changeOnSearch} />
            <CardList podcasts = {filteredPodcasts}/>
        </div>
    );
  }
}

export default App; 