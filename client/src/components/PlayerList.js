import React from 'react';

const PlayerList = players => {
  return (
    <div>
      {players.map(player => (
        <div>
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
