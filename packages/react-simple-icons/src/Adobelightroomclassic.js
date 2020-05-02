import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Adobelightroomclassic = forwardRef(function Adobelightroomclassic(
  { color = 'currentColor', size = 24, title = 'Adobe Lightroom Classic', ...others },
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
      <path d="M6.649 16.625c-.116 0-.149-.05-.149-.148V5.732c0-.082.033-.132.116-.132H8.2c.083 0 .1.033.1.115v9.26h4.125c.083 0 .106.033.09.115l-.248 1.419a.131.131 0 0 1-.148.116zm7.4-6.476c0-.116 0-.413-.049-.974 0-.082.018-.1.084-.132a10.556 10.556 0 0 1 3.676-.693c.082 0 .115.017.115.1V9.9c0 .083-.033.1-.115.1-.627-.033-1.563.05-1.91.2v6.311c0 .083-.033.116-.115.116h-1.569c-.083 0-.116-.033-.116-.116zM0 .3v23.4h24V.3zm1 1h22v21.4H1Z" />
    </svg>
  );
});

Adobelightroomclassic.propTypes = {
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

export default Adobelightroomclassic;
