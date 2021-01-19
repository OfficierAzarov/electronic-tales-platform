export const computeWidth = (wantedElementWithRegardingWindowWidth) => {
  const windowWidth = window.innerWidth;
  const width = windowWidth * wantedElementWithRegardingWindowWidth;
  return width;
};

export const computeHeight = (
  wantedElementWithRegardingWindowWidth,
  wantedElementHeightRegardingElementWidth
) => {
  const height =
    computeWidth(wantedElementWithRegardingWindowWidth) * wantedElementHeightRegardingElementWidth;
  return height;
};

export const computeLeft = (wantedElementWithRegardingWindowWidth) => {
  const windowWidth = window.innerWidth;
  const left = windowWidth / 2 - (windowWidth * wantedElementWithRegardingWindowWidth) / 2;
  return left;
};
