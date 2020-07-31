import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFielWrapper = styled.input`
`;

const Label = styled.input`
`;

const Input = styled.input`
`;

function FormField({
  label, type, name, value, handleChange,
}) {
  const fieldId = `id_${name}`;
  const tag = (type === 'textarea') ? 'textarea' : 'text';

  return (
    <FormFielWrapper>
      <Label htmlFor={fieldId}>
        {label}
        :
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </Label>
    </FormFielWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  handleChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FormField;
