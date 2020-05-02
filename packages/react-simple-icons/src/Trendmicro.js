import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Trendmicro = forwardRef(function Trendmicro(
  { color = 'currentColor', size = 24, title = 'Trend Micro', ...others },
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
      <path d="M12 0C5.38 0 0 5.37 0 12C0 14.45 .734 16.72 2 18.62C1.5 17.45 1.58 15.94 2.19 14.29L2.2 14.25L2.25 14.12L2.3 14L2.32 13.95C2.54 13.4 2.82 12.83 3.16 12.26C3.21 12.16 3.25 12.07 3.3 12L1.86 12L2.21 11.21C3.4 10.88 5.38 10.22 7.27 8.39L7.32 8.39H8.32L7.03 11.14L9.1 11.14L8.72 11.96L6.66 11.96S5.69 13.9 5.36 15.28C5.11 16.82 5.36 18 6.74 18.41C7.59 18.67 8.66 18.61 9.81 18.29C12.5 17.45 15.34 15.62 17.43 13.18C20.87 9.19 20.94 5.1 17.58 4.05C15.43 3.38 12.39 4.13 9.58 5.8C13.08 3.54 16.94 2.5 19.59 3.31C20.09 3.46 20.53 3.68 20.89 3.94A11.97 11.97 0 0 0 12 0M22.17 5.63C23 7.81 21.97 11.07 19.2 14.29C15.04 19.13 8.47 22.05 4.5 20.83A4.46 4.46 0 0 1 3.24 20.21A11.96 11.96 0 0 0 12 24C18.63 24 24 18.63 24 12C24 9.66 23.33 7.5 22.17 5.63Z" />
    </svg>
  );
});

Trendmicro.propTypes = {
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

export default Trendmicro;
