import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Amg = forwardRef(function Amg({ color = 'currentColor', size = 24, title = 'amg', ...others }, ref) {
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
      <path d="M23.9998 11.8942a.1216.1216 0 0 0-.127-.1271H21.607a.1216.1216 0 0 0-.1271.127v.1906a.1419.1419 0 0 0 .127.1482h1.419c.0847 0 .0847.0424.0847.1482v.0202c0 .1058 0 .1271-.0847.1271h-2.901a.1216.1216 0 0 1-.1271-.127v-.8248a.1216.1216 0 0 1 .127-.1271h3.7267a.1216.1216 0 0 0 .127-.1271v-.3177a.1216.1216 0 0 0-.127-.127h-4.616a.1216.1216 0 0 0-.127.127v2.054a.1216.1216 0 0 0 .127.127h4.616a.1216.1216 0 0 0 .127-.127v-1.1645m-7.3686.5505a.316.316 0 0 1-.1906.0847h-.5929a.316.316 0 0 1-.1907-.0847l-1.1221-.72c-.0635-.0423-.1271-.0212-.1271.0635v1.207a.1216.1216 0 0 1-.1271.1271h-.593a.1419.1419 0 0 1-.148-.127v-2.054c0-.0847.0633-.127.148-.127h.6353a.5067.5067 0 0 1 .1906.0633l1.5247.9953a.1587.1587 0 0 0 .1905 0l1.5245-.9953a.2961.2961 0 0 1 .1907-.0634h.6353a.1216.1216 0 0 1 .1269.1271v2.054a.1216.1216 0 0 1-.1269.127h-.5929a.1419.1419 0 0 1-.1484-.127v-1.2071q0-.1271-.127-.0635zm-6.6066-1.0165c-.0424 0-.0634.0203-.1058.0636l-.36.4662c-.0213.0424 0 .0635.0203.0635h2.6045c.0847 0 .0847-.0424.0847-.1058v-.318c0-.1059 0-.1482-.0847-.1482h-2.159zm-1.5245 1.7152h-.7631a.0713.0713 0 0 1-.0635-.1058L9.2825 10.92a.2145.2145 0 0 1 .1483-.0847h3.515a.1638.1638 0 0 1 .1482.1694v2.0116a.1216.1216 0 0 1-.127.1271h-.593a.1216.1216 0 0 1-.127-.127V12.72c0-.0847 0-.106-.0848-.106H9.0717a.1419.1419 0 0 0-.1271.0847v.0203l-.2329.2963a.3677.3677 0 0 1-.2329.1271zm-1.5458 0a.3217.3217 0 0 0 .2117-.127l1.5881-2.054c.0636-.0847.0203-.1482-.0424-.1482h-.3176a.2145.2145 0 0 0-.1482.0847l-1.6305 2.1174a.0716.0716 0 0 0 .0636.106h.2753zm-1.101 0a.322.322 0 0 0 .2116-.127l1.5881-2.054c.0634-.0847.0213-.1482-.0424-.1482h-.4447a.2145.2145 0 0 0-.1482.0847L5.366 13.0163a.0716.0716 0 0 0 .0636.106h.4024zm-1.8 0a.0713.0713 0 0 1-.0635-.1058L5.599 10.92a.214.214 0 0 1 .1482-.0847h.6563c.0847 0 .106.0636.0424.1484l-1.5883 2.054a.2888.2888 0 0 1-.2116.127h-.6142zm-1.5034 0a.0713.0713 0 0 1-.0634-.1058L4.0957 10.92a.2145.2145 0 0 1 .1482-.0847h.8681c.0847 0 .1058.0636.0424.1484l-1.5881 2.054a.2888.2888 0 0 1-.2118.127h-.8258zm-2.4563 0a.0713.0713 0 0 1-.0634-.1058L1.6394 10.92a.2145.2145 0 0 1 .1482-.0847h1.9268c.0847 0 .106.0636.0424.1484l-1.5881 2.054a.2888.2888 0 0 1-.2116.127H.072Z" />
    </svg>
  );
});

Amg.propTypes = {
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

export default Amg;
