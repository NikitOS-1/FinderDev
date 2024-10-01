import { render, screen } from '@testing-library/react';
import Footer from '../../../containers/footer/Footer.tsx';


describe('Footer RC', () => {
  it('renders the Footer correct', () => {
    //When
    render(<Footer />);

    const text = screen.getByText('Nikita Puzyrenko. 2024');
    //Then
    expect(text).toBeInTheDocument();
  });
});