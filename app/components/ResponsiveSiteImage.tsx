import { getImageProps } from "next/image";

type ResponsiveSiteImageProps = {
  desktopSrc: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
  pictureClassName?: string;
  priority?: boolean;
  quality?: number;
  desktopWidth?: number;
  desktopHeight?: number;
  mobileWidth?: number;
  mobileHeight?: number;
  desktopSizes?: string;
  mobileSizes?: string;
};

export default function ResponsiveSiteImage({
  desktopSrc,
  mobileSrc,
  alt,
  className = "",
  pictureClassName = "",
  priority = false,
  quality = 95,
  desktopWidth = 1586,
  desktopHeight = 992,
  mobileWidth = 1122,
  mobileHeight = 1402,
  desktopSizes = "50vw",
  mobileSizes = "100vw",
}: ResponsiveSiteImageProps) {
  const desktop = getImageProps({
    src: desktopSrc,
    alt,
    width: desktopWidth,
    height: desktopHeight,
    quality,
    sizes: desktopSizes,
  }).props;

  const mobile = getImageProps({
    src: mobileSrc || desktopSrc,
    alt,
    width: mobileWidth,
    height: mobileHeight,
    quality,
    sizes: mobileSizes,
  }).props;

  return (
    <picture className={pictureClassName}>
      <source
        media="(max-width: 720px)"
        srcSet={mobile.srcSet}
        sizes={mobile.sizes}
      />
      <source
        media="(min-width: 721px)"
        srcSet={desktop.srcSet}
        sizes={desktop.sizes}
      />
      <img
        src={desktop.src}
        alt={alt}
        width={desktop.width}
        height={desktop.height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
