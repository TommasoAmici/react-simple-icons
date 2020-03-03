import React from 'react';
import PropTypes from 'prop-types';

const Youtubestudio = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M9.577 15.606L15.606 12 9.577 8.394zm11.38-2.423l2.536 1.972q.394.282.113.789l-2.423 4.169q-.225.394-.732.225l-2.986-1.183q-1.183.845-2.028 1.183l-.451 3.155q-.113.507-.563.507H9.577q-.45 0-.563-.507l-.45-3.155q-1.071-.45-2.029-1.183L3.55 20.338q-.507.169-.732-.225l-2.423-4.17q-.281-.506.113-.788l2.535-1.972Q2.986 12.79 2.986 12t.056-1.183L.507 8.845q-.394-.282-.113-.789l2.423-4.169q.225-.394.732-.225l2.986 1.183Q7.718 4 8.563 3.662L9.014.507Q9.127 0 9.577 0h4.846q.45 0 .563.507l.45 3.155q1.071.45 2.029 1.183l2.986-1.183q.507-.169.732.225l2.423 4.17q.281.506-.113.788l-2.535 1.972q.056.394.056 1.183t-.056 1.183Z" />
    </svg>
  );
};

Youtubestudio.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Youtubestudio.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Youtubestudio;
