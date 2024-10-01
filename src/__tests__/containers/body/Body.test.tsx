import { render, screen } from '@testing-library/react';
import Body from '../../../containers/body/Body.tsx';


describe('Body RC', () => {
  it('renders the Body correct', () => {
    //When
    render(<Body />);

    const text = screen.getByText('Body');
    //Then
    expect(text).toBeInTheDocument();
  });
});