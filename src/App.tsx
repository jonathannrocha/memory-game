import { useEffect, useState } from "react";

import * as C from "./app.style";

import logoImg from "./assets/devmemory_logo.png";
import { Button } from "./components/button";
import { InfoItem } from "./components/infoItem";

import restart from "./assets/svgs/restart.svg";
import { Gridtype } from "./@types/gridType";
import { itens } from "./data/itens";
import { Card } from "./components/card";
import { formatTimer } from "./helpers/timer";

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItens, setGridItens] = useState<Gridtype[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if (showCount === 2) {
      setMoveCount((moveCount) => moveCount + 1);
      const opened = gridItens.filter((grid) => grid.show);

      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          const tmpGrid = [...gridItens];
          for (let i in tmpGrid) {
            if (tmpGrid[i].show) {
              tmpGrid[i].show = false;
              tmpGrid[i].permanentShow = true;
            }
          }
          setGridItens(tmpGrid);
          setShowCount(0);
        } else {
          const tmpGrid = [...gridItens];

          setTimeout(() => {
            for (let i in tmpGrid) {
              if (tmpGrid[i].show) {
                tmpGrid[i].show = false;
              }
            }

            setGridItens(tmpGrid);
            setShowCount(0);
          }, 500);
        }
      }
    }
  }, [gridItens, showCount]);

  useEffect(() => {
    console.log("fm");
    if (moveCount > 0 && gridItens.every((i) => i.permanentShow)) {
      console.log("fm");
      setPlaying(false);
    }
  }, [moveCount, gridItens]);

  function resetAndCreateGrid() {
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);

    let tempGrid: Gridtype[] = [];

    for (let i = 0; i < itens.length; i++) {
      for (let j = 0; j < 2; j++) {
        tempGrid.push({ item: i, permanentShow: false, show: false });
      }
    }

    for (let item = tempGrid.length - 1; item > 0; item--) {
      const j = Math.floor(Math.random() * (item + 1));
      [tempGrid[item], tempGrid[j]] = [tempGrid[j], tempGrid[item]];
    }

    setGridItens(tempGrid);
    setPlaying(true);
  }

  function handleItemClick(item: number) {
    if (playing && item !== null && showCount < 2) {
      let tmpItems = [...gridItens];

      if (
        tmpItems[item].permanentShow === false &&
        tmpItems[item].show === false
      ) {
        tmpItems[item].show = true;
        setShowCount(showCount + 1);
      }
    }
  }

  return (
    <C.Contanier>
      <C.info>
        <C.logLink>
          <img src={logoImg} width={200} alt="Logo" />
        </C.logLink>

        <C.infoArea>
          <InfoItem label="Tempo" value={formatTimer(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </C.infoArea>

        <Button
          icon={restart}
          label={"Reiniciar"}
          onClick={resetAndCreateGrid}
        />
      </C.info>
      <C.cardArea>
        <C.CardGrid>
          {gridItens.map((item, index) => (
            <Card
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.CardGrid>
      </C.cardArea>
    </C.Contanier>
  );
}

export default App;
