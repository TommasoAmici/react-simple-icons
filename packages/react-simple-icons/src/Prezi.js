import React from 'react';
import PropTypes from 'prop-types';

const Prezi = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.996 0c-.21 0-.42.005-.63.015l.134 2.547c.333-.02.66-.013.987 0L12.62.015A12.92 12.92 0 0011.996 0zm-1.89.148c-.413.067-.826.154-1.22.26l.667 2.467c.32-.086.64-.153.973-.206zm3.761 0l-.387 2.52c.334.054.66.12.974.207L15.1.408a12.652 12.652 0 00-1.233-.26zM7.699.795c-.393.154-.773.32-1.146.514l1.166 2.273c.294-.147.594-.28.894-.4zm8.608.007l-.92 2.38c.314.12.62.254.914.407l1.146-2.28c-.366-.187-.746-.36-1.14-.507zM5.46 1.935c-.353.227-.693.474-1.02.74l1.607 1.98c.26-.2.527-.4.807-.58zm13.062 0l-1.38 2.147c.28.18.547.374.8.58l1.62-1.973c-.333-.267-.68-.52-1.04-.754zm-6.528 1.56c-1.167 0-2.253.22-3.32.674a8.349 8.349 0 00-2.707 1.82 8.339 8.339 0 00-1.807 2.714c-.467 1.04-.674 2.14-.674 3.307 0 1.154.207 2.254.674 3.307a8.536 8.536 0 001.807 2.7 8.393 8.393 0 002.7 1.82 8.494 8.494 0 003.32.674 8.357 8.357 0 003.308-.673 8.748 8.748 0 002.714-1.82 8.462 8.462 0 001.806-2.7c.46-1.054.687-2.161.687-3.308a7.963 7.963 0 00-.68-3.307c-.413-1.04-1.04-1.934-1.807-2.714a8.633 8.633 0 00-2.713-1.82 8.358 8.358 0 00-3.308-.673zm8.495.027l-1.814 1.794c.234.24.46.487.674.753l1.98-1.62c-.26-.327-.547-.633-.84-.927zm-16.99.007c-.292.293-.566.6-.826.92l1.994 1.6c.2-.253.42-.493.653-.727zm8.489.667c1.066 0 2.073.193 3.033.606.947.4 1.76.96 2.474 1.68.72.72 1.28 1.548 1.68 2.474a7.7 7.7 0 01.627 3.054 7.67 7.67 0 01-.62 3.034c-.4.927-.96 1.76-1.68 2.48a7.748 7.748 0 01-2.474 1.68c-.96.4-1.967.607-3.034.607a7.848 7.848 0 01-3.033-.607c-.947-.4-1.76-.96-2.494-1.68a7.756 7.756 0 01-1.66-2.48 7.657 7.657 0 01-.607-3.034c0-1.073.193-2.08.607-3.054.386-.926.96-1.76 1.66-2.473a7.878 7.878 0 012.487-1.68 7.61 7.61 0 013.034-.607zm0 .686c-1.967 0-3.64.7-5.021 2.094-1.407 1.387-2.094 3.067-2.094 5.034 0 1.947.687 3.627 2.094 5 1.374 1.388 3.054 2.094 5.02 2.094 1.948 0 3.628-.706 5.021-2.093 1.394-1.374 2.074-3.054 2.074-5.001 0-1.967-.687-3.647-2.074-5.034-1.393-1.387-3.067-2.094-5.02-2.094zm10.074.587l-2.14 1.394c.187.273.347.56.494.853l2.273-1.167c-.187-.373-.4-.733-.627-1.08zm-20.136.007c-.226.353-.44.713-.633 1.093l2.274 1.16c.16-.306.326-.593.506-.873zm10.062.106c1.76 0 3.273.62 4.54 1.887 1.247 1.247 1.854 2.747 1.854 4.541 0 1.76-.607 3.274-1.854 4.52-1.26 1.248-2.78 1.868-4.54 1.868-1.774 0-3.294-.62-4.52-1.867-1.261-1.247-1.888-2.767-1.888-4.521 0-1.787.627-3.294 1.887-4.54 1.234-1.26 2.747-1.888 4.52-1.888zm0 .72c-1.567 0-2.927.547-4.04 1.66-1.121 1.121-1.661 2.461-1.661 4.041 0 1.567.54 2.907 1.66 4.028 1.12 1.12 2.474 1.68 4.04 1.68 1.58 0 2.908-.56 4.028-1.674 1.12-1.12 1.68-2.46 1.68-4.027 0-1.58-.56-2.927-1.68-4.04-1.12-1.12-2.44-1.667-4.027-1.667zM12 7.01c.086 0 .172.002.259.006 1.36.067 2.507.627 3.434 1.647.927 1.013 1.36 2.213 1.28 3.587-.047 1.387-.607 2.54-1.627 3.467-1.04.927-2.24 1.36-3.614 1.28-1.386-.08-2.54-.62-3.467-1.626-.913-1.04-1.34-2.234-1.28-3.628.08-1.373.62-2.527 1.66-3.447.944-.869 2.07-1.286 3.355-1.286zm11.2.68l-2.386.926c.12.3.22.614.306.934l2.467-.654c-.106-.413-.24-.813-.386-1.207zM.786 7.71c-.147.386-.28.78-.387 1.186l2.467.66c.087-.32.194-.633.307-.94zm11.222.133c-.16 0-.314.013-.467.026v8.262h.007c.14.033.3.033.46.033.16 0 .32 0 .46-.033h.006V7.869c-.153-.013-.306-.026-.466-.026zm-1.407.233a4.03 4.03 0 00-.927.467v6.907c.007.007.013.007.02.014.28.187.593.347.907.453zm2.814.007v7.841a3.978 3.978 0 00.926-.467v-6.9c-.293-.2-.6-.36-.926-.474zm-4.668 1.32a4.031 4.031 0 00-.907 2.594c0 .726.16 1.393.494 1.967.12.226.253.433.413.633zm6.521.013v5.174c.16-.193.294-.406.414-.613.32-.587.473-1.254.473-1.967 0-.987-.287-1.854-.887-2.594zm-15.129.707c-.06.414-.106.827-.126 1.247l2.547.133c.02-.333.053-.66.106-.987zm23.71 0l-2.52.4c.047.327.087.654.107.987v.007l2.547-.134v-.006c-.02-.427-.067-.84-.134-1.254zm-2.407 2.367c-.026.34-.06.674-.113 1l2.527.394c.067-.414.107-.834.133-1.26zm-18.876.013l-2.547.134c.02.42.067.827.127 1.227l2.52-.4a7.306 7.306 0 01-.1-.96zm18.563 1.947c-.087.32-.193.634-.307.94l2.387.914c.147-.393.28-.793.394-1.207zm-18.256.014l-2.467.653c.107.407.233.8.38 1.187l2.387-.9a12.78 12.78 0 01-.3-.94zm.7 1.827L1.3 17.458c.186.366.393.726.62 1.073l2.147-1.38c-.174-.274-.34-.56-.494-.86zm16.843.006a8.34 8.34 0 01-.494.854l2.14 1.393c.227-.353.44-.72.634-1.093zm-15.77 1.64l-1.98 1.614c.267.327.547.64.84.934l1.814-1.8a9.07 9.07 0 01-.673-.747zm14.683.014c-.2.26-.42.507-.654.733l1.8 1.807c.3-.3.58-.613.847-.94zm-13.276 1.4l-1.613 1.98c.327.267.667.514 1.02.74l1.4-2.133c-.28-.187-.546-.38-.807-.587zm11.882 0a8.39 8.39 0 01-.78.574l1.38 2.146c.354-.233.694-.48 1.02-.74zM7.706 20.425l-1.16 2.273c.373.187.76.36 1.153.514l.9-2.387a9.83 9.83 0 01-.893-.4zm8.588 0c-.293.146-.594.28-.9.393l.9 2.394c.4-.154.78-.327 1.16-.514zm-6.734.706l-.667 2.467c.4.107.807.194 1.22.26l.407-2.52a9.09 9.09 0 01-.96-.207zm4.887 0c-.32.087-.647.154-.973.207l.4 2.52a12.52 12.52 0 001.226-.26zm-2.94.307l-.147 2.547c.42.02.84.02 1.267 0l-.134-2.547c-.333.02-.66.02-.986 0Z" />
    </svg>
  );
};

Prezi.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Prezi.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Prezi;
