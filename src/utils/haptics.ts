export const hapticFeedback = {
  light: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  },
  medium: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(15);
    }
  },
  heavy: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(20);
    }
  }
}; 