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

export const computeLeft = (wantedElementWidthRegardingWindowWidth) => {
  const windowWidth = window.innerWidth;
  const left = windowWidth / 2 - (windowWidth * wantedElementWidthRegardingWindowWidth) / 2;
  return left;
};

export const placeElementAtBottomOfSection = (wantedSpaceBetweenElementAndNavInVh) => {
  const windowHeight = window.innerHeight;
  const vh = windowHeight / 100;
  const navHeight = 10 * vh;
  const buttonsContainerHeight = 10 * vh;
  const sectionHeight = windowHeight - navHeight;
  const top = sectionHeight - buttonsContainerHeight - wantedSpaceBetweenElementAndNavInVh;
  return top;
};

export const goUp = () => {
  window.scrollTo({ top: 0 });
};
