import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {getRemoteImage} from "@/lib/content";

type Props = {
    src: string;
    alt: string;
};

export default async function CustomImage({ src, alt }: Props) {
    const imageDownloadUrl = await getRemoteImage(src);

    return (
        <div className="flex h-[420px] w-full flex-none snap-center flex-col items-center justify-center bg-transparent">
            <Image
                className="h-full w-full overflow-clip rounded-lg object-contain"
                src={imageDownloadUrl}
                alt={alt}
                height={500}
                width={500}
            />
        </div>
    );
}
