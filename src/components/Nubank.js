import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Nubank = forwardRef(function Nubank({ color = 'currentColor', size = 24, title = 'Nubank', ...others }, ref) {
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
      <path d="M11.208 7.88c0-2.918-3.267-4.709-5.615-4.709-1.57 0-2.547.77-2.547 2.005v.792h-.663C1.227 5.968 0 7.195 0 8.358v8.86c0 .457.371.828.828.828h2.154c.014 0 .029 0 .036-.007a.83.83 0 0 0 .792-.827V6.732h1.798c.984 0 1.79.806 1.79 1.79v8.69c0 .456.371.827.828.827h2.155a.828.828 0 0 0 .827-.827c.007-3.853 0-9.332 0-9.332zM.978 17.283a.207.207 0 0 1-.207-.207V8.365c0-.728.891-1.627 1.612-1.627h.663v10.345a.207.207 0 0 1-.207.207H.977zm9.467-.2c0 .114-.093.2-.207.2h-1.87a.207.207 0 0 1-.206-.207V8.53A2.564 2.564 0 0 0 5.6 5.968H3.81v-.792c0-.464.228-1.234 1.783-1.234 3.004 0 4.845 2.297 4.845 3.938.007 0 .007 5.35.007 9.203zm12.72-11.13h-2.154a.828.828 0 0 0-.828.828v10.48h-1.79a1.796 1.796 0 0 1-1.791-1.79V6.78a.828.828 0 0 0-.828-.827H13.62a.828.828 0 0 0-.828.827v9.34c0 2.917 3.267 4.708 5.615 4.708 1.57 0 2.547-.77 2.547-2.005v-.792h.663c1.156 0 2.383-1.227 2.383-2.39v-8.86a.839.839 0 0 0-.835-.828zm-2.982 12.878c0 .464-.228 1.234-1.783 1.234-3.004 0-4.845-2.297-4.845-3.938 0 0-.007-5.322 0-9.203 0-.114.093-.2.207-.2h1.87c.114 0 .206.093.206.207v8.554a2.564 2.564 0 0 0 2.562 2.561h1.79zm3.046-3.189c0 .728-.891 1.627-1.612 1.627h-.663V6.924a.2.2 0 0 1 .207-.2h1.869c.114 0 .207.093.207.207v8.711z" />
    </svg>
  );
});

Nubank.propTypes = {
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

export default Nubank;
