'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Overlay, OverlayProps, Tooltip } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

type CoptText = {
  children: React.ReactNode;
  direction?: OverlayProps['placement'];
};

const CopyText = (props: CoptText) => {
  const { children, direction = 'left' } = props;
  const [url, setUrl] = useState('');
  const [show, setShow] = useState(false);
  const onCopyElement = useRef(null);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const onCopy = useCallback(() => {
    if (navigator.share) {
      navigator.share({ url });
    } else {
      setShow(true);
      setTimeout(() => setShow(false), 2000);
    }
  }, [url]);

  return (
    <>
      <CopyToClipboard text={url} onCopy={onCopy}>
        <span ref={onCopyElement}>{children}</span>
      </CopyToClipboard>
      <Overlay target={onCopyElement.current} show={show} placement={direction}>
        {(props) => (
          <Tooltip id="tooltips-basic" {...props}>
            網址已經複製囉
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

export default CopyText;
