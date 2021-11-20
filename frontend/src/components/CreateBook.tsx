import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [publisher, setPublisher] = useState("");

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
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        setTitle('')
        setIsbn('')
        setAuthor('')
        setDescription('')
        setPublishedDate('')
        setPublisher('')
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };


  return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">
                  Create new book
              </p>

              <form noValidate onSubmit={handleSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    value={publisher}
                    onChange={handleChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
}


export default CreateBook;