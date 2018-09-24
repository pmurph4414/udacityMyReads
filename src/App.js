import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
//import Details from './Details';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

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
	
 moveBook = (book, shelf) => {
	 this.setState((currentState) => ({
		 books: currentState.books.filter((b) => {
			 return b.id !== book.id;
		 })
	 }))
	 BooksAPI.update(book, shelf);
 }

  render() {
	console.log('state', this.state);  
    const currentPage = window.location.href;
    
	return (
      <div className="app">
		<Route exact path='/' render={() => (
			<div>
				<CurrentlyReading
					books={this.state.books}
					onMoveBook={this.moveBook}
				/>
				<Read
					books={this.state.books}
					onMoveBook={this.moveBook}
				/>
				<WantToRead
					books={this.state.books}
					onMoveBook={this.moveBook}
				/>
				<Link
					to='/search'
					className="link">
					Search
				</Link>
			</div>
		)} />
        <Route path='/search' render={() => (
			<Search 
				books={this.state.books}
			/>
		)} />
      </div>
    )
  }
}

export default BooksApp
