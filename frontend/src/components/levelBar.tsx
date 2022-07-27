import { useEffect, useState } from 'react';
import { LevelBarStyle } from '../styles/levelBarStyle';
import produce from 'immer';

export const LeveBar = () => {
  const [experiencPoints, setExperiencPoints] = useState({
    level: 1,
    have: 0,
    need: 300,
  });
  const [loadingWidth, setLoadingWidth] = useState(0);

  const levelUp = () => {
    setExperiencPoints(
      produce(experiencPoints, (draft) => {
        const newPoints = draft.have + 100 > draft.need ? draft.need : draft.have + 100;
        draft.have = newPoints;
      })
    );
  };

  const changeLevel = () => {
    setLoadingWidth(100);

    setTimeout(() => {
      setLoadingWidth(0);
      setExperiencPoints(
        produce(experiencPoints, (draft) => {
          draft.level++;
          draft.have = 0;
          draft.need += Math.floor((draft.need / 100) * 10);
        })
      );
    }, 2000);
  };

  useEffect(() => {
    if (experiencPoints.have >= experiencPoints.need) {
      changeLevel();
      return;
    }

    const newWidth = (experiencPoints.have * 100) / experiencPoints.need;

    setLoadingWidth(newWidth);

    console.log(loadingWidth);
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

      <button onClick={() => levelUp()}>Aumentar</button>
    </LevelBarStyle>
  );
};
