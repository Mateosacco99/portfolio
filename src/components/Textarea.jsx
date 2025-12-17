import React from 'react';

/**
 * Generic Textarea Component
 * @param {Object} props
 * @param {string} props.label - Textarea label
 * @param {string} props.placeholder - Textarea placeholder
 * @param {string} props.value - Textarea value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Whether textarea is required
 * @param {boolean} props.disabled - Whether textarea is disabled
 * @param {number} props.rows - Number of rows
 * @param {string} props.className - Additional CSS classes
 */
const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={textareaId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-4 py-2 border rounded-lg resize-none
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

export default Textarea;
