import React, { useState, useEffect } from "react";

import {
  ImageBackground,
  Container,
  Wall,
  Highway,
  Player,
  HitBox,
  PlayerContainer
} from "./styles";

import BlocM1 from "../../components/blocsM1";

import aFront1 from "../../assets/aFront1.png";
import aFront2 from "../../assets/aFront2.png";
import aUp2 from "../../assets/aUp2.png";
import aUp3 from "../../assets/aUp3.png";
import aDow2 from "../../assets/aDow2.png";
import aDow3 from "../../assets/aDow3.png";
import Stop from "../../assets/parado1.jpg";

import Riot from "../../assets/riot.mp4";

const Game = () => {
  const [gif, setGif] = useState(Stop);
  const [hitPosition, setHitPosition] = useState();
  const [play, setPlay] = useState(false);

  const start = () => {
    let hold = false;
    document.addEventListener("keyup", () => {
      setTimeout(() => {
        setGif(Stop);
        hold = false;
      }, 100);
    });
    document.addEventListener("keydown", e => {
      if (e.key === " ") {
        setPlay(true);
      }
      setHitPosition(e);
      if (!hold) {
        if (e.key === "w") {
          setTimeout(() => {
            setGif(aUp2);
            setTimeout(() => {
              setGif(aUp3);
              hold = true;
            }, 50);
          }, 0);
        } else if (e.key === "d") {
          setTimeout(() => {
            setGif(aFront1);
            setTimeout(() => {
              setGif(aFront2);
              hold = true;
            }, 100);
          }, 0);
        } else if (e.key === "s" || e.key === "a") {
          setTimeout(() => {
            setGif(aDow2);
            setTimeout(() => {
              setGif(aDow3);
              hold = true;
            }, 50);
          }, 0);
        }
      }
    });
  };

  useEffect(() => {
    const audio = document.getElementById("riotA");
    if (play) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [play]);

  useEffect(() => {
    start();
  }, []);

  return (
    <Container>
      <button onClick={() => setPlay(true)} type="button">
        Play
      </button>
      {play && (
        <Highway>
          <BlocM1 hitPosition={hitPosition} />
          <PlayerContainer>
            <Player src={gif} alt="atack" />
            <HitBox />
          </PlayerContainer>
        </Highway>
      )}
      <Wall />
      <ImageBackground width="400" src={Riot} id="riotA" />
    </Container>
  );
};

export default Game;
