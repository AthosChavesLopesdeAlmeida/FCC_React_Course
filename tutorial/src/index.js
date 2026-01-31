import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const book1 = {
  author: 'Cícero',
  title : 'Da República',
  img : 'https://m.media-amazon.com/images/I/51mk+wNVllS._SL1200_.jpg'
}

const book2 = {
  author: 'Cícero',
  title : 'Dos Deveres',
  img : 'https://m.media-amazon.com/images/I/51+OqVlfw2L._SL1050_.jpg'
}

const book3 = {
  author: 'Cícero',
  title : 'As Catilinárias',
  img : 'https://m.media-amazon.com/images/I/61gwMjgqwkL._SL1056_.jpg'
}

function BookList () {
  return (
  <React.Fragment>
    <h1>Principais livros de Cícero</h1>
    <section className='evil_Larry'>
      <Book author={book1.author} title={book1.title} img={book1.img}/>
      <Book author={book2.author} title={book2.title} img={book2.img}/>
      <Book author={book3.author} title={book3.title} img={book3.img}/>
    </section>
  </React.Fragment>
  );
}
const Book = ({img, title, author}) => {
  return (
    <article className='larry'>
      <img src= {img} alt={title}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)

