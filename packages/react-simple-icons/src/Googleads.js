import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googleads = forwardRef(function Googleads(
  { color = 'currentColor', size = 24, title = 'Google Ads', ...others },
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
      <path d="M11.994 1.046h.022c.899.002 1.73.301 2.398.805l.003.001.001.001a4 4 0 011.116 1.299l4.467 7.769.025.065 3.419 5.927A3.98 3.98 0 0124 18.948c0 .565-.117 1.104-.329 1.592l.006.016a3.93 3.93 0 01-.634.993 3.97 3.97 0 01-1.045.868 3.984 3.984 0 01-1.946.537h-.068a3.984 3.984 0 01-2.398-.805l-.003-.001v-.001h-.001a4 4 0 01-1.116-1.299l-4.467-7.769-.025-.065-3.419-5.927-.005-.009-.011-.019A3.981 3.981 0 018 5.052c0-.424.066-.832.188-1.215v-.001l.008-.025.01-.03c.052-.157.117-.337.117-.337.158-.358.371-.689.626-.984l.063-.072.014-.015.002-.003.001-.001.002-.002.009-.01.006-.007c.27-.296.59-.557.956-.767a3.984 3.984 0 011.946-.537h.046zM4.006 22.954h-.058a3.984 3.984 0 01-1.946-.537 3.97 3.97 0 01-1.045-.868 3.93 3.93 0 01-.634-.993l.006-.016A3.988 3.988 0 010 18.948c0-.743.202-1.439.555-2.035l3.419-5.927.025-.065 3.039-5.286c.076.648.276 1.281.596 1.856l.057.1 3.377 5.854-.003-.01.067.142.291.507-3.889 6.764a4 4 0 01-1.116 1.299h-.001v.001l-.003.001a3.984 3.984 0 01-2.398.805h-.01z" />
    </svg>
  );
});

Googleads.propTypes = {
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

export default Googleads;
