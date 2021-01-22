import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Datastax = forwardRef(function Datastax(
  { color = 'currentColor', size = 24, title = 'DataStax', ...others },
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
      <path d="M16.022 13.765a2.024 2.024 0 101.973-2.06 2.01 2.01 0 00-1.973 2.06zM7.744 4.092a2.024 2.024 0 101.973-2.06 2.01 2.01 0 00-1.973 2.06zM2.842 2.667a1.57 1.57 0 101.534-1.563 1.563 1.563 0 00-1.534 1.563zm13.143 16.226a1.461 1.461 0 102.923-.002 1.461 1.461 0 00-2.923.002zm-3.163 2.01a.847.847 0 10.825-.862.84.84 0 00-.825.862zM.11 5.02a.935.935 0 101.87-.03.935.935 0 00-1.87.03zM0 8.665a.73.73 0 101.461 0 .73.73 0 00-1.461 0zm12.318-.416a2.535 2.535 0 105.07-.075 2.535 2.535 0 00-5.07.075zm3.667 10.644a1.461 1.461 0 102.923-.002 1.461 1.461 0 00-2.923.002zm-3.163 2.01a.847.847 0 10.825-.862.84.84 0 00-.825.862zM.11 5.02a.935.935 0 101.87-.03.935.935 0 00-1.87.03zM0 8.665a.73.73 0 101.461 0 .73.73 0 00-1.461 0zm10.637 9.878L7.68 15.84l2.922-2.923a.73.73 0 00.153-.855.73.73 0 00-1.234-.226l-2.923 2.922-2.966-2.951a.73.73 0 00-.533-.227.774.774 0 00-.73.468.73.73 0 00.167.825l2.966 2.974-2.922 2.922a.73.73 0 00-.168.826c.125.29.414.475.73.467a.73.73 0 00.534-.226l2.922-2.922L9.52 19.63c.145.14.339.219.54.22a.73.73 0 00.694-.453.774.774 0 00-.117-.855zm9.71 1.753a1.82 1.82 0 01.41-.599c.178-.17.386-.305.613-.402a2.01 2.01 0 011.461 0c.225.097.43.233.606.402.176.17.315.374.41.6.101.23.154.478.153.73a1.929 1.929 0 01-.563 1.337 1.973 1.973 0 01-2.074.394 1.812 1.812 0 01-1.023-1c-.1-.231-.153-.48-.154-.731a1.79 1.79 0 01.161-.73zm.307 1.396c.076.191.19.365.336.511.139.15.308.266.497.343a1.6 1.6 0 001.234 0 1.556 1.556 0 00.826-.854c.08-.207.12-.428.117-.65a1.615 1.615 0 00-.446-1.147 1.658 1.658 0 00-.497-.337 1.6 1.6 0 00-1.234 0c-.187.077-.356.191-.497.336a1.52 1.52 0 00-.336.512c-.08.202-.12.418-.117.635-.004.223.036.444.117.65zm1.585-1.754a.87.87 0 01.585.16c.133.122.203.297.19.476a.548.548 0 01-.168.438.73.73 0 01-.417.168l.636.98h-.387l-.6-.958h-.365v.957h-.35v-2.192l.876-.029zm-.153.987h.219a.606.606 0 00.183-.044.248.248 0 00.131-.11.343.343 0 00.051-.204.292.292 0 00-.153-.278.592.592 0 00-.16-.051h-.629v.73l.358-.043z" />
    </svg>
  );
});

Datastax.propTypes = {
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

export default Datastax;
