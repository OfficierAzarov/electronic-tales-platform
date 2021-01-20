export const computeWidth = (wantedElementWithInVw) => {
  const windowWidth = window.innerWidth;
  const vw = windowWidth / 100;
  const width = wantedElementWithInVw * vw;
  return width;
};

export const computeHeight = (wantedElementHeightInVh) => {
  const windowHeight = window.innerHeight;
  const vh = windowHeight / 100;
  const height = wantedElementHeightInVh * vh;
  return height;
};

export const computeLeft = (wantedElementWithRegardingWindowWidth) => {
  const windowWidth = window.innerWidth;
  const left = windowWidth / 2 - (windowWidth * wantedElementWithRegardingWindowWidth) / 2;
  return left;
};
