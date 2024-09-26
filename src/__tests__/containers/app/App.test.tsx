import { render,screen } from '@testing-library/react';
import App from '../../../containers/app/App';
import '@testing-library/jest-dom/extend-expect';


describe('App RC', () => {
  it('renders the App correct', () => {
    //When
    render(<App />);
    const foo = screen.getByText('App')
    //Then
    expect(foo).toBeInTheDocument()
  });
});