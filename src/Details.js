import React from 'react';
import PropTypes from 'prop-types';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
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
						<CurrentlyReading books={books} />
					</div>
					<div>
						<WantToRead books={books} />
					</div>
					<div>
						<Read books={books} />
					</div>
				</div>
            </div>
        );
    }
}

export default Details;
