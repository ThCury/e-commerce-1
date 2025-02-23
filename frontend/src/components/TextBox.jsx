// TextBox.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

export default function TextBox({
  controlId,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  as,     // caso seja "textarea"
  rows,   // caso precise de "rows"
  ...props
}) {
  return (
    <Form.Group controlId={controlId} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        as={as}
        rows={rows}
        {...props}
      />
    </Form.Group>
  );
}
