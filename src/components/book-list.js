
import React, { Component } from 'react';

class BookList extends Component {

  renderList() function {
    return this.props.books.map( (book) => {
      return (
          <li key={ book.title } className="list-group-item">
            { book.title }
          </li>
      );
    } )
  }

  render() function {
    return (
      <div className="list-group col-sm-4">
        { this.renderList() }
      </div>
    );
  }
};

export default BookList;
