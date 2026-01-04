import React from 'react';
import IconButton from './IconButton';

const Toolbar = ({ isDay, onToggleDayNight, weather, onCycleWeather }) => (
  <div className="toolbar">
    <IconButton onClick={onToggleDayNight} className={isDay ? 'day' : 'night'}>
      {isDay ? '☀️' : '🌙'}
    </IconButton>
    <IconButton onClick={onCycleWeather}>
      {weather === 'clear' && '☀️'}
      {weather === 'rain' && '🌧️'}
      {weather === 'snow' && '❄️'}
    </IconButton>
  </div>
);

export default Toolbar;
