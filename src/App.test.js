import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tutorialw link', () => {
  render(<App />);
  const linkElement = screen.getByText(/here/i);
  expect(linkElement).toBeInTheDocument();
});
