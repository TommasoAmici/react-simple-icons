import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Indeed = forwardRef(function Indeed({ color = 'currentColor', size = 24, title = 'Indeed', ...others }, ref) {
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
      <path d="M14.8224 10.3074a3.0179 3.0179 0 111.32-4.0379 3.0059 3.0059 0 01-1.32 4.0439zM11.6005.5718c2.47-.901 5.2938-.852 7.4077.982a3.5869 3.5869 0 011.023 1.3699c.213.69-.749-.07-.88-.168a9.4066 9.4066 0 00-2.1499-1.095C12.8375.3857 8.8976 2.7067 6.4637 6.3155a19.5042 19.5042 0 00-2.2479 5.1258 2.9179 2.9179 0 01-.213.642c-.107.204-.049-.547-.049-.572a15.8203 15.8203 0 01.43-2.2389c1.128-3.9328 3.6269-7.2077 7.2167-8.7076zm.037 20.992v-8.7625c.249.025.486.037.736.037a6.1667 6.1667 0 003.2189-.895v9.6196c0 .822-.15 1.43-.52 1.826a1.874 1.874 0 01-1.452.6099 1.825 1.825 0 01-1.4269-.609c-.368-.404-.56-1.013-.56-1.825z" />
    </svg>
  );
});

Indeed.propTypes = {
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

export default Indeed;
