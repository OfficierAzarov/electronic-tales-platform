export const computeTop = (componentHeight) => {
  console.log(componentHeight);
  const top = componentHeight - (componentHeight / 100) * 10;
  console.log(top);
  return top;
};
