export const computeTop = (componentHeight) => {
  const top = componentHeight - (componentHeight / 100) * 12;
  return top;
};

export const computeLeft = () => {
  console.log(window.innerWidth);
  const left = window.innerWidth * 0.82;
  return left;
};
