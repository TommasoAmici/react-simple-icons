import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Perforce = forwardRef(function Perforce(
  { color = 'currentColor', size = 24, title = 'Perforce', ...others },
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
      <path d="M3.741 8.755c.164-.425.352-.834.573-1.219-.213-.196-.745-.613-.712-.646 2.774-3.322 6.391-4.32 9.59-3.74.655.09 1.31.246 1.956.483 4.583 1.702 6.898 6.75 5.18 11.284a9.33 9.33 0 0 1-.614 1.285c.254.22.81.63.778.663-3.077 3.641-7.177 4.484-10.589 3.47a11.18 11.18 0 0 1-.982-.295c-4.574-1.702-6.898-6.751-5.18-11.285zM19.371.982c-.581.556-1.277 1.227-1.62 1.53a11.886 11.886 0 0 0-1.727-.802C10.819-.221 5.337 1.964 2.317 6.03.738 8.364-.195 11.236.034 14.19c0 0 .009 5.556 5.14 8.83.417-.574.948-1.31 1.3-1.785a12.36 12.36 0 0 0 1.817.86c5.892 2.184 12.422-.606 14.557-6.228 0 0 1.563-3.428 1.048-7.176 0 0-.401-5.057-4.525-7.708z" />
    </svg>
  );
});

Perforce.propTypes = {
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

export default Perforce;
