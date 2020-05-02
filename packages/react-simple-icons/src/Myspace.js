import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Myspace = forwardRef(function Myspace({ color = 'currentColor', size = 24, title = 'Myspace', ...others }, ref) {
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
      <path d="M19.803 12.274c2.108 0 3.818-1.703 3.818-3.804s-1.71-3.795-3.818-3.795c-2.109 0-3.818 1.71-3.818 3.81 0 2.101 1.709 3.811 3.818 3.811v-.022zm-8.603.705c1.897 0 3.436-1.533 3.436-3.424S13.098 6.13 11.2 6.13 7.764 7.676 7.764 9.566C7.764 11.457 9.299 13 11.2 13v-.021zm-7.8.635c1.71 0 3.093-1.38 3.093-3.081 0-1.704-1.395-3.084-3.105-3.084C1.681 7.449.3 8.829.3 10.539c0 1.7 1.387 3.078 3.095 3.078l.005-.003zm0 .705c-1.96 0-3.4 1.717-3.4 3.495v1.196c0 .17.138.31.31.31h6.18c.171 0 .309-.14.309-.31v-1.196c0-1.779-1.437-3.5-3.398-3.5l-.001.005zm7.8-.56c-2.179 0-3.78 1.915-3.78 3.891v1.331c0 .188.156.344.345.344h6.871c.188 0 .342-.155.342-.344V17.65c0-1.976-1.598-3.891-3.778-3.891zm8.603-.617c-2.422 0-4.197 2.126-4.197 4.323v1.477c0 .21.172.381.382.381h7.63c.21 0 .383-.171.383-.381v-1.477c-.001-2.197-1.776-4.323-4.198-4.323z" />
    </svg>
  );
});

Myspace.propTypes = {
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

export default Myspace;
