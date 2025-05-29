import Image from "next/image";

export default function ProfilePicture({ src, alt, width, height, className }) {
  return (
    <div className="overflow-hidden bg-transparent">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover ${className}`}
      />
    </div>
  );
}
