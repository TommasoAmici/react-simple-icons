import React from 'react';
import PropTypes from 'prop-types';

const W3c = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M23.642 5.602l-.931 1.858s-.4-.738-.795-1.076c-.377-.322-.864-.62-1.48-.556-.597.062-1.27.587-1.722 1.46-.513.994-.688 2.001-.692 3.112-.005 1.556.57 2.618.57 2.618s-.132-.494-.11-1.33c.014-.52.017-1.089.41-2.261.33-.98 1.084-1.775 1.75-1.912.517-.107.847-.03 1.356.329.603.425.966 1.193.966 1.193l.946-1.81zM0 5.674l3.77 12.723h.156l2.356-7.886 2.357 7.886h.157l3.228-10.895.152-.258h2.655l-2.2 3.802v.754h.629c.806 0 1.398.246 1.775.738.324.42.487 1.011.487 1.776 0 .691-.152 1.283-.455 1.775-.304.492-.676.738-1.116.738-.419 0-.783-.138-1.092-.416-.308-.277-.557-.657-.746-1.139l-1.288.534c.261.796.665 1.427 1.21 1.893.544.466 1.183.699 1.916.699.974 0 1.767-.393 2.38-1.178.613-.785.919-1.754.919-2.906 0-.932-.21-1.743-.628-2.435-.42-.69-1.037-1.167-1.854-1.43l2.326-4.006v-.77h-6.177L8.64 13.419 6.362 5.674h-1.65l.754 2.529-1.54 5.215L1.65 5.674zm17.44 8.88s.233.755.379 1.076c.084.185.342.75.708 1.24.341.46 1.004 1.248 2.011 1.426 1.008.178 1.7-.274 1.871-.384.172-.11.533-.412.761-.657.239-.255.465-.58.59-.775.091-.143.24-.432.24-.432l-.241-1.255s-.418.748-.678 1.036c-.261.288-.727.794-1.302 1.048-.576.253-.877.302-1.446.247-.569-.054-1.097-.383-1.282-.52-.185-.138-.658-.542-.925-.92-.268-.376-.686-1.13-.686-1.13z" />
    </svg>
  );
};

W3c.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

W3c.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default W3c;
