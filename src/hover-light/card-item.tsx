import { cn } from '../utils/utils.ts';
import LightItem from './light-item.tsx';
import React, { useRef, useState } from 'react';

const CardItem = () => {
  const cardRef = useRef<any>(null);
  const lightRef = useRef<any>(null);
  const mouse_move = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const cardDom = cardRef.current;
    const lightDom = lightRef.current;
    if (cardDom && lightDom) {
      const { x, y } = cardDom.getBoundingClientRect();
      const { width, height } = lightDom.getBoundingClientRect();
      const left = clientX - x - width / 2;
      const top = clientY - y - height / 2;
      lightDom.style.left = `${left}px`;
      lightDom.style.top = `${top}px`;

      const maxXRotation = 10;
      const maxYRotation = 10;

      const rangeX = 200 / 2;
      const rangeY = 200 / 2;

      const rotateX = ((clientX - x - rangeY) / rangeY) * maxXRotation;
      const rotateY = -1 * ((clientY - y - rangeX) / rangeX) * maxYRotation;
      cardDom.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const mouse_leave = () => {
    const cardDom = cardRef.current;

    cardDom.style.transform = `perspective(1000px) rotateX(${0}deg) rotateY(${0}deg)`;
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'w-full h-[248px] rounded-md bg-[#1c1c1f] shadow-md border-[1px solid rgba(255,255,255,0.1)]',
        'group',
        'cursor-pointer',
        'relative',
        'hover:overflow-hidden',
      )}
      onMouseMove={(event) => {
        mouse_move(event);
      }}
      onMouseLeave={() => {
        mouse_leave();
      }}
      // onMouseEnter={mouse_enter}
    >
      <LightItem
        onRef={lightRef}
      />
    </div>
  );
};

export default CardItem;
