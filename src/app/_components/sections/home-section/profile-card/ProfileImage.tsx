import Image from "next/image";

type TProfileImageProps = {
  src: string;
};
export function ProfileImage({ src }: TProfileImageProps) {
  return (
    <div className="flex w-full justify-center py-4">
      <div className="relative h-60 w-60 rounded-full bg-secondary">
        <Image
          src={src}
          alt="profile"
          className="object-contain"
          fill
          priority
          // sizes="100vw"
        />
      </div>
    </div>
  );
}
