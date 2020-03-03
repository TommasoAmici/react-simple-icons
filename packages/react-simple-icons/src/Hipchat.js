import React from 'react';
import PropTypes from 'prop-types';

const Hipchat = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M19.736 19.056s.103-.073.267-.198C22.46 16.958 24 14.203 24 11.139 24 5.424 18.627.787 12.003.787 5.377.787 0 5.424 0 11.139c0 5.717 5.371 10.356 11.998 10.356.847 0 1.694-.073 2.524-.228l.262-.045c1.683 1.092 4.139 1.99 6.288 1.99.665 0 .978-.546.552-1.104-.648-.795-1.541-2.068-1.888-3.052zm-1.462-4.526c-.716 1.069-2.934 2.889-6.254 2.889h-.046c-3.328 0-5.543-1.831-6.254-2.889a1.137 1.137 0 0 1-.273-.574.49.49 0 0 1 .447-.526c.008-.003.014-.003.021-.003.117.006.23.043.328.111a9.137 9.137 0 0 0 5.754 2.056 8.805 8.805 0 0 0 5.76-2.059.461.461 0 0 1 .313-.122c.267 0 .478.213.483.475a1.321 1.321 0 0 1-.268.643h-.011z" />
    </svg>
  );
};

Hipchat.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hipchat.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Hipchat;
