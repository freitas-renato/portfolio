import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
    src: string | StaticImport;
    alt: string;
};

export default function CustomImage({ src, alt }: Props) {
    return (
        <Image
            className="h-full w-full overflow-clip rounded-lg object-contain"
            src={src}
            alt={alt}
            height={500}
            width={500}
        />
    );
}
