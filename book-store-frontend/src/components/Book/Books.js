import React from 'react'
import axios from 'axios'
import Book from "./Book"
import "./Book.css"

const URL = "http://localhost:6007/books"

const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=>res.data)
}

const Books = () => {

  const [books,setBooks]=React.useState([])

  React.useEffect(()=>{
    fetchHandler().then(data => setBooks(data.books) )
  }, [])
 


  return (
    <div className='books'>
      <ul>
      {books && books.map((book, i) => (
        <li className='book' key={book.id}>
          <Book book={book} />
        </li>
          ))}
      </ul>
    </div>
  )
}

export default Books