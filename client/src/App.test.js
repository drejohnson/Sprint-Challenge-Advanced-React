import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Header from './components/Header';
import PlayerList from './components/PlayerList';

describe('Render App', () => {
  it('renders App without crashing', () => {
    render(<App />);
  });
});

describe('Get Player name', () => {
  it('rendered player name', () => {
    const { getByText } = render(
      <PlayerList players={[{ name: 'Alex Morgan' }]} />,
    );

    expect(getByText('Alex Morgan'));
  });
});

describe('toggle dark mode', () => {
  it('toggles dark mode on and off', () => {
    const { getByTestId } = render(<Header />);

    fireEvent.click(getByTestId('darkmode-button'));
    expect(getByTestId('darkmode-button')).toHaveClass('toggle toggled');
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
