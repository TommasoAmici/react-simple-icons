import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vine = forwardRef(function Vine({ color = 'currentColor', size = 24, title = 'Vine', ...others }, ref) {
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
      <path d="M22.522 11.923a7.862 7.862 0 01-1.758.206c-3.028 0-5.362-2.116-5.362-5.794 0-1.802.706-2.732 1.697-2.732.946 0 1.562.841 1.562 2.553 0 .975-.256 2.04-.45 2.672 0 0 .93 1.636 3.481 1.125.54-1.201.842-2.762.842-4.127C22.534 2.146 20.658 0 17.22 0c-3.544-.017-5.616 2.7-5.616 6.289 0 3.55 1.66 6.597 4.395 7.985-1.15 2.301-2.614 4.328-4.142 5.857-2.77-3.352-5.274-7.821-6.303-16.543H1.466c1.889 14.527 7.518 19.15 9.005 20.037.84.504 1.566.48 2.336.049 1.215-.688 4.849-4.316 6.86-8.564.84-.003 1.861-.1 2.867-.328v-2.865z" />
    </svg>
  );
});

Vine.propTypes = {
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

export default Vine;
