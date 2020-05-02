import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sogou = forwardRef(function Sogou({ color = 'currentColor', size = 24, title = 'Sogou', ...others }, ref) {
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
      <path d="M16.801 22.74L17.79 24c1.561-.676 2.926-1.62 4.051-2.851l-.946-1.318c-1.11 1.289-2.475 2.279-4.08 2.909h-.014zM12 22.199c-5.775 0-10.455-4.619-10.455-10.35C1.545 6.15 6.225 1.53 12 1.53s10.456 4.65 10.456 10.35c0 2.55-.946 4.891-2.507 6.69l.945 1.261C22.801 17.729 24 14.939 24 11.88 24 5.295 18.63 0 12 0S0 5.311 0 11.85c0 6.57 5.37 11.88 12 11.88 1.71 0 3.33-.346 4.801-.99l-.961-1.26c-1.2.45-2.49.719-3.84.719zM18 12.646c-2.25-1.86-5.34-2.101-7.801-3.556-.75-.479-.148-1.395.602-1.425 2.699-.45 5.369.63 7.889 1.5l.151-2.655c-3.151-1.14-6.57-1.875-9.901-1.35-1.2.3-2.4.675-3.254 1.56-1.171 1.2-.961 3.36.389 4.32 2.236 1.755 5.176 2.011 7.621 3.36.96.39.555 1.68-.391 1.77-2.925.555-5.805-.721-8.325-2.1-.03 1.02-.06 2.01-.06 3 3.195 1.409 6.75 2.069 10.2 1.529 1.17-.225 2.37-.6 3.225-1.454 1.229-1.2 1.111-3.511-.33-4.5H18z" />
    </svg>
  );
});

Sogou.propTypes = {
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

export default Sogou;
