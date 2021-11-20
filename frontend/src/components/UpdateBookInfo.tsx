import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {getDateString} from '../helpers';
import '../App.css';

const UpdateBookInfo = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [publisher, setPublisher] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`http://localhost:8082/api/books/${params.id}`)
    .then(res => {
      setTitle(res.data.title)
      setIsbn(res.data.isbn)
      setAuthor(res.data.author)
      setDescription(res.data.description)
      setPublishedDate(getDateString(res.data.published_date))
      setPublisher(res.data.publisher)
    })
    .catch(err => {
      console.log(`Error from UpdateBookInfo ${err}`);
    })
  }, [params])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value)
        break
      case "isbn":
        setIsbn(value)
        break
      case "author":
        setAuthor(value)
        break
      case "description":
        setDescription(value)
        break
      case "publishedDate":
        setPublishedDate(value)
        break
      case "publisher":
        setPublisher(value)
        break
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      isbn: isbn,
      author: author,
      description: description,
      published_date: publishedDate,
      publisher: publisher
    };

    axios
      .put('http://localhost:8082/api/books/'+params.id, data)
      .then(res => {
        navigate("/show-book/"+params.id)
      })
      .catch(err => {
        console.log(`Error in UpdateBookInfo! ${err}`);
      })
  };

  return (
    <div className="UpdateBookInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
                Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Book</h1>
            <p className="lead text-center">
                Update Book's Info
            </p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
        <form noValidate onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <input
              type='text'
              placeholder='Title of the Book'
              name='title'
              className='form-control'
              value={title}
              onChange={handleChange}
            />
          </div>
          <br />

          <div className='form-group'>
          <label htmlFor="isbn">ISBN</label>
            <input
              type='text'
              placeholder='ISBN'
              name='isbn'
              className='form-control'
              value={isbn}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="author">Author</label>
            <input
              type='text'
              placeholder='Author'
              name='author'
              className='form-control'
              value={author}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="description">Description</label>
            <input
              type='text'
              placeholder='Describe this book'
              name='description'
              className='form-control'
              value={description}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="published_date">Published Date</label>
            <input
              type='date'
              placeholder='published_date'
              name='publishedDate'
              className='form-control'
              value={publishedDate}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="publisher">Publisher</label>
            <input
              type='text'
              placeholder='Publisher of this Book'
              name='publisher'
              className='form-control'
              value={publisher}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-info btn-lg btn-block">
              Update Book
          </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default UpdateBookInfo;