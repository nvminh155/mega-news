import { cn } from "@/lib/cn";

import AppLink from "./AppLink";

const Logo = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <AppLink
      to={"/"}
      className={cn(
        "select-none text-[40px] font-semibold text-secondary",
        className
      )}
    >
      MEGA.news
    </AppLink>
  );
};

export default Logo;
