import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
const books = [
  {
    author: 'Cícero',
    title : 'Da República',
    img : 'https://m.media-amazon.com/images/I/51mk+wNVllS._SL1200_.jpg',
    id : 1
  },
  {
    author: 'Cícero',
    title : 'Dos Deveres',
    img : 'https://m.media-amazon.com/images/I/51+OqVlfw2L._SL1050_.jpg',
    id : 2
  },
  {
    author: 'Cícero',
    title : 'As Catilinárias',
    img : 'https://m.media-amazon.com/images/I/61gwMjgqwkL._SL1056_.jpg',
    id : 3
  }

]

function BookList () {
  return (
  <React.Fragment>
    <h1>Principais livros de Cícero</h1>
    <section className='evil_Larry'>
      {books.map((book) => {
        const {img, title, author, id} = book
        return <Book img={img} title={title} author={author} key={id}/>;
      })}
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

