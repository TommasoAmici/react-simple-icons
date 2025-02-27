
    import * as React from 'react';

    export type KinopoiskProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Kinopoisk = React.forwardRef<SVGSVGElement, KinopoiskProps>(function Kinopoisk({color = 'currentColor', size = 24, title = "kinopoisk", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M23.2732 16.1031c-2.266 6.226-9.1503 9.4362-15.3763 7.1701C1.6709 21.0072-1.5393 14.123.7268 7.897 2.9928 1.6709 9.877-1.5393 16.103.7268c6.226 2.266 9.4362 9.1503 7.1701 15.3763zm-9.864-3.5902c.2832-.7783-.118-1.6388-.8963-1.922-.7783-.2833-1.6388.118-1.922.8962-.2833.7783.118 1.6388.8962 1.922.7783.2833 1.6388-.118 1.922-.8962zm-4.357 3.2017c.5665-1.5565-.236-3.2776-1.7926-3.8441-1.5565-.5665-3.2775.236-3.844 1.7925-.5666 1.5565.236 3.2776 1.7925 3.8441s3.2775-.236 3.844-1.7925zm3.0773-8.455c.5665-1.5565-.236-3.2775-1.7925-3.844-1.5565-.5666-3.2776.236-3.8441 1.7925s.236 3.2775 1.7925 3.844c1.5565.5666 3.2776-.236 3.8441-1.7925zm8.455 3.0774c.5665-1.5565-.236-3.2776-1.7926-3.8441-1.5565-.5665-3.2775.236-3.844 1.7925-.5666 1.5565.236 3.2776 1.7925 3.8441s3.2775-.236 3.844-1.7925zm-3.0774 8.455c.5665-1.5566-.236-3.2777-1.7925-3.8442s-3.2776.236-3.8441 1.7926c-.5665 1.5565.236 3.2775 1.7925 3.844 1.5565.5666 3.2776-.236 3.8441-1.7925Z" />
        </svg>
      );
    });

    export default Kinopoisk
  