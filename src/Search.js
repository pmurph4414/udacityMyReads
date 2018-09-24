import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
	static propTypes = {
        books: PropTypes.array.isRequired
    }

    state = {
        query: ''
    }

	updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
	
	
    render() {
		const {books} = this.props;
		console.log('books', books);
		
		const {query} = this.state;
		
		const showBooks = query === '' ? books : books.filter((c) => (
            c.title.toLowerCase().includes(query.toLowerCase())
        ))
		
        return (
            <div className="search-books">
                <div className="search-books-bar">
                  <a className="close-search">Close</a>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input 
						type="text"
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
						placeholder="Search by title or author"/>
                  </div>
                </div>
				
				{this.state.query.length &&
				  <div className="bookshelf-books">
						<ol className="books-grid">
							{showBooks.map((book) => (
								<li key={book.id}>
									<div className="book">
										<div className="book-top">
											<div 
												className="book-cover" 
												style={{ 
													width: 128, height: 193, 
													backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
											</div>
											<div className="book-shelf-changer">
											  <select
												onChange={() => this.props.onMoveBook(book)}>
												<option value="move" disabled>Move to...</option>
												<option selected value="currentlyReading">Currently Reading</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">None</option>
											  </select>
											</div>
											<p className="book-title">{book.title}</p>
											<p className="book-authors">
												{book.authors.map(b=><React.Fragment>{b}<br/></React.Fragment>)}
											</p>
										</div>
									</div>
								</li>
							))}
						</ol>
					</div>
				}
			  </div>
        );
    }
}

export default Search;