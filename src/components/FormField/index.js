import React from 'react';

function FormField({label, type, name, value, handleChange}) {
  return (
    <div>
      <label>
        {label}: 
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default FormField;