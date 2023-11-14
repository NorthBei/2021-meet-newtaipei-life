import './index.scss';

import clsx from 'clsx';
import React from 'react';
import { Modal } from 'react-bootstrap';

type DialogProps = {
  show: boolean;
  onClose?: () => void;
  id?: string;
  className?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const Dialog = (props: DialogProps) => {
  const { show, onClose, id = null, className = '', header = null, children, footer = null } = props;
  return (
    <Modal
      id={id}
      className="dialog-modal"
      show={show}
      onHide={onClose}
      contentClassName="dialog-content"
      backdrop="static"
      centered
    >
      <Modal.Header className="p-4" closeButton>
        {header}
      </Modal.Header>
      <Modal.Body className={clsx('px-4', className)}>{children}</Modal.Body>
      <Modal.Footer className="justify-content-center">{footer}</Modal.Footer>
    </Modal>
  );
};

export default Dialog;
