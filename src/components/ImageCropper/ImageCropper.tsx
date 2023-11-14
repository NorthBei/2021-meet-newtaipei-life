import React, { useCallback, useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';

import { getCroppedImg } from './cropImage';

type ImageCropperProps = {
  onChange: (blob: Blob | null) => void;
  imageSrc: string;
};

const ImageCropper = (props: ImageCropperProps) => {
  const { onChange, imageSrc } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  /* onCropComplete() will occur each time the user modifies the cropped area, 
  which isn't ideal. A better implementation would be getting the blob 
  only when the user hits the submit button, but this works for now  */
  const onCropComplete = useCallback(
    async (croppedArea: Area, croppedAreaPixels: Area) => {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onChange(croppedImage);
    },
    [imageSrc, onChange]
  );

  return (
    /* need to have a parent with `position: relative` to prevent cropper taking up whole page */
    <div className="position-relative cropper" style={{ height: '400px', maxHeight: '100vh' }}>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  );
};

export default ImageCropper;
