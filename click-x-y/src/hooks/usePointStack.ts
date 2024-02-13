import { useState } from 'react';

type TPoint = {
  x: number;
  y: number;
};

const usePointStack = () => {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [popped, setPopped] = useState<TPoint[]>([]);

  const pushPoint = (point: TPoint) => {
    setPoints([...points, point]);
    setPopped([]);
  };

  const popPoint = () => {
    if (points.length === 0) return;
    const lastPoint = points[points.length - 1];
    setPoints(points.slice(0, points.length - 1));
    setPopped([...popped, lastPoint]);
    return lastPoint;
  };

  const redoPoint = () => {
    if (popped.length === 0) return;
    const lastPoppedPoint = popped[popped.length - 1];
    setPoints([...points, lastPoppedPoint]);
    setPopped(popped.slice(0, popped.length - 1));
  };

  return { points, popped, pushPoint, popPoint, redoPoint };
};

export default usePointStack;
