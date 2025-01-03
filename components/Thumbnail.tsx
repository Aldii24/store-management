import { cn, getFileIcon } from "@/lib/utils";
import Image from "next/image";

interface Props {
  type: string;
  extension: string;
  url?: string;
  imageClassname?: string;
  className?: string;
}

export const Thumbnail = ({
  type,
  extension,
  url = "",
  imageClassname,
  className,
}: Props) => {
  const isImage = type === "image" && extension !== "svg";

  return (
    <figure className={cn("thumbnail", className)}>
      <Image
        src={isImage ? url : getFileIcon(extension, type)}
        alt="thumbnail"
        width={100}
        height={100}
        className={cn(
          "size-8 object-contain",
          imageClassname,
          isImage && "thumbnail-image"
        )}
      />
    </figure>
  );
};

export default Thumbnail;
