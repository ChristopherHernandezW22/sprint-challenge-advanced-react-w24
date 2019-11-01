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
  // taking text dark mode (which comes from the button text Dark Mode On/Off) and making it a variable
  const darkMode = getByText(/dark mode/i);
  // fireEvent interacts with dom functions, in this case its darkMode
  fireEvent.click(darkMode);

  expect(click).toBe(false);
})
