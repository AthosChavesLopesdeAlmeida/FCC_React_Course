import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting () {
  return (
  <React.Fragment>
    <div className = 'basic'>
      <h1>Hello, world!</h1>
      <p>This is my first experience with React!</p>
    </div>
  </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>);

