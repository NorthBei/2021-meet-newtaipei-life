import { Area } from 'react-easy-crop';

const createImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });
};

const IMAGE_SIZE = 400;

export const getCroppedImg = async (imageSrc: string, crop: Area): Promise<Blob | null> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  /* setting canvas width & height allows us to 
  resize from the original image resolution */
  canvas.width = IMAGE_SIZE;
  canvas.height = IMAGE_SIZE;

  ctx?.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/jpeg');
  });
};
