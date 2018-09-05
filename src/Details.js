import React from 'react';
import PropTypes from 'prop-types';
//import BookGrid from './BookGrid';

class Details extends React.Component {
	static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
		const {books} = this.props;
		console.log('books', this.props);
        return (
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
                      				<li>
										<div className="book">
												{books.map((book) => (
													<div key={book.id}>
														{book.shelf === 'currentlyReading' &&
															<div className="book-top">
																<div 
																	className="book-cover" 
																	style={{ 
																		width: 128, height: 193, 
																		backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
																</div>
																<div className="book-shelf-changer">
																  <select>
																	<option value="move" disabled>Move to...</option>
																	<option value="currentlyReading">Currently Reading</option>
																	<option value="wantToRead">Want to Read</option>
																	<option value="read">Read</option>
																	<option value="none">None</option>
																  </select>
																</div>
																<p className="book-title">{book.title}</p>
																<p className="book-authors">{book.authors}</p>
															</div>
														}
													</div>
												))}
										</div>
									</li>
								</ol>
							</div>
						</div>
					</div>
					
			
			
			
			
					
				</div>
            </div>
        );
    }
}

export default Details;
