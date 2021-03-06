import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {bookType} from '../localTypes';
import BookCard from './BookCard';
import '../App.css';


const ShowBookList = () => {
  const [books, setBooks] = useState<bookType[]>([])

  useEffect(() => {
    axios
    .get('http://localhost:8082/api/books')
    .then(res => {
      setBooks(res.data)
    })
    .catch(err =>{
      console.log(`Error from ShowBookList ${err}`);
    })
  }, [])

  const bookList = () => {
    if(!books) {
      return "there is no book record!";
    }

    const list = books.map((book, k) =>
      <BookCard book={book} key={k} />
    );

    return list
  }

  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/create-book" className="btn btn-outline-warning float-right">
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>

        </div>

        <div className="list">
          {bookList()}
        </div>

      </div>
    </div>
  );
}

export default ShowBookList;