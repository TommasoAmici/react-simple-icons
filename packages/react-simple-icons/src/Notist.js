import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Notist = forwardRef(function Notist({ color = 'currentColor', size = 24, title = 'Notist', ...others }, ref) {
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
      <path d="M5.934 3.801c-1.099.11-2.288.4-3.038.74-1.069.499-1.259.869-.909 1.868.36 1.04.19 2.308-1 7.505C.109 17.79-.04 18.6.01 19.32c.04.47.09.63.29.79.22.179.33.189 1.688.129 3.408-.17 4.057-.22 4.267-.34.24-.13.25-.2.44-1.758.32-2.868 1.788-7.155 3.027-8.894 1.06-1.479 2.359-2.128 3.098-1.549.78.62.76 1.559-.13 4.147-.68 1.999-.79 2.428-.909 3.617-.15 1.46.13 2.489.96 3.408.849.94 2.118 1.409 3.846 1.409 1.64 0 2.968-.41 4.377-1.339 1.29-.86 2.828-2.608 3.008-3.428.1-.41-.07-.859-.35-.969-.41-.15-.65-.04-1.389.63-.859.78-1.249.949-2.008.889-1.01-.08-1.45-.66-1.45-1.919 0-.899.09-1.349.65-3.317.79-2.728.93-3.967.58-5.027-.57-1.768-2.978-2.538-5.646-1.798-1.449.41-3.238 1.449-4.597 2.688-.38.34-.68.59-.68.56 0-.02.07-.35.16-.72.34-1.499.2-2.248-.479-2.598-.39-.2-1.599-.26-2.828-.13z" />
    </svg>
  );
});

Notist.propTypes = {
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

export default Notist;
