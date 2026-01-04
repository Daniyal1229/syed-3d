import { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import useStore from '../../store/useStore';

const Speed = () => {
  const { speed } = useStore();

  const displayedSpeed = useMemo(() => {
    return Math.abs(speed * 3.6).toFixed(0);
  }, [speed]);

  return (
    <div className="speed-container">
      <div className="speed-value">{displayedSpeed}</div>
      <div className="speed-unit">km/h</div>
    </div>
  );
};

export default Speed;
