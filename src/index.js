import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello mai animalelor...</h1>
// ReactDOM.render(element, document.getElementById('root'))

import TodoContainer from './components/TodoContainer';
import TodosList from './components/TodoContainer';
import "./App.css"

ReactDOM.render(<TodosList />, document.getElementById('root'));
