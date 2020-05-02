import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Aventrix = forwardRef(function Aventrix(
  { color = 'currentColor', size = 24, title = 'Aventrix', ...others },
  ref
) {
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
      <path d="M12 24C5.372 24 0 18.628 0 12S5.372 0 12 0s12 5.372 12 12-5.372 12-12 12zm5.371-8.138c-.23.161-.644.322-1.081.322-.46 0-.805-.184-.805-.851v-5.011c0-3.149-1.403-4.321-4.139-4.321-1.517 0-2.875.367-3.656.827-.322.529-.391 1.425-.23 2a6.782 6.782 0 0 1 3.518-1.012c1.793 0 2.53.805 2.53 2.713v.598c-.667-.275-1.541-.367-2.299-.367-2.599 0-4.599 1.103-4.599 3.793 0 2.506 1.724 3.448 3.702 3.448 1.518 0 2.575-.483 3.242-1.357h.092c.184.851.782 1.357 1.816 1.357h.009c.557 0 1.077-.154 1.522-.421l-.013.007c.299-.414.437-1.126.391-1.724zm-6.554.321c-1.241 0-2.207-.529-2.207-1.724 0-1.219.989-2.069 2.897-2.069a5.76 5.76 0 0 1 2 .345v2.253c-.598.874-1.702 1.195-2.69 1.195z" />
    </svg>
  );
});

Aventrix.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default Aventrix;
