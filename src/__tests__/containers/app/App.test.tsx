import App from '../../../containers/app/App.tsx';
import { render } from '@testing-library/react';


describe('App RC', () => {
  it('renders the App correct', () => {
    //When
    render(<App />)
    expect(true).toBeTruthy()
    // expect(true).toBe(true);
  });
});