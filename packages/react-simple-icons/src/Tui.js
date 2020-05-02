import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tui = forwardRef(function Tui({ color = 'currentColor', size = 24, title = 'TUI', ...others }, ref) {
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
      <path d="M 24,4.5167394 A 2.1169833,2.1169833 0 0 1 21.883017,6.6337226 2.1169833,2.1169833 0 0 1 19.766033,4.5167394 2.1169833,2.1169833 0 0 1 21.883017,2.3997561 2.1169833,2.1169833 0 0 1 24,4.5167394 Z M 1.1397405,7.7475086 H 6.8452135 C 7.4094414,7.7475086 7.8258416,7.9246762 7.9917247,8.7191088 8.1767914,9.6026898 8.1045702,10.217699 7.1058868,10.287663 L 5.3150273,10.419692 C 6.6330638,18.749954 14.342674,21.465019 18.537145,12.492666 19.232274,11.007618 19.459093,10.737917 20.219673,10.926369 21.251081,11.182529 21.392138,11.716288 20.896746,13.209235 17.273274,24.265846 5.0780515,25.375118 2.685725,10.604759 L 1.2311454,10.709706 C 0.04626669,10.79434 0,9.7956558 0,9.2404558 0,8.1413397 0.40737258,7.7475086 1.1397405,7.7475086 Z" />
    </svg>
  );
});

Tui.propTypes = {
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

export default Tui;
