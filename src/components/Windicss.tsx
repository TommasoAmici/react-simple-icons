
    import * as React from 'react';

    export type WindicssProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Windicss = React.forwardRef<SVGSVGElement, WindicssProps>(function Windicss({color = 'currentColor', size = 24, title = "windicss", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M4.12 15.561H.96v2.431h3.16zm13.728 4.22A4.224 4.224 0 0113.628 24c-2.452 0-3.918-1.838-3.918-3.617h2.412c0 .5.467 1.206 1.506 1.206a1.81 1.81 0 001.809-1.809c0-.997-.917-1.808-2.563-1.808H5.589v-2.411h7.285c3.097 0 4.974 1.893 4.974 4.22zA4.224 4.224 0 0113.628 24c-2.452 0-3.918-1.838-3.918-3.617h2.412c0 .5.467 1.206 1.506 1.206a1.81 1.81 0 001.809-1.809c0-.997-.917-1.808-2.563-1.808H5.589v-2.411h7.285c3.097 0 4.974 1.893 4.974 4.22zM18.48 3.72c-2.66 0-4.536 2.022-4.536 4.682h2.136c0-1.322.96-2.282 2.4-2.282s2.16.96 2.16 2.282-.935 2.411-3.48 2.411H.96v2.411h16.56c3.769 0 5.52-2.422 5.52-4.822 0-2.66-1.8-4.682-4.56-4.682zm-5.981.5A4.224 4.224 0 008.279 0C5.827 0 4.361 1.838 4.361 3.617h2.411c0-.5.468-1.206 1.507-1.206a1.81 1.81 0 011.809 1.809c0 .997-.728 1.808-2.563 1.808H.96v2.411h6.565c3.097 0 4.974-1.893 4.974-4.22zA4.224 4.224 0 008.279 0C5.827 0 4.361 1.838 4.361 3.617h2.411c0-.5.468-1.206 1.507-1.206a1.81 1.81 0 011.809 1.809c0 .997-.728 1.808-2.563 1.808H.96v2.411h6.565c3.097 0 4.974-1.893 4.974-4.22z" />
        </svg>
      );
    });

    export default Windicss
  