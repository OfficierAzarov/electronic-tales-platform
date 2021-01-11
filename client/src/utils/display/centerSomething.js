export const computeWidth = (wantedHTMLElementProportion) => {
  const windowWidth = window.innerWidth;
  const width = windowWidth * wantedHTMLElementProportion;
  return width;
};

export const computeLeft = (wantedHTMLElementProportion) => {
  const windowWidth = window.innerWidth;
  const left = windowWidth / 2 - (windowWidth * wantedHTMLElementProportion) / 2;
  return left;
};
