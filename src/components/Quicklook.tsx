
    import * as React from 'react';

    export type QuicklookProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Quicklook = React.forwardRef<SVGSVGElement, QuicklookProps>(function Quicklook({color = 'currentColor', size = 24, title = "quicklook", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M18.814 11.913a4.786 4.786 0 0 1-4.786 4.786 4.786 4.786 0 0 1-4.786-4.786 4.786 4.786 0 0 1 4.786-4.786 4.786 4.786 0 0 1 4.786 4.786zm1.687 0a6.473 6.473 0 0 1-6.473 6.473 6.473 6.473 0 0 1-6.473-6.473 6.473 6.473 0 0 1 6.473-6.473 6.473 6.473 0 0 1 6.473 6.473zM7.155 1c-2.992.545-5.533 1.037-5.638 1.084a1.274 1.274 0 0 0-.352.298l-.158.205v18.819l.158.205c.088.111.246.246.352.299.24.111 11.095 2.09 11.481 2.09.322 0 .527-.094.756-.334.269-.287.286-.474.269-2.64l-.018-2.003h.293c1.03 0 2.447-.445 3.425-1.077.229-.146.434-.27.457-.27.023 0 .755.715 1.622 1.587.872.873 1.65 1.622 1.739 1.669.088.047.28.082.427.082.592 0 1.025-.416 1.025-.972 0-.17-.03-.38-.065-.474-.029-.088-.784-.89-1.668-1.78l-1.61-1.61.216-.322c1.154-1.716 1.458-4.075.785-6.095-.357-1.066-.837-1.827-1.692-2.688-1.124-1.13-2.29-1.745-3.835-2.014a6.683 6.683 0 0 0-.82-.088h-.299l.018-2.002c.017-2.143 0-2.313-.258-2.623-.222-.264-.439-.352-.825-.346-.188 0-2.787.451-5.785 1.001z" />
        </svg>
      );
    });

    export default Quicklook
  