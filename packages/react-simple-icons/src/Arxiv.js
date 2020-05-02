import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Arxiv = forwardRef(function Arxiv({ color = 'currentColor', size = 24, title = 'arXiv', ...others }, ref) {
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
      <path d="M20.7 15.404l-1.894-4.967h1.411l1.39 3.582 1.379-3.582h.96l-1.92 4.967zM16.298 9.6V8.48h1.34V9.6zm0 5.808v-4.971h1.34v4.967zm-6.965-.003l2.146-3.3L9.43 8.707h1.627l1.364 2.254L13.9 8.707h1.12l-2.046 3.156 2.126 3.537h-1.622l-1.45-2.4-1.557 2.4H9.333zm-3.346 0v-4.968h1.338v.937c.344-.7.875-1.051 1.585-1.051a1.401 1.401 0 01.248.026v1.194a1.6 1.6 0 00-.53-.102c-.537 0-.968.267-1.303.8v3.164zm-3.028-.536q-.664.65-1.437.65a1.473 1.473 0 01-1.06-.398 1.376 1.376 0 01-.406-1.03 1.45 1.45 0 01.659-1.271q.657-.447 1.884-.448h.355v-.453q0-.772-.88-.772a3.305 3.305 0 00-1.587.443v-.922a5.016 5.016 0 011.808-.345q1.953 0 1.951 1.55v2.206c0 .39.123.58.376.58a.8.8 0 00.174-.02l.032.751a2.745 2.745 0 01-.751.13c-.552 0-.902-.216-1.06-.65h-.054zm0-.72v-1.01h-.32c-.866 0-1.297.274-1.297.815a.64.64 0 00.64.648c.329.004.647-.15.977-.453z" />
    </svg>
  );
});

Arxiv.propTypes = {
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

export default Arxiv;
