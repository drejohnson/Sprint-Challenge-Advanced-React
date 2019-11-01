import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Render App', () => {
  it('renders App without crashing', () => {
    render(<App />);
  });
});

describe('toggle dark mode', () => {
  it('it toggles dark mode on and orr', () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('toggle'));
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });
});

// describe('Reset Balls and Strikes count', () => {
//   it('it increments Balls and Strikes count by 2 then resets the count to 0 when Hit button is clicked', () => {
//     const { getByTestId } = render(<App />);

//     fireEvent.click(getByTestId('strike-button'));
//     fireEvent.click(getByTestId('strike-button'));
//     expect(getByTestId('strikesCount').textContent).toEqual('2');

//     fireEvent.click(getByTestId('ball-button'));
//     fireEvent.click(getByTestId('ball-button'));
//     expect(getByTestId('ballsCount').textContent).toEqual('2');

//     fireEvent.click(getByTestId('hit-button'));
//     expect(getByTestId('strikesCount').textContent).toEqual('0');
//     expect(getByTestId('ballsCount').textContent).toEqual('0');
//   });
// });
