import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Douban = forwardRef(function Douban({ color = 'currentColor', size = 24, title = 'Douban', ...others }, ref) {
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
      <path d="M.643.92v2.412h22.714V.92H.643zm1.974 4.926v9.42h18.764v-9.42H2.617zm2.72 2.408H18.69v4.605H5.338V8.254zm1.657 7.412l-2.512.938c1.037 1.461 1.87 2.825 2.512 4.091H0v2.385h24v-2.385h-6.678c.818-1.176 1.589-2.543 2.303-4.091l-2.73-.938a29.952 29.952 0 01-2.479 5.03h-4.75c-.786-1.962-1.677-3.641-2.672-5.03Z" />
    </svg>
  );
});

Douban.propTypes = {
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

export default Douban;
