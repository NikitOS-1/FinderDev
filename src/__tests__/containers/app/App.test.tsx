import { render, screen } from '@testing-library/react';
import App from '../../../containers/app/App.tsx';


describe('App RC', () => {
  it('renders the App correct', () => {
    //When
    render(<App />);

    const text = screen.getByText('this is App RC');
    //Then
    expect(text).toBeInTheDocument();
  });
});