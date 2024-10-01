import { render, screen } from '@testing-library/react';
import Header from '../../../containers/header/Header.tsx';


describe('Header RC', () => {
  it('renders the Header correct', () => {
    //When
    render(<Header />);

    const text = screen.getByText('Header');
    //Then
    expect(text).toBeInTheDocument();
  });
});