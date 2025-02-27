
    import * as React from 'react';

    export type FacepunchProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Facepunch = React.forwardRef<SVGSVGElement, FacepunchProps>(function Facepunch({color = 'currentColor', size = 24, title = "facepunch", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12 0C5.39 0 .004 5.388.004 12S5.39 24 12 24s11.996-5.388 11.996-12S18.627 0 12 0zm0 21.314c-5.131 0-9.294-4.164-9.294-9.297C2.706 6.884 6.869 2.72 12 2.72s9.294 4.164 9.294 9.297c0 5.133-4.163 9.297-9.294 9.297zm-.561-10.725l-1.92-1.904-1.41 1.411L6.75 8.719l-1.92 1.904L6.206 12l-1.444 1.445 1.92 1.921 1.427-1.445L9.587 15.4l1.92-1.921L10.029 12l1.41-1.411zm7.748-.051l-1.41 1.411 1.478 1.479-1.92 1.904-1.478-1.479-1.444 1.445-1.903-1.921 1.444-1.428-1.376-1.377 1.903-1.921 1.376 1.377 1.41-1.411 1.92 1.921z" />
        </svg>
      );
    });

    export default Facepunch
  