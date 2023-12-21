import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileImage() {
  return (
    <div className="flex w-full justify-center">
      <Avatar className="my-[30px] h-60 w-60">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
