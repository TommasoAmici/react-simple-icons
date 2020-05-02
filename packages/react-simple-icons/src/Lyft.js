import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lyft = forwardRef(function Lyft({ color = 'currentColor', size = 24, title = 'Lyft', ...others }, ref) {
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
      <path d="M24 11.122v-3.512h-1.253c-0.524-2.76-3.424-4.575-6.34-3.483-1.624 0.606-2.944 2.546-2.944 4.282v7.981h0.14c0.003 0 0.003 0 0.006 0s0.003 0 0.006 0c0.904-0.038 1.75-0.421 2.38-1.077 0.632-0.659 0.981-1.522 0.981-2.432h1.463v-3.515h-1.463v-0.966c0-0.375 0.199-0.726 0.527-0.907 0.899-0.501 1.815 0.143 1.815 0.995v3.22c0 1.273 0.48 2.456 1.352 3.331 0.834 0.834 1.964 1.314 3.179 1.352 0 0 0.003 0 0.003 0s0 0 0.003 0v0h0.143v-3.512c0 0 0 0 0 0-0.656-0.003-1.171-0.53-1.171-1.171v-0.585zM3.512 13.463v-9.366h-3.512v8.78c0 2.412 1.592 3.512 3.073 3.512v0c0.442 0 0.884-0.102 1.279-0.287 0.059-0.026 0.152-0.085 0.152-0.085s-0.088-0.094-0.126-0.135c-0.562-0.641-0.866-1.472-0.866-2.42zM9.073 12.375c0 0.146-0.070 0.287-0.19 0.369-0.471 0.331-0.981-0.003-0.981-0.451v-4.683h-3.512v5.854c0 1.613 1.314 2.927 2.927 2.927 0.697 0 1.373-0.249 1.902-0.702-0.056 0.433-0.293 0.79-0.691 1.039-0.372 0.234-0.858 0.357-1.402 0.357-0.562 0-1.133-0.132-1.651-0.38 0 0-0.094-0.044-0.211-0.111v3.12c0.781 0.316 1.639 0.483 2.467 0.483 1.311 0 2.508-0.41 3.372-1.156 0.969-0.834 1.481-2.055 1.481-3.527v-7.902h-3.512z" />
    </svg>
  );
});

Lyft.propTypes = {
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

export default Lyft;
