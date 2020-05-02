import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pluscodes = forwardRef(function Pluscodes(
  { color = 'currentColor', size = 24, title = 'Plus Codes', ...others },
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
      <path d="M2.578 14.583A2.58 2.58 0 010 12a2.58 2.58 0 012.578-2.584A2.58 2.58 0 015.156 12a2.58 2.58 0 01-2.578 2.583zm9.486-9.377a2.58 2.58 0 01-2.579-2.584A2.58 2.58 0 0112.064.038a2.58 2.58 0 012.578 2.584 2.58 2.58 0 01-2.578 2.584zm9.358 9.377A2.58 2.58 0 0118.844 12a2.58 2.58 0 012.578-2.584A2.58 2.58 0 0124 12a2.58 2.58 0 01-2.578 2.583zm-6.78 6.795a2.58 2.58 0 01-2.578 2.584 2.58 2.58 0 01-2.579-2.584 2.58 2.58 0 012.579-2.584 2.58 2.58 0 012.578 2.584m-2.578-6.795A2.58 2.58 0 019.485 12a2.58 2.58 0 012.579-2.584A2.58 2.58 0 0114.642 12a2.58 2.58 0 01-2.578 2.583Z" />
    </svg>
  );
});

Pluscodes.propTypes = {
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

export default Pluscodes;
