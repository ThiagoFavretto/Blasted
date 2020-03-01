/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";

import blocsM from "../../songs/riot";

import { BlocM, Highway } from "./styles";

const BlocM1 = ({ hitPosition }) => {
  const [id, setId] = useState(0);
  const [timeoutCount, setTimeoutCount] = useState(null);
  const [miss, setMiss] = useState([]);

  const [contador, setContador] = useState(0);
  const countRef = useRef(contador);
  countRef.current = contador;

  const contadorFunc = () => {
    if (miss.length === 0) {
      setId(id + 1);
    } else {
      const ax = miss;
      ax.pop();
      setMiss(ax);
    }
    setContador(contador + 1);
  };

  useEffect(() => {
    contadorFunc();
  }, [timeoutCount]);

  useEffect(() => {
    blocsM.map(i => {
      return setTimeout(() => {
        document.getElementById(i.i).style.display = "none";
        setTimeoutCount(countRef.current);
      }, 3000 + i.delay * 1000);
    });
  }, []);

  useEffect(() => {
    console.log(id);
    console.log(document.getElementById(1).getBoundingClientRect().x);
    if (hitPosition && id <= blocsM.length) {
      const blocM = blocsM[id - 1];
      const direction = blocM.side;
      if (
        (hitPosition.key === "w" && direction === "u") ||
        (hitPosition.key === "d" && direction === "f") ||
        ((hitPosition.key === "s" || hitPosition.key === "a") &&
          direction === "d")
      ) {
        const position = document.getElementById(id).getBoundingClientRect().x;
        if (position >= 85 && position <= 155) {
          const myBlock = document.getElementById(id);
          if (blocM.type === 1) {
            myBlock.style.display = "none";
            setMiss([...miss, 1]);
            setId(id + 1);
          } else {
            const width = myBlock.offsetWidth;
            const left = myBlock.offsetLeft;

            if (width < 40) {
              myBlock.style.display = "none";
              setMiss([...miss, 1]);
              setId(id + 1);
            } else {
              myBlock.style.width = `${width - 40}px`;
              myBlock.style.left = `${left}px`;
            }
            console.log("Tamanho", width);
          }
        }
      }
    }
  }, [hitPosition]);

  return (
    <Highway>
      {blocsM.map(o => (
        <BlocM
          id={o.i}
          key={o.i}
          color={o.color}
          top={o.top}
          delay={`${o.delay}s`}
          side={o.side}
          type={o.type}
        />
      ))}
    </Highway>
  );
};

export default BlocM1;
