import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Personio = forwardRef(function Personio(
  { color = 'currentColor', size = 24, title = 'personio', ...others },
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
      <path d="M21.603 24H2.47v-1.563h19.133Zm-6.167-4.044c.557.145 1.137-.244 1.303-.867.166-.624-.157-1.25-.713-1.39-.556-.142-1.137.24-1.304.865-.167.624.156 1.25.714 1.39zM22.37.676c-1.737-1.347-5.387-.43-8.145.576A41.707 41.705 0 0 0 5.64 5.625C3.624 6.985 1.135 8.987.748 10.814a1.43 1.43 0 0 0 .28 1.263c.505.59 1.354.576 1.516.568a.781.781 0 0 0 .51-1.368.783.783 0 0 0-.58-.193.877.877 0 0 1-.181-.016c.58-2.136 6.69-6.232 12.47-8.342 3.858-1.408 5.964-1.342 6.649-.81.284.22.433.487.23 1.062-.545 1.535-3.2 3.96-7.108 6.48-.725.467-1.434.898-2.11 1.29.544-1.92 1.1-3.88 1.582-5.561a.782.782 0 0 0-1.504-.43 2070.72 2070.634 0 0 0-2.002 7.05c-1.564.811-2.754 1.3-3.22 1.366a.783.783 0 0 0-1.025 1.095c.134.226.4.476.929.476.088 0 .177-.007.264-.02.54-.073 1.417-.395 2.485-.884-.758 2.702-1.373 4.975-1.407 5.282a.781.781 0 0 0 .69.858.668.668 0 0 0 .087 0 .783.783 0 0 0 .775-.685c.062-.38.822-3.133 1.746-6.42a58.241 58.239 0 0 0 4.01-2.401c5.435-3.587 7.007-5.917 7.362-7.241.277-1.02-.017-1.93-.825-2.557z" />
    </svg>
  );
});

Personio.propTypes = {
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

export default Personio;
