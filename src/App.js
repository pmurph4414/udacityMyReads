import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import Details from './Details';
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                books
        }))
    })
 }

  render() {
    const currentPage = window.location.href;
    console.log('Current path', currentPage);
    return (
      <div className="app">
		<Details books={this.state.books} />
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
