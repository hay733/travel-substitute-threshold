import { render, screen } from '@testing-library/react';
import App from '../App';
import Home from '../pages/Home'

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/should you travel for your meeting?/i);
  expect(linkElement).toBeInTheDocument();
});
