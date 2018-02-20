/**
 * Created by ediaz on 16/2/18.
 */

export const convertMillistoTimeString = (millis)  => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const trickedSizeThumbnail = (imageSrc) => imageSrc.replace('100x100bb', '276x0w');

export default {};
