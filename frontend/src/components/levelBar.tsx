import { useContext, useEffect, useState } from 'react';
import { LevelBarStyle } from '../styles/levelBarStyle';
import produce from 'immer';
import { Alert } from './alert';
import { LevelContext } from '../context/leveContext';
import { useAlertTimer } from '../utils/hooks/sendAlertTimer';

export const LeveBar = () => {
  const { experiencPoints, setExperiencPoints } = useContext(LevelContext);
  const [loadingWidth, setLoadingWidth] = useState(0);
  const { alert, startAlertTimer } = useAlertTimer(0);

  const changeLevel = () => {
    setLoadingWidth(0);
    startAlertTimer();

    setExperiencPoints(
      produce(experiencPoints, (draft) => {
        draft.level++;
        draft.have = 0;
        draft.need += Math.floor((draft.need / 100) * 10);
      })
    );
  };

  const changeBarWidth = () => {
    const newWidth = (experiencPoints.have * 100) / experiencPoints.need;
    setLoadingWidth(newWidth);
  };

  useEffect(() => {
    changeBarWidth();

    if (experiencPoints.have >= experiencPoints.need) {
      changeLevel();
    }
  }, [experiencPoints]);

  return (
    <LevelBarStyle width={loadingWidth}>
      <div>
        <h2 className="level">{experiencPoints.level}</h2>
      </div>

      <p>
        {experiencPoints.have} xp / {experiencPoints.need} xp
      </p>
      <div className="levelbar"></div>

      {alert && <Alert>&#x1F680; Você subiu um nivel !</Alert>}
    </LevelBarStyle>
  );
};
