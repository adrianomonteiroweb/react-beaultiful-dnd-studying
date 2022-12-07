import React from 'react';

import './App.css';

import finalSpaceCharacters from './data/finalSpaceCharacters';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Final Space Characters</h1>
        <ul className='characters'>
          {finalSpaceCharacters.map(({ id, name, thumb }) => {
            return (
              <li key={id}>
                <div className='characters-thumb'>
                  <img src={thumb} alt={`${name} Thumb`} />
                </div>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </header>
      <p>
        Images from{' '}
        <a href='https://final-space.fandom.com/wiki/Final_Space_Wiki'>
          Final Space Wiki
        </a>
      </p>
    </div>
  );
}

export default App;
