import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

test('App renders without crashing', () => { 
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})
