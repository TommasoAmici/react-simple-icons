import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Newbalance = forwardRef(function Newbalance(
  { color = 'currentColor', size = 24, title = 'newbalance', ...others },
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
      <path d="M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231m5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018.259-.632-.088-1.171-.55-1.166h-1.067l-1.266 2.19zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128.302-.781-.253-1.177-.638-1.177h-1.266zM6.26 16.445l-.77 1.315L0 17.77l.534-.923 5.726-.402zm.385-10.216l4.417.006.336 1.248-5.276-.33.523-.924zm5 2.245l.484 1.832-7.542-.495.528-.92 6.53-.417zm-3.84 5.281l-.957 1.661-5.32-.302.534-.924 5.743-.435z" />
    </svg>
  );
});

Newbalance.propTypes = {
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

export default Newbalance;
