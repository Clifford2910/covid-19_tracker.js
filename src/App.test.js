import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('can read the Header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Covid-19 Global Tracker/i);
  expect(header).toBeInTheDocument();
});
