
    import * as React from 'react';

    export type IntegromatProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Integromat = React.forwardRef<SVGSVGElement, IntegromatProps>(function Integromat({color = 'currentColor', size = 24, title = "integromat", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12 0c-.681 0-1.349.057-2 .166v4.09a8.002 8.002 0 012-.253c.69 0 1.36.088 2 .253V.166C13.35.056 12.68 0 12 0zM8.002.683C3.342 2.332 0 6.78 0 12c0 6.623 5.377 12 12 12s12-5.377 12-12C24 6.78 20.658 2.332 15.999.683v4.392a7.997 7.997 0 11-7.997 0zM12 6.003c-.7 0-1.374.12-2 .342v9.32a5.98 5.98 0 002 .343c.7 0 1.374-.121 2-.342V6.345a5.977 5.977 0 00-2-.342z" />
        </svg>
      );
    });

    export default Integromat
  