
    import * as React from 'react';

    export type OnlyfansProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Onlyfans = React.forwardRef<SVGSVGElement, OnlyfansProps>(function Onlyfans({color = 'currentColor', size = 24, title = "onlyfans", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm-.012 1.256c5.942-.007 10.755 4.805 10.755 10.741S17.93 22.746 11.995 22.745c-5.936 0-10.749-4.812-10.749-10.748 0-5.927 4.799-10.735 10.742-10.741zm-.32 4.567a4.496 4.496 0 0 0-3.164 1.299 4.338 4.338 0 0 0-1.317 3.117v.979l-.556 1.003v1.444a4.842 4.842 0 0 0 1.465 3.462 5.031 5.031 0 0 0 3.53 1.44h.896c1.316 0 2.58-.517 3.52-1.44a4.834 4.834 0 0 0 1.467-3.462V12.22l-.55-1.003v-.98a4.35 4.35 0 0 0-1.32-3.116 4.496 4.496 0 0 0-3.166-1.299zm0 1.97h.805a2.496 2.496 0 0 1 1.75.724c.465.452.728 1.073.73 1.722l.003 1.01h-5.77v-1.01c.002-.649.265-1.27.73-1.722a2.499 2.499 0 0 1 1.751-.725zm.464 5.196h.03c1.534-.023 1.95 2.104.519 2.66h-.086v1.156a.502.502 0 0 1-.232.426h-.511a.52.52 0 0 1-.24-.434V15.65c-1.43-.556-1.015-2.683.52-2.66Z" />
        </svg>
      );
    });

    export default Onlyfans
  