// https://stackoverflow.com/a/34166661
export const viewportToPixels = (value) => {
  var parts = value.match(/([0-9\.]+)(vh|vw)/);
  var q = Number(parts[1]);
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]];
  return side * (q / 100);
};
