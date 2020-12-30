export const computeTop = (componentHeight) => {
  const top = componentHeight - (componentHeight / 100) * 10;
  return top;
};
