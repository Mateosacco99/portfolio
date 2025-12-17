import React from 'react';

/**
 * Generic Card Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle
 * @param {React.ReactNode} props.footer - Card footer content
 * @param {boolean} props.hoverable - Whether card should have hover effect
 * @param {Function} props.onClick - Click handler
 */
const Card = ({
  children,
  className = '',
  title,
  subtitle,
  footer,
  hoverable = false,
  onClick,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverStyles = hoverable ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : '';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-200">
          {title && <h3 className="text-xl font-semibold text-gray-800">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      
      <div className="px-6 py-4">
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
