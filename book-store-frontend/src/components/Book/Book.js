import React, { useState } from 'react';
import { Button } from '@mui/material';
import "./Book.css";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;

  const [deleted, setDeleted] = useState(false);
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:6007/books/${_id}`)
      .then(() => setDeleted(true))
      .then(() => window.location.reload())
      .then(() => history("/books"));
  };

  if (deleted) {
    return null;
  }

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }} >Update</Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto" }}>Delete</Button>
    </div>
  );
};

export default Book;
