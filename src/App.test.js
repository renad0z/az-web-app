import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Azure Static Web Apps/i);
  expect(welcomeElement).toBeInTheDocument();
});
