
    import * as React from 'react';

    export type DataversioncontrolProps = React.ComponentPropsWithoutRef<'svg'> & {
      /**
       * Hex color or color name
       */
      title?: string;
      /**
       * The size of the Icon.
       */
      color?: string;
      /**
       * The title provides an accessible short text description to the SVG
       */
      size?: string | number;
    };

    const Dataversioncontrol = React.forwardRef<SVGSVGElement, DataversioncontrolProps>(function Dataversioncontrol({color = 'currentColor', size = 24, title = "dataversioncontrol", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M.291 4.508a.269.269 0 0 0-.201.094.304.304 0 0 0-.09.226v11.14a.309.309 0 0 0 .09.227c.025.03.055.054.09.07a.266.266 0 0 0 .111.024h3.92c1.552 0 2.886-.58 3.988-1.734.298-.312.558-.643.783-.99l2.584 5.744c.066.122.156.183.274.183h.162c.118 0 .21-.06.275-.183l2.631-5.811c.234.389.515.757.86 1.102 1.145 1.142 2.532 1.714 4.16 1.714 1.55 0 2.868-.53 3.955-1.591.151-.154.156-.3.015-.444l-1.27-1.361c-.13-.141-.271-.146-.423-.016-.608.525-1.335.787-2.182.787-.91 0-1.67-.324-2.285-.974-.614-.65-.883-1.434-.883-2.354 0-.929.267-1.723.875-2.384.607-.662 1.366-.993 2.278-.993.845.001 1.578.28 2.197.836.13.13.267.13.408 0l1.27-1.328c.151-.154.145-.304-.02-.459-1.107-1.017-2.418-1.525-3.935-1.525-1.628 0-3.016.573-4.16 1.728a5.58 5.58 0 0 0-1.315 2.069l-2.467 5.63h-.1L9.226 7.862c-.004-.01-.012-.012-.016-.021a5.615 5.615 0 0 0-1.084-1.596C7.02 5.094 5.82 4.625 4.211 4.508H.29zm2.217 2.474h1.54c.902 0 1.652.329 2.245.985.593.656.89 1.462.89 2.416.001.963-.296 1.773-.89 2.43-.594.656-1.342.984-2.244.984H2.508V6.982z" />
        </svg>
      );
    });

    export default Dataversioncontrol
  