import './ChipRadio.scss';

import clsx from 'clsx';
import React from 'react';
import { Form, FormCheckProps } from 'react-bootstrap';

type ChipRadioProps = {
  id: string;
  label: string;
  checked: boolean;
  color?: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & FormCheckProps;

const ChipRadio = (props: ChipRadioProps) => {
  const { id, label, checked, color = '', className, onChange, ...otherProps } = props;

  return (
    <Form.Check id={id} className={clsx('chip-checkbox fw-bold', className)}>
      <Form.Check.Input {...otherProps} type="radio" onChange={onChange} />
      <Form.Check.Label htmlFor={id} className={clsx({ active: checked }, color)}>
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

export default ChipRadio;
