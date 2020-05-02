import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Stackpath = forwardRef(function Stackpath(
  { color = 'currentColor', size = 24, title = 'StackPath', ...others },
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
      <path d="M3.72 7.34C2.71 7.34 1.88 7.57 1.22 8.04C.559 8.5 .23 9.12 .23 9.88C.23 10.66 .506 11.26 1.06 11.67C1.61 12.09 2.46 12.47 3.6 12.83C4.15 13.03 4.53 13.21 4.74 13.39C4.96 13.56 5.06 13.81 5.06 14.13C5.06 14.41 4.96 14.64 4.74 14.81C4.53 15 4.2 15.08 3.77 15.08C3.2 15.08 2.77 14.96 2.5 14.74C2.2 14.5 2.06 14.14 2.06 13.62H.013L0 13.66C-.02 14.63 .346 15.37 1.1 15.89C1.85 16.41 2.74 16.66 3.77 16.66C4.79 16.66 5.61 16.44 6.23 16C6.85 15.54 7.17 14.91 7.17 14.12C7.17 13.33 6.91 12.72 6.39 12.27C5.86 11.82 5.09 11.44 4.06 11.14C3.39 10.89 2.94 10.69 2.69 10.53C2.45 10.37 2.33 10.16 2.33 9.9C2.33 9.62 2.45 9.39 2.69 9.21C2.93 9 3.26 8.92 3.69 8.92C4.12 8.92 4.46 9.04 4.7 9.26C4.95 9.5 5.07 9.78 5.07 10.14H7.11L7.12 10.11C7.15 9.3 6.83 8.63 6.19 8.11C5.55 7.59 4.73 7.34 3.72 7.34M8.5 7.4V16.58H10.65V13.43H11.95C13.04 13.43 13.9 13.16 14.54 12.6C15.18 12.05 15.5 11.32 15.5 10.42C15.5 9.5 15.18 8.79 14.54 8.23C13.9 7.67 13.04 7.4 11.95 7.4H8.5M18.11 7.4L14.93 16.59H16.92L20.18 7.4H18.11M21.93 7.4L18.75 16.59H20.74L24 7.4H21.93M10.65 9.04H11.95C12.41 9.04 12.77 9.17 13 9.43C13.25 9.69 13.37 10 13.37 10.43C13.37 10.83 13.25 11.16 13 11.41C12.77 11.67 12.41 11.79 11.95 11.79H10.65V9.04Z" />
    </svg>
  );
});

Stackpath.propTypes = {
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

export default Stackpath;
