import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googlepodcasts = forwardRef(function Googlepodcasts(
  { color = 'currentColor', size = 24, title = 'Google Podcasts', ...others },
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
      <path d="M1.5 9.68c-.83 0-1.5.67-1.5 1.5V12.81a1.5 1.5 0 1 0 3 0v-1.63c0-.83-.67-1.5-1.5-1.5zM22.5 9.68c-.83 0-1.5.67-1.5 1.5V12.81a1.5 1.5 0 1 0 3 0v-1.63c0-.83-.67-1.5-1.5-1.5zM6.68 14.59c-.83 0-1.5.67-1.5 1.5V17.72a1.5 1.5 0 1 0 3 0V16.1c0-.83-.67-1.5-1.5-1.5zM6.68 4.77c-.83 0-1.5.67-1.5 1.5V11.63a1.5 1.5 0 0 0 3 0V6.26c0-.83-.67-1.5-1.5-1.5zM17.32 4.77c-.83 0-1.5.67-1.5 1.5V7.91a1.5 1.5 0 0 0 3 0V6.27c0-.83-.67-1.5-1.5-1.5zM12 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 1 0 3 0V1.5C13.5.67 12.83 0 12 0zM12 19.36c-.83 0-1.5.67-1.5 1.5V22.5a1.5 1.5 0 1 0 3 .01v-1.64c0-.82-.67-1.5-1.5-1.5zM17.32 10.9c-.83 0-1.5.68-1.5 1.5v5.33a1.5 1.5 0 0 0 3 0V12.4c0-.83-.67-1.5-1.5-1.5zM12 6.13c-.83 0-1.5.68-1.5 1.5v8.73a1.5 1.5 0 0 0 3 0V7.64c0-.83-.67-1.5-1.5-1.5z" />
    </svg>
  );
});

Googlepodcasts.propTypes = {
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

export default Googlepodcasts;
