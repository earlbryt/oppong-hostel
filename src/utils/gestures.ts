import { PanInfo } from 'framer-motion';

export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const dragConstraints = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export const handleDragEnd = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo,
  onClose: () => void
) => {
  const swipe = swipePower(info.offset.y, info.velocity.y);

  if (swipe > swipeConfidenceThreshold) {
    onClose();
  }
}; 