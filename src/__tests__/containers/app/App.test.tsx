import { render, screen } from '@testing-library/react';
import App from '../../../containers/app/App.tsx';


describe('App RC', () => {
  it('renders the App correct', () => {
    //When
    render(<App />);

    //Then
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Nikita Puzyrenko. 2024')).toBeInTheDocument();
  });
});