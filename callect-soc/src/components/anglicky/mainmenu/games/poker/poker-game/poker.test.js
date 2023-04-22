import React from 'react';
import ReactDOM from 'react-dom';
import POker from "./poker.jsx";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<POker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
