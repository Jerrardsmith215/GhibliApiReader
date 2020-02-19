import React from 'react';
import axios from 'axios';
import Header from './Header';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import MediaPlayer from './MediaPlayer';
import { render } from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      film: {},
      films: [],
    };
    this.counter = 0;
  }

  componentDidMount() {
    const fetchFilms = async () => {
      const result = await axios('https://ghibliapi.herokuapp.com/films');
      return result;
    }
    
    fetchFilms()
      .then(res => {
        this.setState(() => ({ films: res.data }));
        this.setState(() => ({ film: this.state.films[this.counter] }));
      })
      .catch(error => {
        console.log('Server error: ', error);
      });
  }

  nextButton = () => {
    if (this.counter === 19) {
      alert('There are no more films...');
    } else
    this.counter = this.counter + 1;
    this.setState(() => ({ film: this.state.films[this.counter] }));
  }

  prevButton = () => {
    if (this.counter === 0) {
      alert('Origin has been reached...');
    } else
    this.counter = this.counter - 1;
    this.setState(() => ({ film: this.state.films[this.counter] }));
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.film.title}/>
        <main>
          <p id="description">{this.state.film.description}</p>
          <div id="stats">
            <p>Director: {this.state.film.director}</p>
            <p>Producer: {this.state.film.producer}</p>
            <p>Released: {this.state.film.release_date}</p>
            <p>Rating: {this.state.film.rt_score}%</p>
          </div>
        </main>
        <footer>
          <PrevButton clickHandler={this.prevButton}/>
          <MediaPlayer/>
          <NextButton clickHandler={this.nextButton}/>
        </footer>
      </div>
    );
  }
}

export default App;
