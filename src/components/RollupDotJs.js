import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RollupDotJs = forwardRef(function RollupDotJs(
  { color = 'currentColor', size = 24, title = 'rollup.js', ...others },
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
      <path d="M3.42.0002a.37.37 0 00-.369.37V19.885c.577-1.488 1.557-3.6168 3.1378-6.5297C11.8885 2.876 12.6355 1.8191 15.6043 1.8191c1.56 0 3.1338.704 4.1518 1.9549A7.9616 7.9616 0 0013.1014.0002zM16.1393 2.544c-1.19.01-2.257.466-2.6979 1.498-.967 2.2558 1.624 4.7667 2.7569 4.5677 1.4419-.255-.255-3.5628-.255-3.5628 2.2049 4.1558 1.6969 2.8838-2.2899 6.6996C9.6666 15.5623 5.596 23.6188 5.002 23.9568a.477.477 0 01-.08.043H20.558a.373.373 0 00.33-.538l-4.0878-8.0915a.37.37 0 01.144-.488 7.9596 7.9596 0 004.0048-6.9126c0-1.4249-.373-2.7608-1.03-3.9198-.9269-.9519-2.4298-1.5159-3.7787-1.5059z" />
    </svg>
  );
});

RollupDotJs.propTypes = {
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

export default RollupDotJs;
