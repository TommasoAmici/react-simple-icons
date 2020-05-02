import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Homify = forwardRef(function Homify({ color = 'currentColor', size = 24, title = 'homify', ...others }, ref) {
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
      <path d="M20.5 10.562v.053l-.004.05c-.09 2.328-.058 11.357-.057 11.822.002 1.078-.84 1.943-1.62 1.283l-7.076-5.53c-2.224 2.302-4.358 4.495-4.808 4.925-.992.946-1.81-1.327-1.06-1.808.068-.042 2.254-1.95 4.674-4.05l-5.24-4.095c-.454-.355-.628-.945-.368-1.26.09-.085.21-.13.332-.127.056.002.112.014.165.038 1.62.72 4.015 2.492 6.4 4.327 2.486-2.15 4.873-4.19 5.186-4.363.388-.214.49.353.36.516-.132.166-2.2 2.326-4.467 4.68 2.233 1.73 4.352 3.386 5.69 4.135l.22-10.62c-.174-.207-5.406-7.163-5.973-7.748-.905.782-5.645 6.114-5.884 6.344 1.082.108 5.676.382 8.57.683.73.07 1.216.606-.35.592L3.93 10.392c-.176-.006-.333-.11-.398-.267-.066-.157-.028-.336.096-.456.06-.058 8.153-8.923 8.832-9.487.154-.127.317-.188.487-.183.23.008.416.144.492.227.084.077 4.35 5.94 6.432 8.8.498.678.624 1.137.628 1.502v.032z" />
    </svg>
  );
});

Homify.propTypes = {
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

export default Homify;
