import { useState, useEffect } from 'react';
import useStore from '../../store/useStore';
import InfoPopup from './InfoPopup';
import WelcomeSign from './WelcomeSign';
import GameUI from './GameUI';
import '../../styles/UI.css';

export default function UI() {
  const { showPopup, isDay, weatherEffect, toggleDayNight, setWeatherEffect } = useStore();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const cycleWeather = () => {
    const weathers = ['clear', 'rain', 'snow'];
    const currentIndex = weathers.indexOf(weatherEffect);
    const nextIndex = (currentIndex + 1) % weathers.length;
    setWeatherEffect(weathers[nextIndex]);
  };

  return (
    <>
      {showWelcome && <WelcomeSign />}
      <GameUI
        isDay={isDay}
        onToggleDayNight={toggleDayNight}
        weather={weatherEffect}
        onCycleWeather={cycleWeather}
      />
      {showPopup && <InfoPopup />}
    </>
  );
}
