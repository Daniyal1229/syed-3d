import React from 'react';
import MusicController from './MusicController';
import Dashboard from './Dashboard';
import Controls from './Controls';
import Stats from './Stats';
import '../../styles/GameUI.css';
import '../../styles/Stats.css';

const GameUI = (props) => (
  <div className="game-ui">
    <div className="top-bar">
      <MusicController />
      <Dashboard {...props} />
    </div>
    <div className="bottom-bar">
      <Controls />
      <Stats />
    </div>
  </div>
);

export default GameUI;
