import React, { useEffect } from 'react';
import useAxios from '../hooks/useAxios';

const PlayerList = ({ players }) => {
  const [value, fetching, error] = useAxios(
    'http://localhost:5000/api/players',
  );
  useEffect(() => {
    console.log('value', value);
    console.log('fetching', fetching);
    console.log('error', error);
  }, [value, fetching, error]);
  return (
    <div>
      {players.map(player => (
        <div key={player.name}>
          <h2>{player.name}</h2>
          <p>
            Country <span>{player.country}</span>
          </p>
          <p>
            Searches <span>{player.searches}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
