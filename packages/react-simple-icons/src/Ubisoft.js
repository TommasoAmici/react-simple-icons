import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ubisoft = forwardRef(function Ubisoft({ color = 'currentColor', size = 24, title = 'Ubisoft', ...others }, ref) {
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
      <path d="M23.561 11.989C23.301-.304 6.953-4.89.655 6.634c.282.206.661.477.943.672a11.748 11.748 0 0 0-.976 3.068 11.886 11.886 0 0 0-.184 2.071c0 6.374 5.182 11.556 11.567 11.556s11.556-5.171 11.556-11.556v-.455zM3.29 14.048c-.152 1.247-.054 1.637-.054 1.789l-.282.098c-.108-.206-.369-.932-.488-1.908-.304-3.718 2.233-7.068 6.103-7.697 3.545-.52 6.938 1.68 7.729 4.759l-.282.098c-.087-.087-.228-.336-.77-.878-4.282-4.282-11.003-2.32-11.957 3.74zm11.003 2.082a3.145 3.145 0 0 1-2.591 1.355 3.151 3.151 0 0 1-3.155-3.155 3.159 3.159 0 0 1 2.927-3.144c1.019-.043 1.973.51 2.417 1.398a2.58 2.58 0 0 1-.455 2.949c.293.206.575.401.856.596zm6.58.119c-1.669 3.783-5.106 5.767-8.77 5.713-7.035-.347-9.084-8.466-4.38-11.393l.206.206c-.076.108-.358.325-.791 1.182-.51 1.041-.672 2.081-.607 2.732.369 5.67 8.315 6.83 11.046 1.214C21.057 8.217 11.821.401 3.625 6.374l-.184-.184c2.157-3.382 6.374-4.889 10.396-3.881 6.147 1.55 9.453 7.957 7.035 13.941z" />
    </svg>
  );
});

Ubisoft.propTypes = {
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

export default Ubisoft;
