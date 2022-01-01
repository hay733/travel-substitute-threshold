import { render, screen } from '@testing-library/react';
import App from '../App';
import Home from '../pages/Home'

test('renders quiz link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/find out!/i);
  expect(linkElement).toBeInTheDocument();
});
