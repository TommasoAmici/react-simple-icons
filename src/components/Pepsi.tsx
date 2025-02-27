
    import * as React from 'react';

    export type PepsiProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Pepsi = React.forwardRef<SVGSVGElement, PepsiProps>(function Pepsi({color = 'currentColor', size = 24, title = "pepsi", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M18.43 3.277A10.839 10.839 0 002.718 17.594c7.455-2.033 13.503-7 15.712-14.317M12 22.84a10.839 10.839 0 009.21-16.574 7.607 7.607 0 01-2.873 8.195c-3.285 2.416-8.06 2.432-14.649 4.494A10.817 10.817 0 0012 22.84M24 12A12 12 0 1112 0a12 12 0 0112 12" />
        </svg>
      );
    });

    export default Pepsi
  