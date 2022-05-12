import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Coil = forwardRef(function Coil({ color = 'currentColor', size = 24, title = 'coil', ...others }, ref) {
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
      <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm.465 5.814a4.56 4.56 0 012.756.83c1.215.886 1.465 1.856 1.465 2.5a1.845 1.845 0 01-.086.6 2.77 2.77 0 01-2.305 1.906 5.675 5.675 0 01-.654.055c-1 0-1.33-.41-1.33-.87 0-.624.6-1.364 1.035-1.364a.28.28 0 01.154.045.76.76 0 00.375.093.265.265 0 00.11 0 .55.55 0 00.515-.558c0-.55-.625-1.25-2-1.25a5.285 5.285 0 00-1.55.244A4.12 4.12 0 008.685 9.8 4 4 0 008 12.05 3.945 3.945 0 008.5 14a4.235 4.235 0 003.69 2.06h.24c2-.11 2.46-1.09 2.906-1.28a1.53 1.53 0 01.299-.065c.325 0 .745.164 1.035.86a.73.73 0 01.07.3c0 1.145-2.67 2.18-4.22 2.26h-.35A6.38 6.38 0 016.62 15a5.9 5.9 0 01-.77-2.94 6.085 6.085 0 011.035-3.39 6.195 6.195 0 013.385-2.5 7.295 7.295 0 012.195-.356z" />
    </svg>
  );
});

Coil.propTypes = {
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

export default Coil;
