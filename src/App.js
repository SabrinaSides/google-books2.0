import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import { APIkey } from './config';
import BookList from './BookList/BookList';
import './App.css';

class App extends Component {
  state = {
    bookList: [],
  };

  renderBookList = (search) => {
    const searchTerm = search.searchTerm;
    const printType = search.printType ? search.printType : 'all';
    const bookType = search.bookType ? search.bookType : 'full';
    const url = `https://www.googleapis.com/books/v1/volumes/?apiKey=${APIkey}&q=${searchTerm}&printType=${printType}&filter=${bookType}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) =>
        this.setState({
          bookList: data.items,
        })
      )
      .catch(error => console.log(error))
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Books Search</h1>
        </header>
        <main>
          <SearchForm renderList={this.renderBookList} />
          <BookList bookList={this.state.bookList}/>
        </main>
      </div>
    );
  }
}

export default App;
