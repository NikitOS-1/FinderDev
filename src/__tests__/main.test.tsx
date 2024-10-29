import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../containers/app/App.tsx';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('Root render', () => {
  it('should render App inside StrictMode', () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    const renderMock = jest.fn();
    (createRoot as jest.Mock).mockReturnValueOnce({ render: renderMock });

    // require('../main.tsx');

    expect(createRoot).toHaveBeenCalledWith(rootElement);
    expect(renderMock).toHaveBeenCalledWith(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
});