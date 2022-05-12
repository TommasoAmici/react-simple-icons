import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Byjus = forwardRef(function Byjus({ color = 'currentColor', size = 24, title = 'byjus', ...others }, ref) {
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
      <path d="M2.327.016A2.325 2.325 0 0 0 0 2.34v19.32a2.325 2.325 0 0 0 2.327 2.323h19.346A2.325 2.325 0 0 0 24 21.66V2.34A2.325 2.325 0 0 0 21.673.016zm10.054 3.496a3.443 3.443 0 0 1 .07 0 4.317 4.317 0 0 1 3.267 1.462 4.447 4.447 0 0 1 .961 2.365 4.157 4.157 0 0 1-.456 2.27 5.024 5.024 0 0 1 2.424 2.008 5.237 5.237 0 0 1 .73 3.374 4.68 4.68 0 0 1-1.15 2.466 4.84 4.84 0 0 1-2.26 1.535l-4.987 1.439a1.494 1.494 0 0 1-.41.058 1.497 1.497 0 0 1-1.432-1.075L5.524 6.909a1.487 1.487 0 0 1 1.018-1.841l4.956-1.429a3.443 3.443 0 0 1 .883-.127zm.248.861a3.091 3.091 0 0 0-.855.122L6.94 5.888a.744.744 0 0 0-.51.922l3.53 12.206a.745.745 0 0 0 .921.509l4.664-1.345a4.085 4.085 0 0 0-.896-8.003 3.297 3.297 0 0 0 1.138-2.272 3.479 3.479 0 0 0-.928-2.549 2.989 2.989 0 0 0-2.23-.983Z" />
    </svg>
  );
});

Byjus.propTypes = {
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

export default Byjus;
