import React from 'react';

/**
 * Generic Table Component
 * @param {Object} props
 * @param {Array} props.columns - Array of column objects with 'key', 'label', and optional 'render' function
 * @param {Array} props.data - Array of data objects
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.striped - Whether to show striped rows
 * @param {boolean} props.hoverable - Whether rows should have hover effect
 */
const Table = ({
  columns = [],
  data = [],
  className = '',
  striped = false,
  hoverable = false,
  ...props
}) => {
  return (
    <div className={`w-full overflow-x-auto ${className}`} {...props}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`
                ${striped && rowIndex % 2 === 1 ? 'bg-gray-50' : ''}
                ${hoverable ? 'hover:bg-gray-100 transition-colors duration-150' : ''}
              `}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No data available
        </div>
      )}
    </div>
  );
};

export default Table;
