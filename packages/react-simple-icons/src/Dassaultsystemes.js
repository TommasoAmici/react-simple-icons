import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dassaultsystemes = forwardRef(function Dassaultsystemes(
  { color = 'currentColor', size = 24, title = 'Dassault Systèmes', ...others },
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
      <path d="M21.161 8.04c1.063.192 1.93.34 2.129.79.223.508-.935.54-1.518.551-2.797.054-4.483.11-4.568 1.06-.11 1.223 1.195 2.454 2.484 4.181 1.177 1.576 2.515 3.132 2.13 4.582-.481 1.807-2.696 2.19-4.805 2.19-2.02.001-3.935-.323-4.739-.482-1.001-.198-.852-.693-.585-.852.298-.178 2-.182 3.184-.252.974-.058 3.802-.056 4.243-.78.54-.888-.783-2.406-1.999-3.996-1.517-1.983-3.183-4.031-2.301-5.527 1.14-1.935 4.48-1.802 6.345-1.465 M7.482 10.987c1.771-.104 3.923.206 5.13 1.13.602.46 1.024 1.305.78 2.274-.698 2.75-3.301 6.078-9.085 8.635-1.84.813-3.286 1.124-3.59.906-.326-.234.623-2.05.908-2.652.924-1.95 2.077-3.85 3.202-5.59.414-.64 1.054-1.75 1.633-1.661.518.08-.089 1.26-.488 2.01-.671 1.258-2.52 4.755-1.91 4.964 1.348.462 7.673-4.35 6.74-7.029-.432-1.244-3.178-1.362-4.908-1.362-.786 0-2.505.186-2.6-.417-.102-.555 2.61-1.115 4.188-1.208M11.851.034c2.066-.098 4.51.342 4.965 1.8.747 2.388-3.036 5.872-6.332 7.581-.808.42-1.298.535-1.502.506-.195-.027-.225-.221-.162-.355.118-.251.649-.763 1.36-1.32 3.711-2.897 4.918-5.024 4.217-5.885-.449-.552-2.33-.936-4.283-.936-.53 0-1.924.123-2.067-.367C7.93.655 9.8.13 11.85.034" />
    </svg>
  );
});

Dassaultsystemes.propTypes = {
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

export default Dassaultsystemes;
