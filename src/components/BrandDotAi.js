import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BrandDotAi = forwardRef(function BrandDotAi(
  { color = 'currentColor', size = 24, title = 'brand-dot-ai', ...others },
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
      <path d="M23.956 11.2626C23.578 5.007 18.4025.0485 12.061.0095h-.142c-2.2398.016-4.3356.64-6.1245 1.7239A12.0293 12.0293 0 001.747 5.766C.7599 7.381.1499 9.2527.023 11.2556c-.015.247-.023.494-.023.7469 0 .25.01.5.025.746.123 2.0028.734 3.8726 1.7229 5.4895.9999 1.6478 2.3838 3.0297 4.0236 4.0326 1.7979 1.074 3.8967 1.7049 6.1295 1.7199h.18c6.3425-.043 11.497-4.9896 11.889-11.239.014-.24.03-.496.03-.735s0-.495-.016-.734l-.027-.022zm-11.955 4.3796v3.8297c.096 2.3398-.57 2.7297-1.3699 2.7657-.034 0-.066.003-.1.004-4.5556-.6449-8.1573-4.2566-8.7832-8.8222-.066-.464-.1-.938-.1-1.4199 0-.48.034-.953.1-1.4179.6249-4.5596 4.2176-8.1693 8.7692-8.8192l.115.01c.8.043 1.4649.43 1.3699 2.7637v3.8277c-.01 1.5729.895 3.0717 1.8568 3.6397-.9619.56-1.8678 1.8748-1.8578 3.6337z" />
    </svg>
  );
});

BrandDotAi.propTypes = {
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

export default BrandDotAi;
