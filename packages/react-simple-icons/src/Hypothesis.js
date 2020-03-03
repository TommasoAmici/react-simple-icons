import React from 'react';
import PropTypes from 'prop-types';

const Hypothesis = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M3.43 0C2.5 0 1.72 .768 1.72 1.72V18.86C1.72 19.8 2.5 20.57 3.43 20.57H9.38L12 24L14.62 20.57H20.57C21.5 20.57 22.29 19.8 22.29 18.86V1.72C22.29 .77 21.5 0 20.57 0H3.43M5.14 3.43H7.72V9.43S8.58 7.72 10.28 7.72C12 7.72 13.74 8.57 13.74 11.24V17.14H11.16V12C11.16 10.61 10.28 10.07 9.43 10.29C8.57 10.5 7.72 11.41 7.72 13.29V17.14H5.14V3.43M18 13.72C18.95 13.72 19.72 14.5 19.72 15.42A1.71 1.71 0 0 1 18 17.13A1.71 1.71 0 0 1 16.29 15.42C16.29 14.5 17.05 13.71 18 13.71Z" />
    </svg>
  );
};

Hypothesis.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hypothesis.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Hypothesis;
