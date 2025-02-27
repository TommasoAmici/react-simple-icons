
    import * as React from 'react';

    export type AppveyorProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Appveyor = React.forwardRef<SVGSVGElement, AppveyorProps>(function Appveyor({color = 'currentColor', size = 24, title = "appveyor", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M 12,0 C 18.6,0 24,5.4 24,12 24,18.6 18.6,24 12,24 5.4,24 0,18.6 0,12 0,5.4 5.4,0 12,0 Z m 2.94,14.34 C 16.26,12.66 16.08,10.26 14.4,9 12.78,7.74 10.38,8.04 9,9.72 7.68,11.4 7.86,13.8 9.54,15.06 c 1.68,1.26 4.08,0.96 5.4,-0.72 z m -6.42,7.8 c 0.72,0.3 2.28,0.6 3.06,0.6 l 5.22,-7.56 c 1.68,-2.52 1.26,-5.94 -1.08,-7.8 -2.1,-1.68 -5.04,-1.62 -7.14,0 l -7.26,5.58 c 0.18,1.92 0.72,2.88 0.72,2.94 l 4.14,-4.5 c -0.3,1.98 0.42,4.02 2.1,5.28 1.44,1.14 3.18,1.44 4.86,1.08 z" />
        </svg>
      );
    });

    export default Appveyor
  