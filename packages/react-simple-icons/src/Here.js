import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Here = forwardRef(function Here({ color = 'currentColor', size = 24, title = 'HERE', ...others }, ref) {
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
      <path d="M6.656 19.63l-3.304 3.295L.044 19.63zM11.49 12.108c-.69-.821-.656-1.264-.229-1.69.519-.52 1.047-.306 1.639.274zm7.08-8.993c.518-.519 1.046-.305 1.638.275l-1.41 1.41c-.692-.818-.659-1.258-.229-1.685zm4.271 1.44c-.643.962-1.742 2.52-2.929 1.343l2.97-2.97c-.266-.283-.47-.524-.611-.676-1.614-1.6-3.418-1.62-4.834-.214-.943.943-1.19 2.02-.915 3.051l-.916-1.065a1.935 1.935 0 0 0-.555 2.67l-1.065-.884-1.431 1.406 1.907 1.907c-1.474-1.168-3.051-1.055-4.34.217-1.363 1.361-1.269 3.012-.246 4.37l-.208-.205c-1.349-1.348-2.813-.872-3.54-.146-.561.561-.915 1.33-.762 1.867l-2.918-2.92-1.556 1.556 5.764 5.768h3.095l-2.078-2.09c-1.093-1.111-1.111-1.697-.58-2.225.53-.528 1.104-.192 2.151.851l2.054 2.05 1.562-1.543-1.95-1.947c1.404 1.062 3.088 1.12 4.577-.378l.028-.028a4.43 4.43 0 0 0 1.19-1.678l-1.169-.784c-.647.96-1.76 2.523-2.93 1.364l2.976-2.976 1.855 1.84 1.618-1.617-2.32-2.319c-1.083-1.083-.442-2.1 0-2.484a4.577 4.577 0 0 0 .916 1.27c1.501 1.504 3.439 1.806 5.145.106l.027-.027a4.434 4.434 0 0 0 1.19-1.678z" />
    </svg>
  );
});

Here.propTypes = {
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

export default Here;
