import React from 'react';

/**
 * Generic Input Component
 * @param {Object} props
 * @param {string} props.type - Input type
 * @param {string} props.label - Input label
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Whether input is required
 * @param {boolean} props.disabled - Whether input is disabled
 * @param {string} props.className - Additional CSS classes
 */
const Input = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`
          w-full px-4 py-2 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
