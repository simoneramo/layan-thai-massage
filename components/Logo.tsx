/**
 * Layan wordmark, rendered as a CSS mask so it can be any colour.
 *
 * The source logo is a flat JPG (cream background, charcoal ink), which can't
 * be recoloured with CSS. layan-logo-mask.png is that logo turned into an
 * alpha mask (ink = opaque, background = transparent), generated from the JPG.
 * Painting it with `background-color: currentColor` lets each usage set the
 * colour with a normal text-* class — plum in the header, white in the footer —
 * on a transparent background, staying crisp at any size.
 *
 * Set the colour with a text-* class and the height with an h-* class; the
 * width follows from the logo's aspect ratio.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Layan Traditional Thai Massage"
      className={className}
      style={{
        display: "inline-block",
        aspectRatio: "630 / 320",
        backgroundColor: "currentColor",
        WebkitMaskImage: "url(/layan-logo-mask.png)",
        maskImage: "url(/layan-logo-mask.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
