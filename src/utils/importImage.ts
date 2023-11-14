const importImage = (path: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const imageSrc = require(`@/images/${path}`).default.src;
  return imageSrc as string;
};
export default importImage;
