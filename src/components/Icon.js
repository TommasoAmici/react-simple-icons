import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Icon = forwardRef(function Icon({ color = 'currentColor', size = 24, title = 'ICON', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M21.6 0a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zm-9.58 2.38c-5.3 0-9.6 4.3-9.6 9.6 0 2.14.7 4.12 1.9 5.72l2.6-2.6C6.32 14.22 6 13.14 6 12c0-3.32 2.68-6 6-6 1.14 0 2.22.32 3.14.88l2.6-2.6a9.626 9.626 0 0 0-5.72-1.9zm7.68 3.9l-2.6 2.6c.56.92.88 1.98.88 3.14 0 3.32-2.68 6-6 6-1.14 0-2.22-.32-3.14-.88l-2.6 2.6c1.6 1.18 3.58 1.9 5.72 1.9 5.3 0 9.6-4.3 9.6-9.6.04-2.18-.66-4.16-1.86-5.76zM2.4 19.2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z" />
    </svg>
  );
});

Icon.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Icon;
