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

export const placeElementAtBottomOfSection = (
  wantedSpaceBetweenElementAndNavInPx,
  mainNavHeightInVh,
  secondaryNavHeightInVh
) => {
  const windowHeight = window.innerHeight;
  const vh = windowHeight / 100;
  const mainNavHeight = mainNavHeightInVh * vh; // mainNavHeight is the nav at the bottom of the page
  const secondaryNavHeight = secondaryNavHeightInVh * vh; // mainNavHeight is the nav at the bottom of the page
  const buttonsContainerHeight = 10 * vh;
  const sectionHeight = 100 * vh - (mainNavHeight + secondaryNavHeight);
  console.log('sectionH', sectionHeight);
  console.log('buttonsContainerHeight', buttonsContainerHeight);
  console.log('wantedSpaceBetweenElementAndNavInVh', wantedSpaceBetweenElementAndNavInPx);
  const top = sectionHeight - wantedSpaceBetweenElementAndNavInPx;
  return top;
};

export const goUp = () => {
  window.scrollTo({ top: 0 });
};
