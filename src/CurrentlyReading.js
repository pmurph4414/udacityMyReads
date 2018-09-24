import React from 'react';
import PropTypes from 'prop-types';

class CurrentlyReading extends React.Component {
	static propTypes = {
        books: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
    }

    render() {
		const {books} = this.props;
		
        return (
           <div className="bookshelf">
				<h2 className="bookshelf-title">Currently Reading</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book) => (
							<li key={book.id}>
								{book.shelf === 'currentlyReading' &&
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
								}
							</li>
						))}
					</ol>
				</div>
			</div>
        );
    }
}

export default CurrentlyReading;
