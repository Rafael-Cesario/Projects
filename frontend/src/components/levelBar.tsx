import { useContext, useEffect, useState } from 'react';
import { LevelBarStyle } from '../styles/levelBarStyle';
import produce from 'immer';
import { Alert } from './alert';
import { LevelContext } from '../context/leveContext';

export const LeveBar = () => {
  const { experiencPoints, setExperiencPoints } = useContext(LevelContext);
  const [loadingWidth, setLoadingWidth] = useState(0);
  const [haveChangedlevel, setHaveChangedLevel] = useState(false);

  const changeLevel = () => {
    setLoadingWidth(0);
    setHaveChangedLevel(true);

    setExperiencPoints(
      produce(experiencPoints, (draft) => {
        draft.level++;
        draft.have = 0;
        draft.need += Math.floor((draft.need / 100) * 10);
      })
    );

    setTimeout(() => {
      setHaveChangedLevel(false);
    }, 3000);
  };

  useEffect(() => {
    const newWidth = (experiencPoints.have * 100) / experiencPoints.need;
    setLoadingWidth(newWidth);

    if (experiencPoints.have >= experiencPoints.need) {
      changeLevel();
      return;
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

      {haveChangedlevel && <Alert>&#x1F680; Você subiu um nivel !</Alert>}
    </LevelBarStyle>
  );
};
