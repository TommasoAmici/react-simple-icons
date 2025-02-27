
    import * as React from 'react';

    export type ProtonvpnProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Protonvpn = React.forwardRef<SVGSVGElement, ProtonvpnProps>(function Protonvpn({color = 'currentColor', size = 24, title = "protonvpn", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M22.971 2.68a2.68 2.68 0 1 0-5.361 0v.082L5.927 6.534a2.68 2.68 0 1 0-2.218 4.187c.279-.004.555-.052.819-.142l7.673 9.69a2.68 2.68 0 1 0 4.211-.984l4.08-13.937a2.669 2.669 0 0 0 2.479-2.668zm-8.29 15.905c-.414.005-.82.107-1.187.296L5.998 9.393a2.66 2.66 0 0 0 .38-1.115L18.31 4.47c.124.14.263.267.415.379l-4.033 13.735h-.012z" />
        </svg>
      );
    });

    export default Protonvpn
  