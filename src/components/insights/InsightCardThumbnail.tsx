type Props = {
  src: string;
  alt: string;
  height?: number;
};

export default function InsightCardThumbnail({ src, alt, height = 200 }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height,
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
      }}
    />
  );
}
