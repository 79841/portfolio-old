import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ProfileInfo } from "./ProfileInfo";

export const ProfileCardSkeleton = () => {
  return (
    <div>
      <Card className="sm:w-[350px]">
        <CardHeader>
          <div className="flex w-full items-center justify-center">
            <Skeleton className="my-4 h-60 w-60 rounded-full" />
          </div>
          <Skeleton className="h-8 w-[50%]" />
          <Skeleton className="h-6 w-[30%]" />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Skeleton className="h-6 w-[80%]" />
          <Skeleton className="h-6 w-[60%]" />
          <Skeleton className="h-6 w-[80%]" />
          <Skeleton className="h-6 w-[60%]" />
          <Skeleton className="h-6 w-[80%]" />
          <Skeleton className="h-6 w-[60%]" />
          <Skeleton className="h-6 w-[80%]" />
          <Skeleton className="mb-16 h-6 w-[60%]" />
        </CardContent>
        {/* <CardFooter className="flex justify-end">
          <FlipButton onClick={handleFilp} value="Go back" />
        </CardFooter> */}
      </Card>
    </div>
  );
};
