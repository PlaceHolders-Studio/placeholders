import { render, screen } from '@testing-library/react';
import App from './App';

test('renders studio name in header', () => {
  render(<App />);
  expect(screen.getAllByText(/PlaceHolders/i).length).toBeGreaterThan(0);
});
