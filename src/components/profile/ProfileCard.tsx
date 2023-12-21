import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileImage } from "./ProfileImage";
import { GradientText } from "../gradient-text";
import { siteMetaData } from "@/data/siteMetaData";

export function ProfileCard() {
  return (
    <div className="group flex min-w-[350px] [perspective:1000px]">
      <div className="relative">
        <div className="absolute left-0 top-0 z-50 duration-1000 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
          <Card className="w-[350px]">
            <CardHeader>
              <ProfileImage />
              <CardTitle>
                <GradientText content={siteMetaData.username} />
              </CardTitle>
              <CardDescription>About</CardDescription>
            </CardHeader>
            <CardContent>
              {/* TODO: add Info and Icon */}
              {`이름`}
              <br />
              {`학교`}
              <br />
              {`생년월일`}
              <br />
              {`주소지`}
              <br />
              {`이메일`}
              <br />
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
        <div className="absolute left-0 top-0 duration-1000 [transform:rotateY(180deg)] group-hover:[transform:rotateY(360deg)]">
          <Card className="w-[350px]">
            <CardHeader>
              <ProfileImage />
              <CardTitle>TMI</CardTitle>
              <CardDescription>
                보안전문가에서 프론트엔드 개발자로!!
              </CardDescription>
            </CardHeader>
            <CardContent>보안에서 프론트엔드 개발자로</CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
