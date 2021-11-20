import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {bookType} from '../localTypes';
import '../App.css';
import axios from 'axios';

const BookItem = ({book: {title, description, isbn, author, publisher, publishedDate}}) => {
  return (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ publishedDate }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ description }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const ShowBookDetails = () => {
  const [book, setBook] = useState<bookType>({} as bookType);
  let params = useParams();

  useEffect(() => {
    axios
    .get(`http://localhost:8082/api/books/${params.id}`)
    .then(res => {
      const data = {...res.data}
      data.publishedDate = data.published_date
      delete data.published_date
      setBook(data)
    })
    .catch(err => {
      console.log("Error from ShowBookDetails");
    })
  }, [params])

  const handleDelete = (id) => {
    axios
    .delete('http://localhost:8082/api/books/'+id)
    .then(res => {
      console.log(`Deleted ${id}`)
    })
    .catch(err => {
      console.log("Error form ShowBookDetails_deleteClick");
    })
  }

  return (
    <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            <BookItem book={book} />
          </div>

          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={() => handleDelete(book._id)}
              >
                Delete Book
              </button><br />
            </div>
            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
  )
}

export default ShowBookDetails;