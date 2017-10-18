import React from 'react';
import ReactDOM from 'react-dom';
import Books from './comps/01-Books.jsx';

const GatherComp = () => {
  return(
    <div>
      <Books />
    </div>
  )
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));
