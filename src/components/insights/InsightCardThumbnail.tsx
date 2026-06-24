import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  height?: number;
};

export default function InsightCardThumbnail({ src, alt, height = 200 }: Props) {
  return (
    <div style={{ position: "relative", width: "100%", height }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
