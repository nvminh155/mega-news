import { TUser } from "@/types";

import { NavBarInfo } from "@/components/NavbarInfo/NavBarInfo";

import { InfoWirer } from "./InfoWriter/InfoWirter";
import { LatestPosts } from "./LatestPosts";
import { WriterButton } from "./WriterButton";

interface WriterProps {
  User: TUser;
}
export const Writer: React.FC<WriterProps> = ({ User }) => {
  return (
    <div>
      <NavBarInfo
        User={User}
        MenuItem={<InfoWirer User={User} />}
        AppButton={<WriterButton />}
      />
      <LatestPosts authorId={User.id} />
    </div>
  );
};
