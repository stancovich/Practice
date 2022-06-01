import React from 'react';
import ReactDOM from 'react-dom';


function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
};

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/518UVRsVv8L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
  )
};

const Title = () => {
  return (
    <h1>The Art Teacher's Book of Lists, 2nd Edition (J-B Ed: Book of Lists) 2nd Edition</h1>
  )
};

const Author = () => {
  return (
    <h4>Helen D. Hume</h4>
  )
};

ReactDOM.render(<BookList />, document.getElementById('root'));