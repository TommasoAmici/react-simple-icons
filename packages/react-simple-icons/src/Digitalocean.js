import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Digitalocean = forwardRef(function Digitalocean(
  { color = 'currentColor', size = 24, title = 'DigitalOcean', ...others },
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
      <path d="M.836 19.365H.832V16.38h2.985v2.985H7.38V14.73h4.635v4.62c4.927-.006 8.73-4.883 6.852-10.066-.698-1.92-2.23-3.45-4.15-4.146C9.527 3.255 4.647 7.068 4.647 12H0C0 4.144 7.59-1.976 15.824.595c3.6 1.125 6.456 3.982 7.58 7.58C25.974 16.41 19.858 24 12 24v-4.635H7.377v3.56h-3.56v-3.56H.833h.002z" />
    </svg>
  );
});

Digitalocean.propTypes = {
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

export default Digitalocean;
