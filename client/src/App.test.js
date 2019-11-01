import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('darkmode', () => {
  let click = false;
  const { getByText } = render(<App darkmode = {() => click = true} />);
  const darkMode = getByText(/dark mode/i);
  fireEvent.click(darkMode);
  expect(click).toBe(false);
})