import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TProfileImageProps = {
  src: string;
};
export function ProfileImage({ src }: TProfileImageProps) {
  return (
    <div className="flex w-full justify-center">
      <Avatar className="my-[30px] h-60 w-60">
        <AvatarImage
          className="bg-secondary object-contain p-4"
          src={src}
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
