import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Seat = forwardRef(function Seat({ color = 'currentColor', size = 24, title = 'SEAT', ...others }, ref) {
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
      <path d="M0 10.325l23.98 4.46c-.021.657-.062 2.712-.103 3.903-.041 1.418-.35 2.281-.925 2.815-.801.72-1.747.884-4.007 1.007-5.219.288-10.54.247-17.219-.226-.699-.04-.966-.185-1.089-.267-.288-.205-.329-.431-.411-1.603-.062-.801-.164-3.123-.205-3.904 3.102.206 7.849.37 11.712.37.966 0 3.493.02 4.171.02.534 0 1.233-.143 1.582-.698L0 13.222zm.02-1.253c.021-.76.062-2.65.103-3.76.041-1.418.35-2.281.925-2.815.801-.72 1.747-.884 4.007-1.007 5.219-.288 10.54-.247 17.219.226.699.04.966.185 1.089.267.288.205.329.431.411 1.603.041.678.144 2.486.185 3.472-2.301-.123-6.206-.308-9.596-.35-3.39-.04-6.452.021-6.822.063-.74.102-1.089.452-1.192.595L24 10.634v2.568Z" />
    </svg>
  );
});

Seat.propTypes = {
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

export default Seat;
