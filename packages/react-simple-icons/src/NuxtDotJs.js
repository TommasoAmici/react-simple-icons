import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const NuxtDotJs = forwardRef(function NuxtDotJs(
  { color = 'currentColor', size = 24, title = 'Nuxt.js', ...others },
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
      <path d="M19.724 20.272l.023-.045a.74.74 0 0 0 .053-.117l.002-.005a1.16 1.16 0 0 0 .054-.607l.001.007a1.795 1.795 0 0 0-.235-.623l.005.008-5.317-9.353-.812-1.42-.807 1.42-5.314 9.353a1.85 1.85 0 0 0-.204.604l-.001.011a1.257 1.257 0 0 0 .08.713l-.003-.008a.809.809 0 0 0 .05.102l-.002-.004c.16.275.5.602 1.25.602h9.898c.157 0 .925-.032 1.28-.637zm-6.227-9.316l4.859 8.548H8.64zm10.249 7.934L16.73 6.53c-.072-.13-.477-.787-1.182-.787-.317 0-.772.135-1.142.785l-.907 1.59.807 1.42 1.25-2.212 6.941 12.18h-2.64a1.187 1.187 0 0 1-.058.608l.003-.008a.772.772 0 0 1-.057.126l.002-.004-.023.045c-.355.605-1.122.637-1.272.637h4.129c.152 0 .917-.032 1.272-.637.157-.275.27-.737-.107-1.382zM7.304 20.307a.989.989 0 0 1-.045-.092l-.002-.006a1.228 1.228 0 0 1-.084-.712l-.001.007H1.501L9.93 4.672l2.767 4.864.802-1.42-2.412-4.249c-.067-.122-.475-.777-1.177-.777-.317 0-.772.137-1.142.787L.23 18.889c-.072.13-.425.812-.075 1.417.16.275.5.602 1.25.602h7.151c-.745 0-1.09-.322-1.25-.602z" />
    </svg>
  );
});

NuxtDotJs.propTypes = {
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

export default NuxtDotJs;
