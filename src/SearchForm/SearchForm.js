import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Filter from './Filter/Filter';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        searchTerm: '',
        printType: '',
        bookType: ''
    }

    setSearchTerm = (search) => {
      this.setState({
        searchTerm: search
      })
    }

    handleChange = (event) => {
      const target= event.target
      const value= target.value
      const name= target.id

      this.setState({
        [name]: value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.renderList(this.state)
    }

    

  render() {
    const printFilters = ['all', 'books', 'magazines']
    const bookTypeFilters = ['partial', 'full', 'free-ebooks', 'paid-ebooks', 'ebooks']

    return (
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <SearchBar updateSearchTerm={this.setSearchTerm}/>
        <div className='filterBar'>
        <Filter id="printType" label="Print Type" filters={printFilters} selectedFilter={this.state.printType} handleSelect={this.handleChange}/>
        <Filter id="bookType" label="Book Type" filters={bookTypeFilters} selectedFilter={this.state.bookType} handleSelect={this.handleChange}/>
        <button type="submit">Search</button>
        </div>
      </form>
    )
  }
}

export default SearchForm;
