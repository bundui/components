"use client";

import React, { useState, useCallback, useMemo, ReactNode } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";

type FlipCardProps = {
  children: ReactNode[];
  stackOffset?: number;
  stackRotation?: number;
  dragThreshold?: number;
  borderRadius?: number;
  shadowIntensity?: number;
};

export default function FlipCard({
  children,
  stackOffset = 20,
  stackRotation = 8,
  dragThreshold = 120,
  borderRadius = 10,
  shadowIntensity = 0.2
}: FlipCardProps) {
  const childCount = React.Children.count(children);
  const [cardOrder, setCardOrder] = useState(() => Array.from({ length: childCount }, (_, i) => i));

  const getCardTransform = useCallback(
    (index: number, childIndex: number) => {
      const stackPosition = cardOrder.indexOf(childIndex);
      const positionFromBottom = cardOrder.length - 1 - stackPosition;

      return {
        zIndex: stackPosition,
        y: -positionFromBottom * stackOffset,
        rotate: positionFromBottom * stackRotation,
        scale: 1 - positionFromBottom * 0.02,
        opacity: 1
      };
    },
    [cardOrder, stackOffset, stackRotation]
  );

  const handleDragEnd = useCallback(
    (event: any, info: PanInfo, cardIndex: number) => {
      const dragDistance = Math.abs(info.offset.x) + Math.abs(info.offset.y);
      const velocity = Math.abs(info.velocity.x) + Math.abs(info.velocity.y);

      if (dragDistance > dragThreshold || velocity > 800) {
        setCardOrder((prevOrder) => {
          const newOrder = [...prevOrder];
          const draggedCardPosition = newOrder.indexOf(cardIndex);
          const draggedCard = newOrder.splice(draggedCardPosition, 1)[0];
          newOrder.unshift(draggedCard);
          return newOrder;
        });
      }
    },
    [dragThreshold]
  );

  const cardVariants = {
    initial: (custom: any) => ({ ...custom, x: 0, y: custom.y }),
    animate: (custom: any) => ({
      ...custom,
      x: 0,
      y: custom.y,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 500,
        mass: 0.5,
        restDelta: 0.01,
        restSpeed: 0.01
      }
    }),
    drag: {
      scale: 1.05,
      rotate: 0,
      transition: { duration: 0.05 }
    }
  };

  const renderedCards = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      const transform = getCardTransform(index, index);
      const isTopCard = cardOrder.indexOf(index) === cardOrder.length - 1;

      return (
        <motion.div
          key={`card-${index}`}
          custom={transform}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileDrag="drag"
          drag={isTopCard}
          dragConstraints={{
            top: -150,
            bottom: 150,
            left: -150,
            right: 150
          }}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          dragTransition={{
            power: 0.3,
            timeConstant: 125,
            bounceStiffness: 500,
            bounceDamping: 30
          }}
          onDragEnd={(event, info) => handleDragEnd(event, info, index)}
          className={`absolute overflow-hidden ${isTopCard ? "cursor-grab" : "cursor-default"}`}
          style={{
            borderRadius,
            zIndex: transform.zIndex,
            boxShadow: `0px ${4 + transform.zIndex * 2}px ${
              8 + transform.zIndex * 4
            }px rgba(0,0,0,${shadowIntensity})`
          }}>
          {child}
        </motion.div>
      );
    });
  }, [children, cardOrder, borderRadius, shadowIntensity, getCardTransform]);

  return <AnimatePresence>{renderedCards}</AnimatePresence>;
}
