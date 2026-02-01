import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import { books } from './books.js' // Books é um objeto, por isso os '{}'
import Book from './book.js'

function BookList () {
  return (
  <React.Fragment>
    <h1>Principais livros de Cícero</h1>
    <section className='evil_Larry'>
      {books.map((book) => {
        return <Book {...book} key={book.id}/>;
      })}
    </section>
  </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>) 