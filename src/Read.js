import React from 'react';
import PropTypes from 'prop-types';

class Read extends React.Component {
	static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
		const {books} = this.props;
		console.log('books', books);
//		const readAuthors = books.filter(b => b.shelf === 'read').map(b => `${b.author}\n`)
//			  books.map(b => b.authors);
//		const readAuthors = books.filter(b => b.authors === 'William E. Shoots').map(b => `${b.author}\n`);
//		const readAuthors = books.filter((b) => (b.shelf === 'read'));
//		console.log('Authors', readAuthors);

		console.log('books', this.props);
        return (
           <div className="bookshelf">
				<h2 className="bookshelf-title">Read</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book) => (
							<li key={book.id}>
								{book.shelf === 'read' &&
									<div className="book">
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
												<option selected value="read">Read</option>
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

export default Read;
